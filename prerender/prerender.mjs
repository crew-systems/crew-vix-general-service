// Pré-render do build Vite (SPA) para robôs: gera dist/<rota>/index.html já renderizado.
// Uso: node prerender.mjs <pasta-dist>   (CHROME_PATH aponta para o Chromium)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const DIST = path.resolve(process.argv[2] || "dist");
const CHROME = process.env.CHROME_PATH || "/usr/bin/chromium";

// Rotas fora do sitemap que também existem (utilitárias noindex e aliases).
const EXTRA_ROUTES = [
  "/review", "/get-your-discount", "/marketing-form",
  "/thank-you", "/thanks", "/obrigado",
  "/quote", "/estimate", "/free-estimate",
];
const NOT_FOUND_PROBE = "/__prerender-not-found";

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".xml": "application/xml", ".txt": "text/plain", ".woff2": "font/woff2",
};

// A casca original do SPA, lida antes de sobrescrever o index.html.
const SHELL = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

function serve() {
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    const file = path.join(DIST, url);
    if (file.startsWith(DIST) && fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
      return fs.createReadStream(file).pipe(res);
    }
    res.writeHead(200, { "Content-Type": MIME[".html"] });
    res.end(SHELL); // fallback do SPA
  });
  return new Promise((ok) => server.listen(0, "127.0.0.1", () => ok(server)));
}

function routesFromSitemap() {
  const xml = fs.readFileSync(path.join(DIST, "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

async function render(browser, origin, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  await page.setRequestInterception(true);
  page.on("request", (r) => {
    // Só o próprio build: nada de analytics, chat, fontes, imagens ou vídeo externos.
    const local = r.url().startsWith(origin);
    const heavy = ["image", "media", "font"].includes(r.resourceType());
    local && !heavy ? r.continue() : r.abort();
  });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto(origin + route, { waitUntil: "networkidle0", timeout: 60000 });
  await page.waitForSelector("#root > *", { timeout: 15000 });
  await new Promise((r) => setTimeout(r, 500)); // helmet aplica o <head> depois do render

  const html = await page.evaluate(() => {
    const head = document.head;
    // Remove as tags estáticas do index.html que o Helmet já redefiniu (evita description/og duplicados).
    const key = (el) =>
      el.tagName === "LINK" ? `link:${el.rel}` :
      el.name ? `name:${el.name}` : el.getAttribute("property") ? `prop:${el.getAttribute("property")}` : null;
    const managed = new Set([...head.querySelectorAll("[data-rh]")].map(key).filter(Boolean));
    head.querySelectorAll("meta:not([data-rh]), link[rel=canonical]:not([data-rh])").forEach((el) => {
      const k = key(el);
      if (k && managed.has(k)) el.remove();
    });
    // Scripts/widgets de terceiros injetados em runtime não entram no HTML estático.
    document.querySelectorAll("script[src]").forEach((s) => {
      if (!s.getAttribute("src").startsWith("/")) s.remove();
    });
    document.querySelectorAll("chat-widget, [id^='lc-chat'], [class*='lcw-']").forEach((el) => el.remove());
    // Vídeo fica sem fonte no HTML estático: o React recria o <video> ao carregar e,
    // com autoplay aqui, o celular baixava o vídeo duas vezes (e disputava banda com
    // o CSS/JS). O pôster em <picture> continua pintando o hero antes do JS.
    document.querySelectorAll("video").forEach((v) => {
      v.removeAttribute("autoplay");
      v.removeAttribute("poster");
      v.removeAttribute("src");
      v.setAttribute("preload", "none");
      v.querySelectorAll("source").forEach((s) => s.remove());
    });
    return "<!doctype html>\n" + document.documentElement.outerHTML;
  });
  await page.close();
  return { html, errors };
}

function outFile(route) {
  if (route === NOT_FOUND_PROBE) return path.join(DIST, "404.html");
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.replace(/^\/+|\/+$/g, ""), "index.html");
}

const server = await serve();
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const routes = [...new Set([...routesFromSitemap(), ...EXTRA_ROUTES, NOT_FOUND_PROBE])];
let failed = 0;
for (const route of routes) {
  try {
    const { html, errors } = await render(browser, origin, route);
    const hasH1 = /<h1[\s>]/i.test(html);
    const file = outFile(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    console.log(`${hasH1 ? "ok " : "!  "} ${route} → ${path.relative(DIST, file)} (${html.length} bytes)${errors.length ? " js-errors: " + errors.join(" | ") : ""}`);
  } catch (e) {
    failed++;
    console.error(`ERRO ${route}: ${e.message}`);
  }
}
await browser.close();
server.close();
if (failed) {
  console.error(`${failed} rota(s) falharam no pré-render`);
  process.exit(1);
}

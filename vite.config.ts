import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "@leadconnector/vibe-tagger";
import fs from "fs";
import { SITE_URL } from "./src/config/site";
import { buildLlmsTxt } from "./src/lib/llmsTxt";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".modal.host"],
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "inject-site-url",
      transformIndexHtml: (html: string) => html.replaceAll("%SITE_URL%", SITE_URL),
    },
    {
      // Keep public/llms.txt in sync with the site data before dev or build copies it.
      name: "generate-llms-txt",
      buildStart() {
        const file = path.resolve(__dirname, "public/llms.txt");
        const content = buildLlmsTxt();
        const current = fs.existsSync(file) ? fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n") : "";
        if (current !== content) {
          fs.writeFileSync(file, content);
        }
      },
    },
    mode === "development" && componentTagger({ tailwindConfig: true }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

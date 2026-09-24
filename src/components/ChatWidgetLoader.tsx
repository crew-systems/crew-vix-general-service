import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const CHAT_SCRIPT_ID = "ghl-chat-loader";
const CHATLESS_ROUTES = new Set([
  "/contact", "/estimate", "/quote", "/free-estimate",
  "/review", "/get-your-discount", "/thank-you", "/obrigado", "/thanks",
]);

export function ChatWidgetLoader() {
  const { pathname } = useLocation();
  const chatless = CHATLESS_ROUTES.has(pathname.replace(/\/$/, "") || "/");

  useLayoutEffect(() => {
    document.body.classList.toggle("chat-suppressed", chatless);
    return () => document.body.classList.remove("chat-suppressed");
  }, [chatless]);

  useEffect(() => {
    if (chatless || document.getElementById(CHAT_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = CHAT_SCRIPT_ID;
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
    script.dataset.widgetId = "6aa306f0526fc17e70aa882c";
    script.defer = true;
    document.body.appendChild(script);
  }, [chatless]);

  return null;
}

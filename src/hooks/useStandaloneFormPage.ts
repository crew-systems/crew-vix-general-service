import { useEffect } from "react";

const CHAT_SELECTOR =
  '#lc-chat-widget, .lc-chat-widget, [id*="chat-widget"], [class*="lc-chat"], [data-widget-id]';
const EMBED_SCRIPT_ID = "ghl-form-embed-script";

/** Keep SMS landing pages focused on their single embedded form. */
export function useStandaloneFormPage(loadEmbed: boolean) {
  useEffect(() => {
    const originalDisplays = new Map<HTMLElement, string>();
    const hideChat = () => {
      document.querySelectorAll<HTMLElement>(CHAT_SELECTOR).forEach((element) => {
        if (!originalDisplays.has(element)) {
          originalDisplays.set(element, element.style.display);
        }
        element.style.display = "none";
      });
    };

    hideChat();
    const timers = [800, 2500].map((delay) => window.setTimeout(hideChat, delay));
    const observer = new MutationObserver(hideChat);
    observer.observe(document.body, { childList: true, subtree: true });

    if (loadEmbed && !document.getElementById(EMBED_SCRIPT_ID) &&
        !document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const script = document.createElement("script");
      script.id = EMBED_SCRIPT_ID;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      timers.forEach(window.clearTimeout);
      observer.disconnect();
      originalDisplays.forEach((display, element) => {
        element.style.display = display;
      });
    };
  }, [loadEmbed]);
}

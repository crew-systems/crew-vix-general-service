import React, { useEffect, useRef, useState } from "react";

interface GHLFormEmbedProps {
  className?: string;
  minHeight?: number | string;
  instanceId?: string;
}

const GHL_FORM_ID = "xCsxxTefyGz05iGmy5el";

interface SubmitMessageContext {
  fromOwnIframe: boolean;
  iframeFocused: boolean;
}

export const isFormSubmittedMessage = (
  data: unknown,
  { fromOwnIframe, iframeFocused }: SubmitMessageContext,
): boolean => {
  // On a successful submit the GHL form posts ["set-sticky-contacts", ...] to the parent.
  // It can also fire on load for returning contacts, so require that the visitor has
  // actually interacted with (focused) this form before treating it as a submission.
  if (Array.isArray(data)) {
    return data[0] === "set-sticky-contacts" && fromOwnIframe && iframeFocused;
  }

  if (typeof data === "string") {
    const lower = data.toLowerCase();
    return (
      lower.includes("form_success") ||
      lower.includes("form-submitted") ||
      lower.includes("formsubmit") ||
      lower.includes("thank-you") ||
      lower.includes("thankyou")
    );
  }

  if (data && typeof data === "object") {
    const d = data as Record<string, unknown>;
    const type = String(d.type || "").toLowerCase();
    const action = String(d.action || "").toLowerCase();
    const message = String(d.message || "").toLowerCase();
    const status = String(d.status || "").toLowerCase();
    const redirectUrl = String(d.redirectUrl || d.url || "").toLowerCase();

    return (
      type.includes("submit") ||
      action.includes("submit") ||
      message.includes("success") ||
      status.includes("success") ||
      redirectUrl.includes("thank-you") ||
      redirectUrl.includes("thankyou") ||
      d.formId === GHL_FORM_ID
    );
  }

  return false;
};

export const GHLFormEmbed: React.FC<GHLFormEmbedProps> = ({
  className = "",
  minHeight = 625,
  instanceId = "main",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeId = instanceId
    ? `inline-${GHL_FORM_ID}-${instanceId}`
    : `inline-${GHL_FORM_ID}`;

  useEffect(() => {
    // Check if GoHighLevel form embed script already exists
    const existingScript =
      document.getElementById("ghl-form-embed-script") ||
      document.querySelector('script[src*="form_embed.js"]');

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "ghl-form-embed-script";
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);

    // Listen for GoHighLevel form submission postMessages to redirect to /thank-you
    const handleMessage = (event: MessageEvent) => {
      const origin = event.origin || "";
      const isFromGHL =
        origin.includes("leadconnectorhq.com") ||
        origin.includes("msgsndr.com") ||
        origin.includes("leadconnector") ||
        origin === window.location.origin;

      if (!isFromGHL) return;

      const iframe = iframeRef.current;
      const isFormSuccess = isFormSubmittedMessage(event.data, {
        fromOwnIframe: !!iframe && event.source === iframe.contentWindow,
        iframeFocused: !!iframe && document.activeElement === iframe,
      });

      if (isFormSuccess) {
        if (window.location.pathname !== "/thank-you") {
          window.location.assign("/thank-you");
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className={`relative w-full rounded-xl overflow-hidden ${className}`}>
      {/* Loading state skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-sm rounded-xl min-h-[360px]">
          <div className="w-8 h-8 border-3 border-[#C99A55] border-t-transparent rounded-full animate-spin mb-3" />
          <p className="text-xs font-bold text-[#00153F] uppercase tracking-wider">
            Loading Official VIX Form...
          </p>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
        style={{
          width: "100%",
          height: "100%",
          minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
          border: "none",
          borderRadius: "10px",
        }}
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form"
        data-height={typeof minHeight === "number" ? `${minHeight}` : "625"}
        data-layout-iframe-id={iframeId}
        data-form-id={GHL_FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Website Form"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default GHLFormEmbed;

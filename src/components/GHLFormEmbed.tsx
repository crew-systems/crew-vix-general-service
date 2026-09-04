import React, { useEffect, useState } from "react";

interface GHLFormEmbedProps {
  className?: string;
  minHeight?: number | string;
  instanceId?: string;
}

export const GHLFormEmbed: React.FC<GHLFormEmbedProps> = ({
  className = "",
  minHeight = 874,
  instanceId = "main",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeId = instanceId ? `inline-ZPe9ADAkmygEVDdixGlE-${instanceId}` : "inline-ZPe9ADAkmygEVDdixGlE";

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

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-full rounded-xl overflow-hidden ${className}`}>
      {/* Loading state skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-sm rounded-xl min-h-[420px]">
          <div className="w-8 h-8 border-3 border-[#C99A55] border-t-transparent rounded-full animate-spin mb-3" />
          <p className="text-xs font-bold text-[#1A2B44] uppercase tracking-wider">
            Loading Official VIX Form...
          </p>
        </div>
      )}

      <iframe
        src="https://api.leadconnectorhq.com/widget/form/ZPe9ADAkmygEVDdixGlE"
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
        data-height="874"
        data-layout-iframe-id={iframeId}
        data-form-id="ZPe9ADAkmygEVDdixGlE"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Website Form"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default GHLFormEmbed;

import React from "react";
import { Shield, Building2, Hammer, CircuitBoard, Zap, MapPin } from "lucide-react";

export const TrustMarquee: React.FC = () => {
  const highlights = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Building2, text: "Residential & Commercial" },
    { icon: Hammer, text: "Foundation to Finish" },
    { icon: CircuitBoard, text: "Electrical · Plumbing · HVAC" },
    { icon: Zap, text: "Smart Home · Solar · EV" },
    { icon: MapPin, text: "Serving Five New England States" },
  ];

  return (
    <section
      className="vix-navy-gradient-header py-3.5 border-y border-[#C99A55]/25 relative z-20 overflow-hidden"
      aria-label="Trust Highlights - VIX General Services"
    >
      <div className="flex w-max animate-marquee">
        {/* Repeat twice for a seamless continuous loop */}
        {[...highlights, ...highlights].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center px-8 sm:px-12 border-r border-white/15"
            >
              <Icon
                className="w-5 h-5 text-[#C99A55] mr-3 shrink-0"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="text-[#EDE4D6] font-heading font-semibold text-sm sm:text-base whitespace-nowrap">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

import React from "react";
import {
  Shield,
  ThumbsUp,
  Calendar,
  Award,
  CheckCircle,
  Percent,
} from "lucide-react";

export const TrustMarquee: React.FC = () => {
  const highlights = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: ThumbsUp, text: "Serving South Florida" },
    { icon: Award, text: "9+ Years Experience" },
    { icon: Calendar, text: "Fast Response" },
    { icon: CheckCircle, text: "100% Free Estimates" },
    { icon: Percent, text: "HVAC · Electrical · Solar · EV" },
  ];

  return (
    <section
      className="bg-[#1A2B44] py-3.5 border-y border-[#C99A55]/25 relative z-20 overflow-hidden"
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

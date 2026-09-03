import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { IMAGES } from "../data/landscapingData";

interface FinalCtaProps {
  onOpenEstimate: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenEstimate }) => {
  return (
    <section className="relative section-pad overflow-hidden bg-[#1A2B44]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.finalCta}
          alt="Solar panel installation on a residential roof - VIX General Services"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#1A2B44]/85 to-black/90" />
      </div>

      <div className="container relative z-10 mx-auto gutter-x text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/20 border border-[#C99A55]/40 text-[#C99A55] font-bold text-xs uppercase tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5" /> Ready To Get Started?
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[#EDE4D6] mb-5 tracking-tight leading-tight">
          READY TO GET STARTED?
        </h2>

        <p className="text-lg sm:text-xl text-[#EDE4D6]/90 mb-9 max-w-2xl mx-auto leading-relaxed font-normal">
          Get a free estimate today and experience the VIX difference in HVAC,
          electrical, solar, and EV charging service.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-base hover:bg-[#D4A55C] transition-all shadow-crisp-lg border border-[#1A2B44]/15"
          >
            <span>GET A FREE ESTIMATE</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { ClipboardList, Compass, Layers, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onOpenEstimate: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenEstimate,
}) => {
  const steps = [
    {
      num: "01",
      icon: ClipboardList,
      title: "REQUEST YOUR FREE ESTIMATE",
      description:
        "Tell us about your HVAC, electrical, solar, or EV charging project and provide your contact information to get started.",
    },
    {
      num: "02",
      icon: Compass,
      title: "SEND PHOTOS & PROJECT DETAILS",
      description:
        "Upload photos of your equipment, panel, or project so we can better understand the scope of work.",
    },
    {
      num: "03",
      icon: Layers,
      title: "WE REVIEW & PROVIDE YOUR NEXT STEP",
      description:
        "Our team reviews your photos and project details. Many estimates can be discussed by phone, and an on-site visit is scheduled only when necessary.",
    },
  ];

  return (
    <section className="section-pad bg-[#1A2B44] text-white overflow-hidden relative">
      <div className="container mx-auto gutter-x relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#C99A55] text-xs font-extrabold uppercase tracking-widest block mb-2">
            Simple &amp; Hassle-Free
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#EDE4D6] mb-4 tracking-tight">
            OUR 3-STEP PROCESS
          </h2>
          <p className="text-base sm:text-lg text-[#EDE4D6]/80 leading-relaxed">
            We make transforming your home simple and stress-free from day one.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-[#243652]/50 backdrop-blur-md rounded-lg p-7 border border-white/15 hover:border-[#C99A55]/50 transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-[#C99A55] text-[#1A2B44] flex items-center justify-center border border-[#1A2B44]/20 shadow-crisp">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <span className="text-3xl font-heading font-extrabold text-[#C99A55]/25">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-[#EDE4D6] mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#EDE4D6]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center text-xs font-bold text-[#C99A55]">
                  <span>Step {index + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-base hover:bg-[#D4A55C] transition-all shadow-crisp-lg border border-[#1A2B44]/15"
          >
            <span>Start Step 1: Free Estimate</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ServiceItem } from "../../data/servicesData";

interface ServiceDetailProcessProps {
  service: ServiceItem;
  onOpenEstimate: () => void;
}

export const ServiceDetailProcess: React.FC<ServiceDetailProcessProps> = ({
  service,
  onOpenEstimate,
}) => {
  return (
    <section className="section-pad bg-[#F5F6F8]">
      <div className="container mx-auto gutter-x">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A55]" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
            OUR {service.shortName.toUpperCase()} PROJECT PROCESS
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A seamless, transparent 4-step experience designed to eliminate stress, ensure safety, and guarantee lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-[#1A2B44]/10 shadow-crisp relative flex flex-col group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-heading font-extrabold text-[#C99A55]/60 group-hover:text-[#C99A55] transition-colors">
                  {step.step}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#1A2B44] text-[#EDE4D6] flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </div>
              </div>

              <h3 className="text-lg font-heading font-extrabold text-[#1A2B44] mb-2">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] hover:bg-[#243652] font-bold text-base transition-all shadow-crisp hover:shadow-crisp-lg"
          >
            <span>Start Step 1: Request Free Estimate</span>
            <ArrowRight className="w-5 h-5 text-[#C99A55]" />
          </button>
        </div>
      </div>
    </section>
  );
};

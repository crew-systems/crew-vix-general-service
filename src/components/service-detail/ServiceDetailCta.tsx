import React from "react";
import { Phone, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { ServiceItem } from "../../data/servicesData";
import { COMPANY_INFO } from "../../data/landscapingData";

interface ServiceDetailCtaProps {
  service: ServiceItem;
  onOpenEstimate: () => void;
}

export const ServiceDetailCta: React.FC<ServiceDetailCtaProps> = ({
  service,
  onOpenEstimate,
}) => {
  return (
    <section className="section-pad bg-[#1A2B44] text-[#EDE4D6] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C99A55]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#2F6FED]/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto gutter-x">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/20 border border-[#C99A55]/30 text-[#C99A55] text-xs font-extrabold uppercase tracking-wider mb-6">
            <Award className="w-3.5 h-3.5" />
            <span>Ready To Get Started?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 tracking-tight leading-tight">
            SCHEDULE YOUR {service.shortName.toUpperCase()} CONSULTATION TODAY
          </h2>

          <p className="text-base sm:text-lg text-[#EDE4D6]/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact VIX General Services for reliable, licensed {service.name.toLowerCase()}. Upfront pricing, clear timelines, and dedicated South Florida craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-base hover:bg-[#D4A55C] transition-all shadow-crisp hover:shadow-crisp-lg"
            >
              <span>Get Free {service.shortName} Estimate</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 transition-all backdrop-blur-md"
            >
              <Phone className="w-5 h-5 text-[#C99A55]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-white/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C99A55]" />
              <span>Licensed & Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C99A55]" />
              <span>Rapid Dispatch & Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C99A55]" />
              <span>100% Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

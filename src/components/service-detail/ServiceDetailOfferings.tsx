import React from "react";
import { CheckCircle2, ArrowRight, Wrench } from "lucide-react";
import { ServiceItem } from "../../data/servicesData";

interface ServiceDetailOfferingsProps {
  service: ServiceItem;
  onOpenEstimate: () => void;
}

export const ServiceDetailOfferings: React.FC<ServiceDetailOfferingsProps> = ({
  service,
  onOpenEstimate,
}) => {
  return (
    <section className="section-pad bg-white border-y border-[#1A2B44]/10">
      <div className="container mx-auto gutter-x">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/20">
            <Wrench className="w-3.5 h-3.5 text-[#C99A55]" />
            <span>Comprehensive Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
            OUR {service.shortName.toUpperCase()} SERVICES & SOLUTIONS
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            From targeted troubleshooting and maintenance to full-system engineered replacements, we deliver durable, code-compliant craftsmanship.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.offerings.map((offering, idx) => (
            <div
              key={idx}
              className="bg-[#F5F6F8] rounded-xl p-7 border border-[#1A2B44]/10 shadow-crisp hover:shadow-crisp-lg transition-all duration-300 flex flex-col group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#C99A55]/15 text-[#C99A55] flex items-center justify-center font-bold text-sm mb-4 border border-[#C99A55]/30">
                0{idx + 1}
              </div>

              <h3 className="text-xl font-heading font-extrabold text-[#1A2B44] mb-3 group-hover:text-[#C99A55] transition-colors">
                {offering.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {offering.description}
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2.5 mb-6 pt-4 border-t border-[#1A2B44]/10">
                {offering.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs font-semibold text-[#1A2B44]">
                    <CheckCircle2 className="w-4 h-4 text-[#C99A55] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center text-sm font-bold text-[#1A2B44] hover:text-[#C99A55] transition-colors mt-auto pt-2"
              >
                <span>Request Service Quote</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-14 p-8 rounded-2xl bg-[#1A2B44] text-[#EDE4D6] flex flex-col md:flex-row items-center justify-between gap-6 shadow-crisp-lg">
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white mb-2">
              Need a Custom {service.shortName} Assessment?
            </h3>
            <p className="text-sm text-[#EDE4D6]/80 max-w-xl">
              Every home and commercial facility has unique electrical and mechanical needs. Schedule a consultation with our licensed technicians today.
            </p>
          </div>
          <button
            onClick={onOpenEstimate}
            className="shrink-0 px-8 py-3.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-sm hover:bg-[#D4A55C] transition-all shadow-crisp"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

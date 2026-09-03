import React from "react";
import { Sparkles, Wrench, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { type SERVICE_AREAS } from "../../data/landscapingData";

import { Link } from "react-router-dom";

type Area = (typeof SERVICE_AREAS)[number];

const services = [
  {
    title: "HVAC Service",
    desc: "Installation, repair, and maintenance of cooling and heating systems.",
    slug: "hvac",
  },
  {
    title: "Electrical Service",
    desc: "Panel upgrades, wiring, and lighting for safe, reliable home electrical systems.",
    slug: "electrical",
  },
  {
    title: "Solar Installation",
    desc: "Custom solar solutions to save money and power your home sustainably.",
    slug: "solar",
  },
  {
    title: "EV Charging",
    desc: "Home EV charging stations installed for convenience, speed, and safety.",
    slug: "ev-charging",
  },
  {
    title: "System Upgrades",
    desc: "Modernizing outdated HVAC and electrical systems with quality guarantee.",
    slug: "electrical",
  },
  {
    title: "Free Consultation",
    desc: "Professional assessment with a detailed no-obligation estimate.",
    slug: "hvac",
  },
];

interface ServiceAreaServicesProps {
  area: Area;
  onOpenEstimate: () => void;
}

export const ServiceAreaServices: React.FC<ServiceAreaServicesProps> = ({
  area,
  onOpenEstimate,
}) => {
  return (
    <>
      {/* Services in This Area */}
      <section className="section-pad bg-white border-y border-[#1A2B44]/10">
        <div className="container mx-auto gutter-x">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A55]" /> Available in{" "}
              {area.city}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
              HOME SERVICES IN {area.city.toUpperCase()}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Complete residential HVAC, electrical, solar, and EV charging
              services, from consultation to installation with superior quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#F5F6F8] rounded-lg p-6 border border-[#1A2B44]/10 shadow-crisp hover:shadow-crisp-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-11 h-11 rounded-md bg-[#C99A55]/10 text-[#C99A55] flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-heading font-extrabold text-[#1A2B44] mb-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-[#C99A55] transition-colors"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#1A2B44]/10">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#1A2B44] hover:text-[#C99A55] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={onOpenEstimate}
                    className="text-xs font-bold text-[#C99A55] hover:underline"
                  >
                    Get Estimate
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] hover:bg-[#243652] font-bold text-base transition-all shadow-crisp hover:shadow-crisp-lg"
            >
              <span>Your Free Estimate in {area.city}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Local Review */}
      <section className="section-pad bg-[#F5F6F8]">
        <div className="container mx-auto gutter-x">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 sm:p-11 border border-[#1A2B44]/10 shadow-crisp-lg">
            <div className="flex items-center gap-1 text-[#fbbc04] mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#fbbc04]" />
              ))}
            </div>
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed italic mb-6">
              "{area.reviewText}"
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-border/60">
              <div className="w-12 h-12 rounded-md bg-[#C99A55]/15 flex items-center justify-center text-[#C99A55] font-heading font-extrabold text-lg">
                {area.reviewName.charAt(0)}
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-[#1A2B44] text-base flex items-center gap-1">
                  {area.reviewName}
                  <CheckCircle2 className="w-4 h-4 text-[#C99A55]" />
                </h4>
                <p className="text-sm text-muted-foreground">
                  {area.city}, {area.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

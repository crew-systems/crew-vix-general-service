import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES } from "../data/servicesData";

interface ServicesSectionProps {
  onOpenEstimate: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenEstimate: _onOpenEstimate,
}) => {
  return (
    <section id="services" className="section-pad bg-[#F5F6F8] overflow-hidden">
      <div className="container mx-auto gutter-x">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A55]" /> Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
            One Trusted Team.{" "}
            <span className="text-[#C99A55]">Complete Home Solutions.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            From HVAC installation to electrical, solar, and EV charging, our
            specialized team delivers superior quality on every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`rounded-xl overflow-hidden border shadow-crisp hover:shadow-crisp-lg transition-all duration-300 group flex flex-col ${
                  service.featured
                    ? "bg-[#1A2B44] border-[#C99A55]/40"
                    : "bg-white border-[#1A2B44]/12"
                }`}
              >
                {/* Image Container */}
                <Link
                  to={`/services/${service.slug}`}
                  className="relative h-56 overflow-hidden block"
                  aria-label={`View ${service.name}`}
                >
                  {service.featured && (
                    <span className="absolute top-3 left-3 z-10 bg-[#C99A55] text-[#1A2B44] px-3 py-1.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider shadow-crisp leading-none">
                      Most Requested
                    </span>
                  )}
                  <img
                    src={service.heroImage}
                    alt={`${service.shortName} services - VIX General Services`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Icon Badge - bottom left inside image */}
                  <div
                    className={`absolute bottom-3 left-3 w-12 h-12 rounded-full flex items-center justify-center shadow-crisp-lg border-[3px] ${
                      service.featured ? "border-[#1A2B44]" : "border-white"
                    } ${service.iconBg}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </Link>

                {/* Card Content */}
                <div className="pt-5 pb-5 px-5 flex flex-col flex-1">
                  <h3
                    className={`text-xl font-heading font-extrabold mb-2 group-hover:text-[#C99A55] transition-colors ${
                      service.featured ? "text-white" : "text-[#1A2B44]"
                    }`}
                  >
                    <Link to={`/services/${service.slug}`}>
                      {service.shortName}
                    </Link>
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-5 flex-1 ${
                      service.featured
                        ? "text-white/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Dedicated Subpage Link */}
                  {service.featured ? (
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-sm hover:bg-[#D4A55C] transition-all shadow-crisp group/link"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-sm font-bold text-[#1A2B44] hover:text-[#C99A55] transition-colors group/link"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

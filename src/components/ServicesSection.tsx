import React from "react";
import {
  ArrowRight,
  Sparkles,
  Snowflake,
  Zap,
  Sun,
  PlugZap,
} from "lucide-react";
import { IMAGES } from "../data/landscapingData";

interface ServicesSectionProps {
  onOpenEstimate: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenEstimate,
}) => {
  const services = [
    {
      title: "HVAC",
      description:
        "Cooling, heating and indoor air quality solutions for year-round comfort and efficiency.",
      image: IMAGES.services.hvac,
      icon: Snowflake,
      iconBg: "bg-[#2F6FED]",
      featured: true,
    },
    {
      title: "ELECTRICAL",
      description:
        "Safe, reliable electrical services for your home and peace of mind.",
      image: IMAGES.services.electrical,
      icon: Zap,
      iconBg: "bg-[#F2B705]",
    },
    {
      title: "SOLAR",
      description:
        "Custom solar solutions to save money and power your home sustainably.",
      image: IMAGES.services.solar,
      icon: Sun,
      iconBg: "bg-[#3FA65B]",
    },
    {
      title: "EV CHARGING",
      description:
        "Home charging stations installed for convenience, speed and safety.",
      image: IMAGES.services.evCharging,
      icon: PlugZap,
      iconBg: "bg-[#7C5CFC]",
    },
  ];

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
          {services.map((service, index) => {
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
                {/* Image Container - Taller to match reference */}
                <div className="relative h-56 overflow-hidden">
                  {service.featured && (
                    <span className="absolute top-3 left-3 z-10 bg-[#C99A55] text-[#1A2B44] px-3 py-1.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider shadow-crisp leading-none">
                      Most Requested
                    </span>
                  )}
                  <img
                    src={service.image}
                    alt={`${service.title} services - VIX General Services`}
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
                </div>

                {/* Card Content */}
                <div className="pt-5 pb-5 px-5 flex flex-col flex-1">
                  <h3
                    className={`text-xl font-heading font-extrabold mb-2 group-hover:text-[#C99A55] transition-colors ${
                      service.featured ? "text-white" : "text-[#1A2B44]"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-5 flex-1 ${
                      service.featured
                        ? "text-white/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  {service.featured ? (
                    <button
                      onClick={onOpenEstimate}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-sm hover:bg-[#D4A55C] transition-all shadow-crisp group/link"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </button>
                  ) : (
                    <button
                      onClick={onOpenEstimate}
                      className="inline-flex items-center text-sm font-bold text-[#1A2B44] hover:text-[#C99A55] transition-colors group/link"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </button>
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

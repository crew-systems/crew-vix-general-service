import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, ArrowRight, Shield } from "lucide-react";
import { COMPANY_INFO, type SERVICE_AREAS } from "../../data/landscapingData";

type Area = (typeof SERVICE_AREAS)[number];

interface ServiceAreaHeroProps {
  area: Area;
  onOpenEstimate: () => void;
}

export const ServiceAreaHero: React.FC<ServiceAreaHeroProps> = ({
  area,
  onOpenEstimate,
}) => {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#1A2B44]">
      <div className="absolute inset-0 z-0">
        <img
          src={area.heroImage}
          alt={`HVAC, electrical, solar, and EV charging services in ${area.fullName}`}
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B44]/95 via-[#1A2B44]/70 to-[#1A2B44]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B44] via-transparent to-black/50" />
      </div>

      <div className="container relative z-10 mx-auto gutter-x">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 text-white/70 text-xs font-semibold">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/service-areas"
              className="hover:text-white transition-colors"
            >
              Service Areas
            </Link>
            <span>/</span>
            <span className="text-[#C99A55]">{area.city}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 backdrop-blur-md border border-white/20 mb-5 text-white text-xs sm:text-sm font-semibold tracking-wide">
            <MapPin className="w-4 h-4 text-[#C99A55]" />
            <span>
              Professional HVAC & Electrical Services in {area.fullName}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.08] mb-5 tracking-tight">
            HVAC & ELECTRICAL SERVICES IN{" "}
            <span className="text-[#C99A55] ">{area.city.toUpperCase()}</span>
          </h1>

          <p className="text-base sm:text-lg text-[#EDE4D6]/90 mb-8 max-w-2xl leading-relaxed text-shadow-sm">
            {area.shortDesc} Licensed, insured, and trusted by homeowners in{" "}
            {area.city} for over 9 years.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenEstimate}
              className="px-8 py-4 sm:py-4.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-extrabold text-lg hover:bg-[#D4A55C] transition-all duration-300 shadow-crisp-lg flex items-center justify-center gap-3 group border border-white/20"
            >
              <span>REQUEST FREE ESTIMATE</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <Link
              to="/#services"
              className="px-8 py-4 sm:py-4.5 rounded-lg bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-all border border-white/30 text-center backdrop-blur-sm"
            >
              VIEW OUR SERVICES
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="pt-5 border-t border-white/15 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#fbbc04] mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]"
                  />
                ))}
              </div>
              <p className="text-white text-xs font-bold">
                {COMPANY_INFO.stats.rating} Rating from{" "}
                {COMPANY_INFO.stats.reviewsCount} Clients
              </p>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
              <Shield className="w-5 h-5 text-[#C99A55]" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

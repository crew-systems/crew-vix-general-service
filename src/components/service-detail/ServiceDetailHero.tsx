import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "../../data/servicesData";
import { COMPANY_INFO } from "../../data/landscapingData";

interface ServiceDetailHeroProps {
  service: ServiceItem;
  onOpenEstimate: () => void;
}

export const ServiceDetailHero: React.FC<ServiceDetailHeroProps> = ({
  service,
  onOpenEstimate,
}) => {
  const Icon = service.icon;

  return (
    <section className="relative min-h-[70vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#1A2B44]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.heroImage}
          alt={`${service.name} in South Florida - VIX General Services`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B44]/98 via-[#1A2B44]/85 to-[#1A2B44]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B44] via-transparent to-black/40" />
      </div>

      <div className="container relative z-10 mx-auto gutter-x">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 text-white/70 text-xs font-semibold">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#C99A55]">{service.shortName}</span>
          </nav>

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20 mb-5 text-white text-xs sm:text-sm font-semibold tracking-wide">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${service.iconBg}`}>
              <Icon className="w-3.5 h-3.5 text-white" />
            </div>
            <span>{service.tagline}</span>
          </div>

          {/* H1 Primary SEO Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
            {service.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#EDE4D6]/90 mb-8 max-w-2xl leading-relaxed font-normal">
            {service.subheadline}
          </p>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#fbbc04]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fbbc04]" />
                ))}
              </div>
              <span className="font-bold">{COMPANY_INFO.stats.rating} Rating</span>
              <span className="text-white/60">({COMPANY_INFO.stats.reviewsCount} reviews)</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C99A55]" />
              <span>Licensed & Insured</span>
            </div>

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C99A55]" />
              <span>{COMPANY_INFO.stats.experienceYears} Years in South Florida</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-base hover:bg-[#D4A55C] transition-all shadow-crisp hover:shadow-crisp-lg"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 transition-all backdrop-blur-md"
            >
              <Phone className="w-5 h-5 text-[#C99A55]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

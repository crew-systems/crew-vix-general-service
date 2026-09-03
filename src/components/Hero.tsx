import React from "react";
import { MapPin, Star, Shield, ArrowRight } from "lucide-react";
import { COMPANY_INFO, IMAGES } from "../data/landscapingData";

interface HeroProps {
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  return (
    <section
      id="hero"
      className="hero-section relative flex items-center overflow-hidden bg-[#1A2B44]"
    >
      {/* Background Image with Lighter Overlay - show the actual image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="HVAC technician servicing an outdoor air conditioning unit - VIX General Services"
          className="w-full h-full object-cover object-center scale-105 brightness-[0.95] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto gutter-x hero-compact hero-content">
        <div className="flex flex-col items-stretch gap-8">
          {/* Content */}
          <div className="hero-left flex-1 flex flex-col justify-center max-w-3xl">
            {/* Location Chip */}
            <div className="hero-badge inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-white/10 backdrop-blur-md border border-white/25 mb-3 sm:mb-5 text-white text-xs font-semibold tracking-wide w-fit">
              <MapPin className="w-4 h-4 text-[#C99A55]" />
              <span>
                Serving South Florida (Boca Raton, Coral Springs, Parkland &amp;
                Surrounding Areas)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.08] mb-5 sm:mb-6 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              EXPERT HVAC SERVICE.{" "}
              <span className="text-[#C99A55] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                TOTAL HOME COMFORT.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#EDE4D6]/90 mb-6 sm:mb-8 max-w-xl leading-relaxed text-shadow-sm font-normal">
              Installation, repair, and maintenance to keep your home cool,
              efficient and worry-free. We also provide electrical, solar, and
              EV charging solutions for total home comfort.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="hero-cta-row flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onOpenEstimate}
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-sm sm:text-base hover:bg-[#D4A55C] transition-all shadow-crisp-lg border border-[#1A2B44]/15"
              >
                <span>GET YOUR FREE ESTIMATE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-bold text-sm sm:text-base hover:bg-white/20 transition-all border border-white/30 text-center backdrop-blur-sm"
              >
                VIEW OUR SERVICES
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="hero-social pt-5 border-t border-white/15 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {IMAGES.avatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt="Happy VIX General Services customer"
                      className="avatar-sm w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#1A2B44] object-cover shadow-crisp"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#fbbc04] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]"
                      />
                    ))}
                  </div>
                  <p className="text-white text-sm font-bold">
                    {COMPANY_INFO.stats.rating} Rating from{" "}
                    {COMPANY_INFO.stats.reviewsCount} Clients
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-white/20" />

              <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                <Shield className="w-5 h-5 text-[#C99A55]" />
                <span>Licensed & Insured, Residential Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

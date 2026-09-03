import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone, Star, X, Menu } from "lucide-react";
import { SERVICE_AREAS, COMPANY_INFO } from "../data/landscapingData";
import { EstimateModal } from "../components/EstimateModal";
import { Footer } from "../components/Footer";
import { SEOHead } from "../components/SEOHead";
import { Logo } from "../components/Logo";

export const ServiceAreasIndex: React.FC = () => {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hide chat widget when modal is open on mobile
  React.useEffect(() => {
    const chatWidget = document.querySelector<HTMLElement>(
      '#lc-chat-widget, .lc-chat-widget, [id*="chat-widget"], [class*="lc-chat"]',
    );
    if (isEstimateModalOpen) {
      if (chatWidget) chatWidget.style.display = "none";
      document.documentElement.style.setProperty(
        "--chat-widget-hidden",
        "none",
      );
    } else {
      if (chatWidget) chatWidget.style.display = "";
      document.documentElement.style.setProperty("--chat-widget-hidden", "");
    }
  }, [isEstimateModalOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Projects", href: "/#gallery" },
    { name: "Reviews", href: "/#reviews" },
  ];

  const areasSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY_INFO.name,
    areaServed: SERVICE_AREAS.map((a) => a.fullName),
    url: "https://www.vixgeneralservices.com/service-areas",
  };

  return (
    <div className="min-h-screen-dvh bg-[#F5F6F8] text-[#141B2D] font-sans antialiased selection:bg-[#C99A55] selection:text-white">
      <SEOHead
        title="Service Areas | VIX General Services"
        description="VIX General Services proudly serves Boca Raton, Coral Springs, Parkland FL and surrounding South Florida areas. Find your city and discover our HVAC, electrical, solar, and EV charging services."
        canonical="/service-areas"
        ogImage={SERVICE_AREAS[0].heroImage}
        schemaJson={areasSchema}
      />
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F5F6F8]/95 backdrop-blur-md shadow-crisp py-2.5 border-b border-[#1A2B44]/10"
            : "bg-gradient-to-b from-[#1A2B44]/90 via-[#1A2B44]/40 to-transparent py-5 text-white"
        }`}
      >
        <div className="container mx-auto gutter-x">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <Logo size="sm" theme={isScrolled ? "light" : "dark"} />
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-semibold transition-colors py-2 ${
                    isScrolled
                      ? "text-[#1A2B44] hover:text-[#C99A55]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                  isScrolled
                    ? "text-[#1A2B44] hover:text-[#C99A55]"
                    : "text-white hover:text-[#D4A55C]"
                }`}
              >
                <div className="w-8 h-8 rounded-md bg-[#C99A55]/15 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#C99A55]" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-normal text-muted-foreground">
                    Call Now
                  </span>
                  <span>{COMPANY_INFO.phone}</span>
                </div>
              </a>
              <button
                onClick={() => setIsEstimateModalOpen(true)}
                className="px-5 py-2.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] hover:bg-[#243652] font-bold text-sm shadow-crisp hover:shadow-crisp-lg transition-all border border-[#C99A55]/25"
              >
                Free Estimate
              </button>
            </div>

            <div className="flex items-center gap-2.5 lg:hidden">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="p-2.5 rounded-lg bg-[#1A2B44] text-white hover:bg-[#C99A55] transition-colors"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2.5 rounded-lg transition-colors ${isScrolled ? "text-[#1A2B44] hover:bg-black/5" : "text-white hover:bg-white/10"}`}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#F5F6F8] border-b border-[#1A2B44]/10 shadow-crisp-lg py-5 px-5">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 text-base font-bold text-[#1A2B44] hover:text-[#C99A55] border-b border-border/50"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsEstimateModalOpen(true);
                }}
                className="w-full py-3 rounded-lg bg-[#1A2B44] text-[#EDE4D6] font-bold text-center text-sm shadow-crisp"
              >
                Free Estimate
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-28 pb-14 overflow-hidden bg-[#1A2B44]">
        <div className="absolute inset-0 z-0">
          <img
            src={SERVICE_AREAS[0].heroImage}
            alt="VIX General Services service areas across South Florida"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B44]/95 via-[#1A2B44]/70 to-[#1A2B44]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B44] via-transparent to-black/50" />
        </div>
        <div className="container relative z-10 mx-auto gutter-x">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5 text-white/70 text-xs font-semibold">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#C99A55]">Service Areas</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 backdrop-blur-md border border-white/20 mb-5 text-white text-xs sm:text-sm font-semibold tracking-wide">
              <MapPin className="w-4 h-4 text-[#C99A55]" />
              <span>Serving South Florida & Surrounding Regions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.08] mb-5 tracking-tight">
              OUR <span className="text-[#C99A55] ">SERVICE AREAS</span>
            </h1>
            <p className="text-base sm:text-lg text-[#EDE4D6]/90 mb-7 max-w-2xl leading-relaxed">
              VIX General Services proudly serves homeowners across South
              Florida. Find your city below and discover how we can support your
              HVAC, electrical, solar, and EV charging needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="section-pad bg-[#F5F6F8]">
        <div className="container mx-auto gutter-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="bg-white rounded-lg overflow-hidden border border-[#1A2B44]/8 shadow-crisp hover:shadow-crisp-lg transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={area.heroImage}
                    alt={`HVAC, electrical, solar & EV charging services in ${area.fullName}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-3.5 left-3.5 bg-[#C99A55]/90 backdrop-blur-md text-[#1A2B44] px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-crisp">
                    {area.state}
                  </span>
                  <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4 text-[#C99A55]" />
                    <h3 className="text-lg font-heading font-extrabold">
                      {area.city}
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {area.shortDesc}
                  </p>
                  <div className="flex items-center gap-1 text-[#fbbc04] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#fbbc04]" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2 font-semibold">
                      {COMPANY_INFO.stats.rating} Rating
                    </span>
                  </div>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center text-sm font-bold text-[#1A2B44] group-hover:text-[#C99A55] transition-colors">
                      View Services in {area.city}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center bg-[#1A2B44] rounded-lg p-9 sm:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#EDE4D6] mb-4 tracking-tight">
              DON'T SEE YOUR CITY?
            </h2>
            <p className="text-[#EDE4D6]/80 mb-6 max-w-xl mx-auto">
              We're continuously expanding our service area across South
              Florida. Contact us to check if we serve your neighborhood.
            </p>
            <button
              onClick={() => setIsEstimateModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-base hover:bg-[#D4A55C] transition-all shadow-crisp hover:shadow-crisp-lg"
            >
              <span>Check Your Area: Free Estimate</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer onOpenEstimate={() => setIsEstimateModalOpen(true)} />
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
      />
    </div>
  );
};

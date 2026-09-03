import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShieldCheck, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { SERVICES } from "../data/servicesData";
import { COMPANY_INFO, SERVICE_AREAS } from "../data/landscapingData";
import { EstimateModal } from "../components/EstimateModal";
import { Footer } from "../components/Footer";
import { SEOHead } from "../components/SEOHead";
import { ServiceAreaHeader } from "../components/service-area/ServiceAreaHeader";

const SITE_BASE = "https://www.vixgeneralservices.com";

export const ServicesIndex: React.FC = () => {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("hvac");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hide chat widget when modal is open on mobile
  useEffect(() => {
    const chatWidget = document.querySelector<HTMLElement>(
      '#lc-chat-widget, .lc-chat-widget, [id*="chat-widget"], [class*="lc-chat"]'
    );
    if (isEstimateModalOpen) {
      if (chatWidget) chatWidget.style.display = "none";
      document.documentElement.style.setProperty("--chat-widget-hidden", "none");
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

  const handleOpenEstimate = (serviceKey: string = "hvac") => {
    setSelectedService(serviceKey);
    setIsEstimateModalOpen(true);
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VIX General Services - Home & Commercial Services",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: `${SITE_BASE}/services/${service.slug}`,
      description: service.shortDesc,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_BASE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_BASE}/services`,
      },
    ],
  };

  return (
    <div className="min-h-screen-dvh bg-[#F5F6F8] text-[#141B2D] font-sans antialiased selection:bg-[#C99A55] selection:text-white">
      <SEOHead
        title="Our Services | Outdoor Lighting, Security, Smart Automation, HVAC & Electrical | VIX"
        description="Explore VIX General Services full range of residential and commercial solutions in South Florida: outdoor landscape lighting, 4K security cameras, smart automation hubs, electrical, HVAC, solar, and EV charging."
        canonical="/services"
        ogImage={SERVICES[0].heroImage}
        ogImageAlt="VIX General Services - South Florida Specialized Services"
        schemaJson={[itemListSchema, breadcrumbSchema]}
      />

      <ServiceAreaHeader
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onOpenEstimate={() => handleOpenEstimate("outdoor-lighting")}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-28 pb-14 overflow-hidden bg-[#1A2B44]">
        <div className="absolute inset-0 z-0">
          <img
            src={SERVICES[0].heroImage}
            alt="VIX General Services comprehensive solutions"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B44] via-[#1A2B44]/90 to-[#1A2B44]/70" />
        </div>

        <div className="container relative z-10 mx-auto gutter-x">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5 text-white/70 text-xs font-semibold">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#C99A55]">Services</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#C99A55]/15 border border-[#C99A55]/30 text-[#C99A55] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complete Residential & Commercial Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
              OUR SPECIALIZED <span className="text-[#C99A55]">SERVICES</span>
            </h1>

            <p className="text-base sm:text-lg text-[#EDE4D6]/90 mb-7 max-w-2xl leading-relaxed">
              From architectural outdoor lighting and 4K security surveillance to smart automation, electrical panels, HVAC, solar, and EV charging, our licensed technicians provide reliable, code-compliant solutions throughout South Florida.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#fbbc04] fill-[#fbbc04]" />
                <span className="font-bold">{COMPANY_INFO.stats.rating} Rating</span>
                <span className="text-white/60">({COMPANY_INFO.stats.reviewsCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C99A55]" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99A55]" />
                <span>9+ Years Serving South Florida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="section-pad bg-[#F5F6F8]">
        <div className="container mx-auto gutter-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-2xl overflow-hidden border border-[#1A2B44]/12 shadow-crisp hover:shadow-crisp-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Image container with link */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="relative h-64 overflow-hidden block"
                  >
                    {service.featured && (
                      <span className="absolute top-4 left-4 z-10 bg-[#C99A55] text-[#1A2B44] px-3.5 py-1.5 rounded-md text-xs font-extrabold uppercase tracking-wider shadow-crisp">
                        Most Requested
                      </span>
                    )}
                    <img
                      src={service.heroImage}
                      alt={`${service.name} - VIX General Services`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div
                      className={`absolute bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-crisp-lg border-2 border-white ${service.iconBg}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#C99A55]">
                        {service.tagline}
                      </span>
                      <h2 className="text-2xl font-heading font-extrabold text-[#1A2B44] mt-1 group-hover:text-[#C99A55] transition-colors">
                        <Link to={`/services/${service.slug}`}>
                          {service.name}
                        </Link>
                      </h2>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Key Offerings Preview */}
                    <div className="mb-6 pt-4 border-t border-[#1A2B44]/10">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A2B44] mb-3">
                        Key Capabilities:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1A2B44]">
                        {service.offerings.slice(0, 4).map((offering, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A55] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{offering.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto pt-4 border-t border-[#1A2B44]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1A2B44] text-[#EDE4D6] hover:bg-[#243652] font-bold text-sm shadow-crisp transition-all"
                      >
                        <span>View {service.shortName} Details</span>
                        <ArrowRight className="w-4 h-4 text-[#C99A55]" />
                      </Link>

                      <button
                        onClick={() => handleOpenEstimate(service.estimateServiceKey)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-sm hover:bg-[#D4A55C] shadow-crisp transition-all"
                      >
                        <span>Free Estimate</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Regional Cross-link banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#1A2B44] text-[#EDE4D6] shadow-crisp-lg text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-4">
              LOOKING FOR SERVICES IN A SPECIFIC CITY?
            </h2>
            <p className="text-sm sm:text-base text-[#EDE4D6]/85 max-w-xl mx-auto mb-8">
              We provide dedicated local crews across Boca Raton, Coral Springs, Parkland, and neighboring South Florida communities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {SERVICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  to={`/service-areas/${area.slug}`}
                  className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all backdrop-blur-md"
                >
                  {area.city}, {area.state} →
                </Link>
              ))}
              <Link
                to="/service-areas"
                className="px-5 py-2.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-xs sm:text-sm hover:bg-[#D4A55C] transition-all shadow-crisp"
              >
                All Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenEstimate={() => handleOpenEstimate("hvac")} />

      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
};

export default ServicesIndex;

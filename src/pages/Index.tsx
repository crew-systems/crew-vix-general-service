import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TrustMarquee } from "../components/TrustMarquee";
import { BuildJourneySection } from "../components/BuildJourneySection";
import { ServicesSection } from "../components/ServicesSection";
import { BeforeAfterSection } from "../components/BeforeAfterSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { ProjectGallery } from "../components/ProjectGallery";
import { ProcessSection } from "../components/ProcessSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { FinalCta } from "../components/FinalCta";
import { Footer } from "../components/Footer";
import { EstimateModal } from "../components/EstimateModal";
import { GHLFormEmbed } from "../components/GHLFormEmbed";
import { SEOHead } from "../components/SEOHead";
import { IMAGES, COMPANY_INFO } from "../data/landscapingData";
import { SERVICES } from "../data/servicesData";

const Index: React.FC = () => {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const [estimateService, setEstimateService] = useState<string | undefined>(
    "general-construction",
  );

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

  const handleOpenEstimate = (service?: unknown) => {
    const validService = typeof service === "string" ? service : undefined;
    setEstimateService(validService);
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.vixgeneralservices.com/#organization",
        name: COMPANY_INFO.name,
        legalName: COMPANY_INFO.legalName,
        founder: {
          "@type": "Person",
          name: COMPANY_INFO.ownerName,
        },
        description: COMPANY_INFO.tagline,
        url: "https://www.vixgeneralservices.com/",
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        image: IMAGES.ogMeta,
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "16:00",
          },
        ],
        areaServed: [
          {
            "@type": "State",
            name: "Massachusetts",
          },
          {
            "@type": "State",
            name: "Maine",
          },
          {
            "@type": "State",
            name: "New Hampshire",
          },
          {
            "@type": "State",
            name: "Rhode Island",
          },
          {
            "@type": "State",
            name: "Vermont",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "VIX General Contracting Services",
          itemListElement: SERVICES.map((s, idx) => ({
            "@type": "Offer",
            position: idx + 1,
            itemOffered: {
              "@type": "Service",
              name: s.name,
              url: `https://www.vixgeneralservices.com/services/${s.slug}`,
              description: s.shortDesc,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.vixgeneralservices.com/#website",
        url: "https://www.vixgeneralservices.com/",
        name: "VIX General Services",
        description: COMPANY_INFO.tagline,
        publisher: {
          "@id": "https://www.vixgeneralservices.com/#organization",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#00153F] font-sans antialiased selection:bg-[#C99A55] selection:text-white">
      <SEOHead
        title="VIX General Services | End-to-End Construction & Smart Energy"
        description="Residential and commercial construction, remodeling, plumbing, electrical, HVAC, solar, EV charging, and smart systems across five New England states."
        canonical="/"
        ogImage={IMAGES.ogMeta}
        schemaJson={homeSchema}
      />
      {/* Sticky Header Nav */}
      <Header onOpenEstimate={handleOpenEstimate} />

      {/* Main Page Sections */}
      <main>
        {/* Cinematic Hero */}
        <Hero onOpenEstimate={handleOpenEstimate} />

        {/* Marquee Trust Highlights */}
        <TrustMarquee />

        {/* From planning and structure through connected final spaces */}
        <BuildJourneySection />

        {/* Services Overview */}
        <ServicesSection onOpenEstimate={handleOpenEstimate} />

        {/* Interactive Before & After Visual Slider */}
        <BeforeAfterSection onOpenEstimate={handleOpenEstimate} />

        {/* Why Choose Us & Differentiators */}
        <WhyChooseUs onOpenEstimate={handleOpenEstimate} />

        {/* Project Gallery & Fullscreen Viewer */}
        <ProjectGallery onOpenEstimate={handleOpenEstimate} />

        {/* 3-Step Simple Process */}
        <ProcessSection onOpenEstimate={handleOpenEstimate} />

        {/* Homeowner Reviews */}
        <ReviewsSection />

        {/* On-Page Estimate Form Section */}
        <section id="estimate" className="section-pad bg-white border-t border-[#00153F]/10">
          <div className="container mx-auto gutter-x max-w-4xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#C99A55]/20 border border-[#C99A55]/40 text-[#C99A55] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Free &amp; No Obligation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#00153F] mb-3">
                Request Your Free Estimate
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
                Tell us about your project below and our team will get in touch
                to schedule your consultation and provide transparent pricing.
              </p>
            </div>
            <div className="bg-[#F7F8FA] rounded-2xl p-4 sm:p-8 border border-[#00153F]/10 shadow-crisp">
              <GHLFormEmbed instanceId="home-section" minHeight={625} />
            </div>
          </div>
        </section>

        {/* Final High-Impact CTA */}
        <FinalCta onOpenEstimate={handleOpenEstimate} />
      </main>

      {/* Footer */}
      <Footer onOpenEstimate={handleOpenEstimate} />

      {/* Popup Estimate Modal with GHL Form Embed Container */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
        defaultService={estimateService}
      />
    </div>
  );
};

export default Index;

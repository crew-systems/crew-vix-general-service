import React, { useState } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TrustMarquee } from "../components/TrustMarquee";
import { ServicesSection } from "../components/ServicesSection";
import { BeforeAfterSection } from "../components/BeforeAfterSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { ProjectGallery } from "../components/ProjectGallery";
import { ProcessSection } from "../components/ProcessSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { FinalCta } from "../components/FinalCta";
import { Footer } from "../components/Footer";
import { EstimateModal } from "../components/EstimateModal";
import { SEOHead } from "../components/SEOHead";
import { IMAGES, COMPANY_INFO } from "../data/landscapingData";
import { SERVICES } from "../data/servicesData";

const Index: React.FC = () => {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const [estimateService, setEstimateService] = useState<string | undefined>(
    "hvac",
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

  const handleOpenEstimate = (service?: string) => {
    setEstimateService(service || "hvac");
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
            "@type": "City",
            name: "Boca Raton",
            containedInPlace: { "@type": "State", name: "Florida" },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 26.3683,
              longitude: -80.1289,
            },
          },
          {
            "@type": "City",
            name: "Coral Springs",
            containedInPlace: { "@type": "State", name: "Florida" },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 26.2711,
              longitude: -80.2706,
            },
          },
          {
            "@type": "City",
            name: "Parkland",
            containedInPlace: { "@type": "State", name: "Florida" },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 26.3104,
              longitude: -80.2377,
            },
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
    <div className="min-h-screen bg-[#F5F6F8] text-[#141B2D] font-sans antialiased selection:bg-[#C99A55] selection:text-white">
      <SEOHead
        title="VIX General Services | Outdoor Lighting, Security Cameras, Smart Automation, HVAC & Electrical"
        description="Expert architectural outdoor lighting, 4K security cameras, smart home automation, licensed electrical, HVAC, solar, and EV charging in South Florida. Free estimates."
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

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
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.tagline,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    areaServed: COMPANY_INFO.location,
    url: "https://www.vixgeneralservices.com/",
    image: IMAGES.ogMeta,
    priceRange: "$$",
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

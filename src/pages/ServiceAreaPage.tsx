import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { SERVICE_AREAS, COMPANY_INFO } from "../data/landscapingData";
import { EstimateModal } from "../components/EstimateModal";
import { Footer } from "../components/Footer";
import { SEOHead } from "../components/SEOHead";
import { ServiceAreaHeader } from "../components/service-area/ServiceAreaHeader";
import { ServiceAreaHero } from "../components/service-area/ServiceAreaHero";
import { ServiceAreaIntro } from "../components/service-area/ServiceAreaIntro";
import { ServiceAreaServices } from "../components/service-area/ServiceAreaServices";
import { ServiceAreaWhyGallery } from "../components/service-area/ServiceAreaWhyGallery";

export const ServiceAreaPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
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

  const area = SERVICE_AREAS.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F6F8]">
        <SEOHead
          title="Area Not Found | VIX General Services"
          description="The service area you are looking for could not be found. Explore our HVAC, electrical, solar, and EV charging services in South Florida."
          canonical="/service-areas"
          noIndex
        />
        <div className="text-center">
          <h1 className="text-4xl font-heading font-extrabold text-[#1A2B44] mb-4">
            Area Not Found
          </h1>
          <Link to="/" className="text-[#C99A55] font-bold underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY_INFO.name,
    description: area.shortDesc,
    telephone: COMPANY_INFO.phone,
    areaServed: {
      "@type": "City",
      name: area.fullName,
    },
    url: `https://www.vixgeneralservices.com/service-areas/${area.slug}`,
    image: area.heroImage,
  };

  const handleOpenEstimate = () => setIsEstimateModalOpen(true);

  return (
    <div className="min-h-screen-dvh bg-[#F5F6F8] text-[#141B2D] font-sans antialiased selection:bg-[#C99A55] selection:text-white">
      <SEOHead
        title={area.metaTitle}
        description={area.metaDescription}
        canonical={`/service-areas/${area.slug}`}
        ogImage={area.heroImage}
        schemaJson={areaSchema}
      />

      <ServiceAreaHeader
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onOpenEstimate={handleOpenEstimate}
      />

      <ServiceAreaHero area={area} onOpenEstimate={handleOpenEstimate} />

      <ServiceAreaIntro area={area} />

      <ServiceAreaServices area={area} onOpenEstimate={handleOpenEstimate} />

      <ServiceAreaWhyGallery area={area} onOpenEstimate={handleOpenEstimate} />

      <Footer onOpenEstimate={handleOpenEstimate} />

      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
      />
    </div>
  );
};

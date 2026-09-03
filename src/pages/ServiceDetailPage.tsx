import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getServiceBySlug } from "../data/servicesData";
import { COMPANY_INFO, SERVICE_AREAS } from "../data/landscapingData";
import { EstimateModal } from "../components/EstimateModal";
import { Footer } from "../components/Footer";
import { SEOHead } from "../components/SEOHead";
import { ServiceAreaHeader } from "../components/service-area/ServiceAreaHeader";
import { ServiceDetailHero } from "../components/service-detail/ServiceDetailHero";
import { ServiceDetailIntro } from "../components/service-detail/ServiceDetailIntro";
import { ServiceDetailOfferings } from "../components/service-detail/ServiceDetailOfferings";
import { ServiceDetailProcess } from "../components/service-detail/ServiceDetailProcess";
import { ServiceDetailGallery } from "../components/service-detail/ServiceDetailGallery";
import { ServiceDetailFAQ } from "../components/service-detail/ServiceDetailFAQ";
import { ServiceDetailServiceAreas } from "../components/service-detail/ServiceDetailServiceAreas";
import { ServiceDetailCta } from "../components/service-detail/ServiceDetailCta";

const SITE_BASE = "https://www.vixgeneralservices.com";

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
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
  }, [slug]);

  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F6F8] p-6">
        <SEOHead
          title="Service Not Found | VIX General Services"
          description="The service you are looking for could not be found. Explore our HVAC, electrical, solar, and EV charging services in South Florida."
          canonical="/services"
          noIndex
        />
        <div className="text-center max-w-md bg-white p-8 rounded-xl shadow-crisp border border-[#1A2B44]/10">
          <h1 className="text-3xl font-heading font-extrabold text-[#1A2B44] mb-3">
            Service Not Found
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            We couldn't locate the specific service page requested. Browse all available home and commercial services below.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-sm shadow-crisp"
            >
              All Services
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] font-bold text-sm shadow-crisp"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Schema 1: Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.schemaServiceType,
    name: service.name,
    description: service.shortDesc,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      url: SITE_BASE,
      image: service.heroImage,
      priceRange: "$$",
    },
    areaServed: SERVICE_AREAS.map((a) => ({
      "@type": "City",
      name: a.fullName,
    })),
    url: `${SITE_BASE}/services/${service.slug}`,
    image: service.heroImage,
  };

  // Schema 2: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  // Schema 3: BreadcrumbList
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
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE_BASE}/services/${service.slug}`,
      },
    ],
  };

  const handleOpenEstimate = () => setIsEstimateModalOpen(true);

  return (
    <div className="min-h-screen-dvh bg-[#F5F6F8] text-[#141B2D] font-sans antialiased selection:bg-[#C99A55] selection:text-white">
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/services/${service.slug}`}
        ogImage={service.heroImage}
        ogImageAlt={`${service.name} by VIX General Services`}
        schemaJson={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <ServiceAreaHeader
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onOpenEstimate={handleOpenEstimate}
      />

      <main>
        <ServiceDetailHero
          service={service}
          onOpenEstimate={handleOpenEstimate}
        />

        <ServiceDetailIntro service={service} />

        <ServiceDetailOfferings
          service={service}
          onOpenEstimate={handleOpenEstimate}
        />

        <ServiceDetailProcess
          service={service}
          onOpenEstimate={handleOpenEstimate}
        />

        <ServiceDetailGallery service={service} />

        <ServiceDetailFAQ service={service} />

        <ServiceDetailServiceAreas service={service} />

        <ServiceDetailCta
          service={service}
          onOpenEstimate={handleOpenEstimate}
        />
      </main>

      <Footer onOpenEstimate={handleOpenEstimate} />

      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        defaultService={service.estimateServiceKey}
      />
    </div>
  );
};

export default ServiceDetailPage;

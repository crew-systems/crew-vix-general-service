import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SEOHead } from "../components/SEOHead";
import { GHLFormEmbed } from "../components/GHLFormEmbed";
import { COMPANY_INFO, SERVICE_AREAS } from "../data/landscapingData";
import { SERVICES } from "../data/servicesData";

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToForm = () => {
    const el = document.getElementById("contact-form-card");
    if (el) {
      if (typeof el.scrollIntoView === "function") {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo(0, el.offsetTop || 0);
      }
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact & Free Estimate | VIX General Services",
    description:
      "Get a free estimate from VIX General Services for HVAC, electrical, solar, EV charging, outdoor lighting, security cameras, and smart automation across South Florida.",
    url: "https://www.vixgeneralservices.com/contact",
    mainEntity: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boca Raton",
        addressRegion: "FL",
        addressCountry: "US",
      },
      areaServed: SERVICE_AREAS.map((a) => a.city),
    },
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#141B2D] font-sans antialiased">
      <SEOHead
        title="Get a Free Estimate | VIX General Services | South Florida"
        description="Request a free, no-obligation estimate for HVAC, electrical, solar, EV charging, outdoor lighting, security cameras, and automation in South Florida. Fast response."
        canonical="/contact"
        schemaJson={contactSchema}
      />

      <Header onOpenEstimate={handleScrollToForm} />

      <main className="pt-24 sm:pt-28 pb-16">
        {/* Banner */}
        <section className="bg-[#1A2B44] text-white py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
          <div className="container mx-auto gutter-x relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#C99A55]/20 border border-[#C99A55]/40 text-[#C99A55] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Free &amp; No Obligation
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#EDE4D6] tracking-tight mb-4">
              Get Your Free Estimate
            </h1>
            <p className="text-base sm:text-lg text-[#EDE4D6]/85 max-w-xl mx-auto leading-relaxed">
              Tell us about your project. Our licensed HVAC, electrical, solar,
              outdoor lighting, and security specialists will contact you with a
              transparent, custom quote.
            </p>
          </div>
        </section>

        {/* Main Content: Form + Contact Info */}
        <div className="container mx-auto gutter-x mt-10 sm:mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Official GoHighLevel Form Embed */}
            <div
              id="contact-form-card"
              className="lg:col-span-7 xl:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-crisp border border-[#1A2B44]/10 scroll-mt-28"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1A2B44]/10">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-[#1A2B44]">
                    Project Request Form
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Instant Intake
                </span>
              </div>

              {/* Embedded GoHighLevel Form */}
              <GHLFormEmbed instanceId="contact-page" minHeight={874} />
            </div>

            {/* Right Column: Direct Contact Details & Trust Badges */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              {/* Direct Contact Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-crisp border border-[#1A2B44]/10">
                <h3 className="text-xl font-heading font-bold text-[#1A2B44] mb-4">
                  Direct Contact
                </h3>

                <div className="space-y-4">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F6F8] hover:bg-[#F0EDE6] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#C99A55]/15 text-[#C99A55] flex items-center justify-center shrink-0 border border-[#C99A55]/30 group-hover:bg-[#C99A55] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase font-semibold text-muted-foreground">
                        Phone (Call or Text)
                      </span>
                      <span className="text-base font-bold text-[#1A2B44] group-hover:text-[#C99A55] transition-colors">
                        {COMPANY_INFO.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F6F8] hover:bg-[#F0EDE6] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#C99A55]/15 text-[#C99A55] flex items-center justify-center shrink-0 border border-[#C99A55]/30 group-hover:bg-[#C99A55] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase font-semibold text-muted-foreground">
                        Email Us
                      </span>
                      <span className="text-sm font-bold text-[#1A2B44] group-hover:text-[#C99A55] transition-colors break-all">
                        {COMPANY_INFO.email}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F6F8]">
                    <div className="w-10 h-10 rounded-lg bg-[#C99A55]/15 text-[#C99A55] flex items-center justify-center shrink-0 border border-[#C99A55]/30">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase font-semibold text-muted-foreground">
                        Hours of Operation
                      </span>
                      <span className="text-xs font-semibold text-[#1A2B44] block">
                        Mon – Fri: 8:00 AM – 6:00 PM
                      </span>
                      <span className="text-xs text-muted-foreground block">
                        Sat: 9:00 AM – 4:00 PM | Sun: Closed
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F6F8]">
                    <div className="w-10 h-10 rounded-lg bg-[#C99A55]/15 text-[#C99A55] flex items-center justify-center shrink-0 border border-[#C99A55]/30">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase font-semibold text-muted-foreground">
                        Service Coverage
                      </span>
                      <span className="text-xs font-semibold text-[#1A2B44] block">
                        South Florida
                      </span>
                      <span className="text-xs text-muted-foreground block">
                        Boca Raton, Coral Springs, Parkland &amp; Surrounding Areas
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Card */}
              <div className="bg-[#1A2B44] text-white rounded-2xl p-6 sm:p-8 shadow-crisp border border-[#C99A55]/25">
                <h3 className="text-lg font-heading font-bold text-[#EDE4D6] mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#C99A55]" />
                  The VIX Commitment
                </h3>
                <ul className="space-y-3 text-sm text-[#EDE4D6]/85">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C99A55] shrink-0" />
                    <span>100% Free Consultation &amp; Upfront Pricing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C99A55] shrink-0" />
                    <span>Licensed, Insured &amp; Experienced Specialists</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C99A55] shrink-0" />
                    <span>Clean Job Sites &amp; Workmanship Guarantee</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C99A55] shrink-0" />
                    <span>Fast Response within 1 Business Day</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenEstimate={handleScrollToForm} />
    </div>
  );
};

export default ContactPage;

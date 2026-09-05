import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  Shield,
  ArrowRight,
  Home,
  Sparkles,
  Calendar,
  Award,
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SEOHead } from "../components/SEOHead";
import { COMPANY_INFO } from "../data/landscapingData";

export const ThankYouPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const thankYouSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Thank You | VIX General Services",
    description:
      "Thank you for contacting VIX General Services. We have received your request and our team will get in touch shortly.",
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#141B2D] font-sans antialiased selection:bg-[#C99A55] selection:text-white flex flex-col justify-between">
      <SEOHead
        title="Thank You | VIX General Services | South Florida"
        description="Thank you for your estimate request. Our South Florida team has received your information and will contact you shortly."
        canonical="/thank-you"
        schemaJson={thankYouSchema}
      />

      <Header onOpenEstimate={() => {}} />

      <main className="pt-28 sm:pt-32 pb-16 flex-1">
        <div className="container mx-auto gutter-x max-w-4xl">
          {/* Confirmation Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-12 shadow-crisp-lg border border-[#1A2B44]/10 text-center animate-scale-up">
            {/* Pulsing Success Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-50 border-2 border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-crisp">
              <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-emerald-600 animate-fade-in" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C99A55]/15 border border-[#C99A55]/35 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A55]" /> Request Successfully Received
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
              Thank You! We Received Your Request
            </h1>

            {/* Subtitle fulfilling the user's requirement */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Your answers have been successfully submitted to our team. Our licensed
              South Florida specialists are reviewing your project details and will
              reach out to you shortly with next steps.
            </p>

            {/* What Happens Next - 3 Steps Timeline */}
            <div className="bg-[#F7F8FA] rounded-xl p-6 sm:p-8 border border-[#1A2B44]/10 text-left mb-8">
              <h2 className="text-lg font-heading font-extrabold text-[#1A2B44] mb-6 text-center sm:text-left flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C99A55]" />
                <span>What Happens Next?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                <div className="flex flex-col items-start bg-white p-5 rounded-lg border border-[#1A2B44]/10 shadow-crisp">
                  <div className="w-8 h-8 rounded-full bg-[#1A2B44] text-[#EDE4D6] font-bold text-sm flex items-center justify-center mb-3">
                    1
                  </div>
                  <h3 className="font-heading font-bold text-[#1A2B44] text-sm mb-1.5">
                    Detailed Review
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our team reviews your project scope, location, and specific requirements to assign the right specialist.
                  </p>
                </div>

                <div className="flex flex-col items-start bg-white p-5 rounded-lg border border-[#1A2B44]/10 shadow-crisp">
                  <div className="w-8 h-8 rounded-full bg-[#C99A55] text-[#1A2B44] font-bold text-sm flex items-center justify-center mb-3">
                    2
                  </div>
                  <h3 className="font-heading font-bold text-[#1A2B44] text-sm mb-1.5">
                    Direct Contact
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We will call or text you at the number provided within 1 business day (often within hours) to confirm details.
                  </p>
                </div>

                <div className="flex flex-col items-start bg-white p-5 rounded-lg border border-[#1A2B44]/10 shadow-crisp">
                  <div className="w-8 h-8 rounded-full bg-[#1A2B44] text-[#EDE4D6] font-bold text-sm flex items-center justify-center mb-3">
                    3
                  </div>
                  <h3 className="font-heading font-bold text-[#1A2B44] text-sm mb-1.5">
                    Upfront Custom Quote
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    You receive an honest, transparent estimate with upfront pricing and zero pressure or hidden fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Option if in a hurry */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-[#1A2B44] text-white text-left mb-8 border border-[#C99A55]/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#C99A55]/20 flex items-center justify-center shrink-0 border border-[#C99A55]/40 text-[#C99A55]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#EDE4D6] text-sm sm:text-base">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-xs text-[#EDE4D6]/80 mt-0.5">
                    Speak with our South Florida team directly by phone or text.
                  </p>
                </div>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-sm hover:bg-[#D4A55C] transition-all shadow-crisp btn-sheen shrink-0"
              >
                <span>CALL NOW: {COMPANY_INFO.phone}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 pb-6 border-t border-b border-[#1A2B44]/10 text-center mb-8">
              <div className="flex flex-col items-center">
                <Shield className="w-5 h-5 text-[#C99A55] mb-1.5" />
                <span className="text-xs font-bold text-[#1A2B44]">Licensed &amp; Insured</span>
                <span className="text-[11px] text-muted-foreground">State Certified</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-5 h-5 text-[#C99A55] mb-1.5" />
                <span className="text-xs font-bold text-[#1A2B44]">Fast Response</span>
                <span className="text-[11px] text-muted-foreground">Within 1 Business Day</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-5 h-5 text-[#C99A55] mb-1.5" />
                <span className="text-xs font-bold text-[#1A2B44]">Top Rated in FL</span>
                <span className="text-[11px] text-muted-foreground">5-Star Customer Reviews</span>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A2B44] text-[#EDE4D6] font-bold text-sm hover:bg-[#243652] transition-colors shadow-crisp"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-[#1A2B44]/15 text-[#1A2B44] font-bold text-sm hover:bg-[#F5F6F8] transition-colors shadow-crisp"
              >
                <span>Explore All 7 Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenEstimate={() => {}} />
    </div>
  );
};

export default ThankYouPage;

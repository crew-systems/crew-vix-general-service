import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Timer, MapPin, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";
import { useStandaloneFormPage } from "@/hooks/useStandaloneFormPage";

const trustPoints = [
  { label: "Free estimates", Icon: CheckCircle2 },
  { label: "Licensed & insured", Icon: ShieldCheck },
  { label: "Fast response", Icon: Timer },
];

export function ContactPage() {
  useStandaloneFormPage(false);
  useEffect(() => window.scrollTo(0, 0), []);

  const scrollToForm = () => {
    document.getElementById("contact-form-card")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Get Your Free Quote | VIX General Services"
        description="Tell VIX General Services about your project and request a free quote for work across New England."
        canonical="/contact"
      />
      <Header onOpenEstimate={scrollToForm} solid />
      <main className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 text-center sm:mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">VIX General Services</p>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl">
              Get Your Free Quote
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Tell us a little about your project and we'll get back to you shortly.
            </p>
          </div>

          <div id="contact-form-card" className="scroll-mt-28 rounded-2xl border border-border bg-card p-3 shadow-crisp sm:p-7">
            <GHLFormEmbed instanceId="contact-page" minHeight={625} />
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3" aria-label="Why contact VIX">
            {trustPoints.map(({ label, Icon }) => (
              <div key={label} className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold">
                <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-crisp">
            <div className="relative">
              <iframe
                title="Map of the New England service area"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.7%2C41.1%2C-69.4%2C45.4&layer=mapnik"
                className="h-56 w-full border-0 sm:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-bold shadow-crisp">
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                Serving New England
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-4 text-sm sm:px-6">
              <span className="text-muted-foreground">Based in Massachusetts · Serving five New England states</span>
              <Link to="/service-areas" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                View all service areas <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer onOpenEstimate={scrollToForm} />
    </div>
  );
}

export default ContactPage;

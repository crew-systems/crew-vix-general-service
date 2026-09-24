import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SEOHead } from "@/components/SEOHead";
import { useStandaloneFormPage } from "@/hooks/useStandaloneFormPage";
import { COMPANY_INFO } from "@/data/landscapingData";

export function ThankYouPage() {
  useStandaloneFormPage(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SEOHead
        title="Thank You | VIX General Services"
        description="Your message has been received by VIX General Services."
        canonical="/thank-you"
      />
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-12 text-center sm:px-6">
        <Logo size="md" className="mx-auto mb-8" />
        <div className="rounded-2xl border border-border bg-card px-6 py-10 shadow-crisp sm:px-10">
          <CheckCircle2 className="mx-auto mb-5 h-12 w-12 text-accent" aria-hidden="true" />
          <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Thank You! We Received Your Request
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Your message has been received. Our team will contact you within a few minutes from {COMPANY_INFO.phone}.
          </p>
          <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
            Back to homepage <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ThankYouPage;

import { Logo } from "@/components/Logo";
import { SEOHead } from "@/components/SEOHead";
import { useStandaloneFormPage } from "@/hooks/useStandaloneFormPage";

const BUSINESS_NAME = "VIX General Services";
const HEADLINE = "Get Your Special Offer";
const SUBTEXT = "Share a few details and our team will be in touch about your offer.";
const DISCOUNT_FORM_ID = "T42tLOEScaBPGs3uHtht";

export function DiscountPage() {
  useStandaloneFormPage(true);
  const iframeId = `inline-${DISCOUNT_FORM_ID}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={`${HEADLINE} | ${BUSINESS_NAME}`}
        description={SUBTEXT}
        canonical="/get-your-discount"
      />
      <main className="mx-auto w-full max-w-2xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
        <div className="mb-8 flex items-center gap-3 border-b border-border pb-5">
          <Logo size="sm" />
          <span className="text-sm font-semibold tracking-wide text-foreground">{BUSINESS_NAME}</span>
        </div>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">{HEADLINE}</h1>
        <p className="mt-2 text-muted-foreground">{SUBTEXT}</p>
        <div className="mt-6 rounded-xl border border-border bg-card p-3 shadow-crisp sm:p-6">
          <iframe
            src={`https://api.leadconnectorhq.com/widget/form/${DISCOUNT_FORM_ID}`}
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
            id={iframeId}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Discount Form "
            data-height="605"
            data-layout-iframe-id={iframeId}
            data-form-id={DISCOUNT_FORM_ID}
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Discount Form "
          />
        </div>
      </main>
    </div>
  );
}

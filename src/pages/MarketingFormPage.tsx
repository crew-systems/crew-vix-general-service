import { Logo } from "@/components/Logo";
import { SEOHead } from "@/components/SEOHead";
import { useStandaloneFormPage } from "@/hooks/useStandaloneFormPage";

const BUSINESS_NAME = "VIX General Services";
// GHL client review form ID. Paste the form ID from the VIX subaccount's embed code here.
const MARKETING_FORM_ID = "";

/** Standalone form for SMS/marketing links. Intentionally unlinked and noindex. */
export function MarketingFormPage() {
  useStandaloneFormPage(Boolean(MARKETING_FORM_ID));
  const iframeId = `inline-${MARKETING_FORM_ID}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={`Share Your Feedback | ${BUSINESS_NAME}`}
        description={`Tell ${BUSINESS_NAME} about your experience.`}
        noIndex
      />
      <main className="mx-auto w-full max-w-2xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
        <div className="mb-8 flex items-center gap-3 border-b border-border pb-5">
          <Logo size="sm" />
          <span className="text-sm font-semibold tracking-wide text-foreground">{BUSINESS_NAME}</span>
        </div>
        <div className="rounded-xl border border-border bg-card p-3 shadow-crisp sm:p-6">
          {MARKETING_FORM_ID ? (
            <iframe
              src={`https://api.leadconnectorhq.com/widget/form/${MARKETING_FORM_ID}`}
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
              id={iframeId}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Client Review Form"
              data-height="605"
              data-layout-iframe-id={iframeId}
              data-form-id={MARKETING_FORM_ID}
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="Client Review Form"
            />
          ) : (
            <p className="py-8 text-center text-sm text-muted-foreground" role="status">
              Form unavailable. Add the VIX GoHighLevel client review form ID to enable this page.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default MarketingFormPage;

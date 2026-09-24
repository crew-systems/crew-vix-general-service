import { Logo } from "@/components/Logo";
import { SEOHead } from "@/components/SEOHead";
import { useStandaloneFormPage } from "@/hooks/useStandaloneFormPage";

const BUSINESS_NAME = "VIX General Services";
// Replace with the VIX subaccount's survey ID and exact iframe attributes.
// The supplied T42tLOEScaBPGs3uHtht embed is a form, not a survey.
const SURVEY_ID = "";

export function ReviewPage() {
  useStandaloneFormPage(Boolean(SURVEY_ID));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={`Share Your Feedback | ${BUSINESS_NAME}`}
        description={`Tell ${BUSINESS_NAME} about your experience.`}
        canonical="/review"
      />
      <main className="mx-auto w-full max-w-2xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
        <div className="mb-8 flex items-center gap-3 border-b border-border pb-5">
          <Logo size="sm" />
          <span className="text-sm font-semibold tracking-wide text-foreground">{BUSINESS_NAME}</span>
        </div>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
          How was your experience?
        </h1>
        <p className="mt-2 text-muted-foreground">Your feedback helps us serve you better.</p>
        <div className="mt-6 rounded-xl border border-border bg-card p-3 shadow-crisp sm:p-6">
          {SURVEY_ID ? (
            <iframe
              src={`https://api.leadconnectorhq.com/widget/survey/${SURVEY_ID}`}
              style={{ border: "none", width: "100%" }}
              scrolling="no"
              id={SURVEY_ID}
              title="survey"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
            />
          ) : (
            <p className="py-8 text-center text-sm text-muted-foreground" role="status">
              Review survey unavailable. Add the VIX GoHighLevel survey embed to enable this page.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

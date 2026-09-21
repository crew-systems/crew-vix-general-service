import React, { useEffect } from "react";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { Logo } from "../Logo";
import { SEOHead } from "../SEOHead";
import { COMPANY_INFO } from "../../data/landscapingData";
import { MAIN_SITE, legalLink } from "../../lib/legalHosts";

export interface LegalSection {
  id: string;
  title: string;
  body: React.ReactNode;
}

interface LegalLayoutProps {
  kind: "terms" | "privacy";
  title: string;
  seoTitle: string;
  description: string;
  canonical: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  kind,
  title,
  seoTitle,
  description,
  canonical,
  updated,
  intro,
  sections,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const other = kind === "terms" ? "privacy" : "terms";
  const otherLabel = kind === "terms" ? "Privacy Policy" : "Terms of Use";

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#00153F] font-sans antialiased selection:bg-[#C99A55] selection:text-white flex flex-col">
      <SEOHead
        title={seoTitle}
        description={description}
        canonical={canonical}
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: seoTitle,
          description,
          publisher: { "@type": "Organization", name: COMPANY_INFO.name },
        }}
      />

      <header className="vix-navy-gradient text-white border-b border-[#C99A55]/25 py-3 lg:py-4">
        <div className="container mx-auto gutter-x flex items-center justify-between gap-4">
          <a href={MAIN_SITE} className="flex items-center shrink-0" aria-label="VIX General Services home">
            <Logo size="lg" theme="dark" />
          </a>
          <a
            href={MAIN_SITE}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#EDE4D6] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#C99A55]" />
            <span>Back to main site</span>
          </a>
        </div>
      </header>

      <main className="flex-1 py-10 sm:py-14">
        <div className="container mx-auto gutter-x max-w-4xl">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C99A55]/15 border border-[#C99A55]/35 text-[#00153F] font-bold text-xs uppercase tracking-wider mb-4">
              Legal
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-3">
              {title}
            </h1>
            <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-crisp-lg border border-[#00153F]/10">
            <p className="text-base leading-relaxed text-[#00153F]/85 mb-8">{intro}</p>

            <nav
              aria-label="Table of contents"
              className="bg-[#F7F8FA] rounded-xl p-5 border border-[#00153F]/10 mb-10"
            >
              <h2 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#C99A55] mb-3">
                Contents
              </h2>
              <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm font-medium list-decimal list-inside">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="hover:text-[#C99A55] transition-colors">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-9">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-6">
                  <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-3 flex items-baseline gap-3">
                    <span className="text-[#C99A55] text-base font-bold">{String(i + 1).padStart(2, "0")}</span>
                    <span>{s.title}</span>
                  </h2>
                  <div className="space-y-3 text-[15px] leading-relaxed text-[#00153F]/80 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-[#00153F] [&_a]:font-bold [&_a]:underline [&_a]:decoration-[#C99A55] [&_a]:underline-offset-2">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-sm">
            <a href={legalLink(other)} className="font-bold underline decoration-[#C99A55] underline-offset-2 hover:text-[#C99A55]">
              Read our {otherLabel} →
            </a>
          </div>
        </div>
      </main>

      <footer className="vix-navy-gradient text-[#EDE4D6] border-t border-[#C99A55]/25 py-8">
        <div className="container mx-auto gutter-x flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#EDE4D6]/60 text-center md:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-medium">
            <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C99A55]" />
              {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#C99A55]" />
              {COMPANY_INFO.email}
            </a>
            <a href={legalLink("privacy")} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href={legalLink("terms")} className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

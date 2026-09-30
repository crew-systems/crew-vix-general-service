import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { COMPANY_INFO, SERVICE_AREAS } from "@/data/landscapingData";
import { SERVICES } from "@/data/servicesData";
import { SITE_URL } from "@/config/site";

export function AboutPage() {
  const navigate = useNavigate();
  const openEstimate = () => navigate("/contact");
  useEffect(() => window.scrollTo(0, 0), []);

  const description = `${COMPANY_INFO.name} delivers end-to-end residential and commercial construction, remodeling, building systems, and smart-energy solutions across ${COMPANY_INFO.location}.`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={`About Us | ${COMPANY_INFO.name}`}
        description={description}
        canonical="/about"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE_URL}/about`,
          name: `About ${COMPANY_INFO.name}`,
          description,
          about: { "@id": `${SITE_URL}/#business` },
        }}
      />
      <Header onOpenEstimate={openEstimate} solid />
      <main className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">{COMPANY_INFO.name}</p>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl">About Us</h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">{COMPANY_INFO.tagline}</p>
          </div>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-crisp sm:p-8">
            <h2 className="font-heading text-xl font-extrabold sm:text-2xl">Our Story</h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                {COMPANY_INFO.name} ({COMPANY_INFO.legalName}) is a Massachusetts-based team that takes
                residential and commercial projects from structure and interiors through essential
                building systems, solar, EV charging, and smart technology.
              </p>
              <p>
                Instead of juggling separate contractors, clients work with one coordinated crew from
                concept through completion, with clear communication and transparent estimates at every step.
              </p>
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-crisp sm:p-8">
            <h2 className="font-heading text-xl font-extrabold sm:text-2xl">What We Do</h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-sm font-semibold text-primary hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-crisp sm:p-8">
            <h2 className="font-heading text-xl font-extrabold sm:text-2xl">Service Area</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Based in Massachusetts, we serve homeowners and businesses across {COMPANY_INFO.location}.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/service-areas/${area.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-semibold hover:bg-muted"
                  >
                    <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    {area.fullName}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get your free quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
      <Footer onOpenEstimate={openEstimate} />
    </div>
  );
}

export default AboutPage;

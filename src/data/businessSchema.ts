import { SITE_URL } from "../config/site";
import { COMPANY_INFO, IMAGES, SERVICE_AREAS } from "./landscapingData";
import { SERVICES } from "./servicesData";

/** Single JSON-LD identity for the business, referenced from every page. */
export const BUSINESS_ID = `${SITE_URL}/#business`;

export const businessRef = { "@id": BUSINESS_ID };

export const STATES_SERVED = SERVICE_AREAS.map((area) => ({
  "@type": "State",
  name: area.fullName,
}));

/**
 * Business node shared by the home, contact and service-area pages.
 * Never add priceRange, aggregateRating or review here.
 * sameAs is omitted until real Google Business Profile / Facebook / Instagram URLs exist
 * (the footer icons currently point to the generic network homepages).
 */
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness"],
  "@id": BUSINESS_ID,
  name: COMPANY_INFO.name,
  legalName: COMPANY_INFO.legalName,
  founder: { "@type": "Person", name: COMPANY_INFO.ownerName },
  description: COMPANY_INFO.tagline,
  url: `${SITE_URL}/`,
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  image: IMAGES.ogMeta,
  // TODO: geo — lat/lng with 5+ decimals from the Google Business Profile
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  areaServed: STATES_SERVED,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "VIX General Contracting Services",
    itemListElement: SERVICES.map((s, idx) => ({
      "@type": "Offer",
      position: idx + 1,
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${SITE_URL}/services/${s.slug}`,
        description: s.shortDesc,
      },
    })),
  },
};

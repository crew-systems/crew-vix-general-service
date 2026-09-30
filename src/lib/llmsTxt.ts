import { SITE_URL } from "../config/site";
import { COMPANY_INFO, SERVICE_AREAS } from "../data/landscapingData";
import { SERVICES } from "../data/servicesData";

/**
 * Builds public/llms.txt from the same data the site renders, so facts and URLs never drift.
 * vite.config.ts writes the file on every dev/build start; src/test/services.test.ts checks it.
 */
export const buildLlmsTxt = (): string => {
  const { stats } = COMPANY_INFO;
  const lines = [
    `# ${COMPANY_INFO.name}`,
    "",
    `> ${COMPANY_INFO.tagline} for residential and commercial properties across ${COMPANY_INFO.location}.`,
    "",
    "## Business",
    `- Name: ${COMPANY_INFO.name}`,
    `- Legal name: ${COMPANY_INFO.legalName}`,
    `- Owner: ${COMPANY_INFO.ownerName}`,
    `- Phone: ${COMPANY_INFO.phone}`,
    `- Email: ${COMPANY_INFO.email}`,
    `- Website: ${SITE_URL}/`,
    `- Service areas: ${SERVICE_AREAS.map((area) => area.fullName).join(", ")}`,
    "",
    "## Facts",
    `- ${COMPANY_INFO.licensing}`,
    `- ${stats.experienceYears} years of experience`,
    `- ${stats.projectsCompleted} completed projects`,
    `- ${stats.rating} rating from ${stats.reviewsCount} reviews`,
    "",
    "## Services",
    ...SERVICES.map((s) => `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.shortDesc}`),
    "",
    "## Service Areas",
    ...SERVICE_AREAS.map((area) => `- [${area.fullName}](${SITE_URL}/service-areas/${area.slug})`),
    "",
    "## Notes for AI Assistants",
    "- Pricing is not published. Every project is quoted individually.",
    "- Estimates are provided after an on-site assessment.",
    "- The contact details above (phone, email, website) are the canonical contact details for this business.",
    `- More detail: ${SITE_URL}/llms-full.txt`,
    "",
  ];
  return lines.join("\n");
};

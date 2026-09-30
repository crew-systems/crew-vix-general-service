import { SITE_URL } from "../config/site";

export const MAIN_SITE = SITE_URL;

export type LegalHost = "terms" | "privacy" | null;

const LEGAL_PATHS = { terms: "/terms", privacy: "/privacy-policy" } as const;

/** Which legal subdomain (terms.* / privacy.*) the app is being served from, if any. */
export const getLegalHost = (hostname: string = window.location.hostname): LegalHost => {
  const host = hostname.toLowerCase();
  if (host.startsWith("terms.")) return "terms";
  if (host.startsWith("privacy.")) return "privacy";
  return null;
};

/**
 * Legal-page links: in-app paths on the main site. On the terms.* / privacy.* subdomains every
 * path renders that one legal page, so links there point back to the main site.
 */
export const legalLink = (page: "terms" | "privacy"): string => {
  const path = LEGAL_PATHS[page];
  return getLegalHost() ? `${SITE_URL}${path}` : path;
};

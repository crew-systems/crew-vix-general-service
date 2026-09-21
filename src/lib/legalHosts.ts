export const MAIN_SITE = "https://www.vixgeneralservices.com";
export const TERMS_URL = "https://terms.vixgeneralservices.com";
export const PRIVACY_URL = "https://privacy.vixgeneralservices.com";

export type LegalHost = "terms" | "privacy" | null;

/** Which legal subdomain (terms.* / privacy.*) the app is being served from, if any. */
export const getLegalHost = (hostname: string = window.location.hostname): LegalHost => {
  const host = hostname.toLowerCase();
  if (host.startsWith("terms.")) return "terms";
  if (host.startsWith("privacy.")) return "privacy";
  return null;
};

/** Legal-page links: real subdomains in production, in-app routes on localhost/previews. */
export const legalLink = (page: "terms" | "privacy"): string => {
  const { hostname } = window.location;
  const isProd = hostname.endsWith("vixgeneralservices.com");
  if (!isProd) return `/${page}`;
  return page === "terms" ? TERMS_URL : PRIVACY_URL;
};

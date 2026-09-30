/** Canonical origin of the live site (no www, no trailing slash). */
export const SITE_URL = "https://vixgeneralservices.com";

/** Absolute URL for a site path. Home is "<SITE_URL>/"; every other path has no trailing slash. */
export const siteUrl = (path: string = "/"): string => {
  if (path.startsWith("http")) return path;
  const normalized = `/${path.replace(/^\/+/, "")}`.replace(/\/+$/, "");
  return normalized === "" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
};

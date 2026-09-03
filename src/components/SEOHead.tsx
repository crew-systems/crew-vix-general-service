import React from "react";
import { Helmet } from "react-helmet-async";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
  schemaJson?: Record<string, unknown>;
}

const SITE_BASE = "https://www.vixgeneralservices.com";

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogImage,
  noIndex = false,
  schemaJson,
}) => {
  const fullCanonical = canonical.startsWith("http")
    ? canonical
    : `${SITE_BASE}${canonical}`;
  const fullOgImage = ogImage?.startsWith("http")
    ? ogImage
    : ogImage
      ? `${SITE_BASE}${ogImage}`
      : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {fullOgImage && <meta property="og:image" content={fullOgImage} />}
      {fullOgImage && <meta name="twitter:image" content={fullOgImage} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {schemaJson && (
        <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;

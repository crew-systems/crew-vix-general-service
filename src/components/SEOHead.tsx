import React from "react";
import { Helmet } from "react-helmet-async";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
  schemaJson?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_BASE = "https://www.vixgeneralservices.com";

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogImage,
  ogImageAlt = "VIX General Services - Outdoor Lighting, Security Cameras, Smart Automation, HVAC & Electrical",
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

  const schemas = Array.isArray(schemaJson)
    ? schemaJson
    : schemaJson
      ? [schemaJson]
      : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content="VIX General Services" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      {fullOgImage && <meta property="og:image" content={fullOgImage} />}
      {fullOgImage && <meta property="og:image:alt" content={ogImageAlt} />}
      {fullOgImage && <meta property="og:image:width" content="1200" />}
      {fullOgImage && <meta property="og:image:height" content="630" />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {fullOgImage && <meta name="twitter:image" content={fullOgImage} />}
      {fullOgImage && <meta name="twitter:image:alt" content={ogImageAlt} />}

      {/* Structured Data (JSON-LD) */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;

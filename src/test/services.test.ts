import { describe, it, expect } from "vitest";
import { SERVICES, getServiceBySlug, getAllServiceSlugs } from "../data/servicesData";
import fs from "fs";
import path from "path";

describe("Services Data Registry", () => {
  it("should define exactly all 7 services including outdoor lighting and security systems", () => {
    const slugs = getAllServiceSlugs();
    expect(slugs).toEqual([
      "outdoor-lighting",
      "security-cameras",
      "smart-automation",
      "hvac",
      "electrical",
      "solar",
      "ev-charging",
    ]);
    expect(slugs.length).toBe(7);
  });

  it("should have comprehensive SEO metadata for every service", () => {
    SERVICES.forEach((service) => {
      expect(service.slug).toBeTruthy();
      expect(service.name).toBeTruthy();
      expect(service.shortName).toBeTruthy();
      expect(service.headline).toBeTruthy();
      expect(service.metaTitle).toBeTruthy();
      expect(service.metaTitle).toContain("VIX");
      expect(service.metaDescription).toBeTruthy();
      expect(service.metaDescription.length).toBeGreaterThan(50);
      expect(service.schemaServiceType).toBeTruthy();
      expect(service.heroImage).toBeTruthy();
    });
  });

  it("should contain at least 4 offerings and 4 FAQs per service", () => {
    SERVICES.forEach((service) => {
      expect(service.offerings.length).toBeGreaterThanOrEqual(4);
      service.offerings.forEach((offering) => {
        expect(offering.title).toBeTruthy();
        expect(offering.description).toBeTruthy();
        expect(offering.features.length).toBeGreaterThanOrEqual(2);
      });

      expect(service.faqs.length).toBeGreaterThanOrEqual(4);
      service.faqs.forEach((faq) => {
        expect(faq.question).toBeTruthy();
        expect(faq.answer).toBeTruthy();
      });
    });
  });

  it("should find service by slug case-insensitively and handle invalid slugs", () => {
    expect(getServiceBySlug("OUTDOOR-LIGHTING")?.slug).toBe("outdoor-lighting");
    expect(getServiceBySlug("security-cameras")?.name).toBe("Security Camera & Surveillance Systems");
    expect(getServiceBySlug("smart-automation")?.slug).toBe("smart-automation");
    expect(getServiceBySlug("HVAC")?.slug).toBe("hvac");
    expect(getServiceBySlug("electrical")?.name).toBe("Licensed Electrical Services");
    expect(getServiceBySlug("SOLAR")?.slug).toBe("solar");
    expect(getServiceBySlug("EV-CHARGING")?.slug).toBe("ev-charging");
    expect(getServiceBySlug("non-existent-service")).toBeUndefined();
  });
});

describe("Sitemap & Robots.txt Parity", () => {
  it("sitemap.xml should reference vixgeneralservices.com and all 7 service subpages", () => {
    const sitemapPath = path.resolve(__dirname, "../../public/sitemap.xml");
    const sitemapContent = fs.readFileSync(sitemapPath, "utf8");

    expect(sitemapContent).toContain("https://www.vixgeneralservices.com/");
    expect(sitemapContent).toContain("https://www.vixgeneralservices.com/services");
    
    // Test that every service slug has its canonical URL declared in sitemap.xml
    getAllServiceSlugs().forEach((slug) => {
      expect(sitemapContent).toContain(`https://www.vixgeneralservices.com/services/${slug}`);
    });

    expect(sitemapContent).not.toContain("mkfreitasllc.com");
  });

  it("robots.txt should declare the official sitemap URL", () => {
    const robotsPath = path.resolve(__dirname, "../../public/robots.txt");
    const robotsContent = fs.readFileSync(robotsPath, "utf8");

    expect(robotsContent).toContain("Sitemap: https://www.vixgeneralservices.com/sitemap.xml");
  });
});
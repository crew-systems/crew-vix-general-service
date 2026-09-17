import { describe, it, expect } from "vitest";
import { SERVICES, getServiceBySlug, getAllServiceSlugs } from "../data/servicesData";
import { COMPANY_INFO, IMAGES, SERVICE_AREAS } from "../data/landscapingData";
import fs from "fs";
import path from "path";

describe("Services Data Registry", () => {
  it("should define all 10 construction, systems, and smart-energy services", () => {
    const slugs = getAllServiceSlugs();
    expect(slugs).toEqual([
      "general-construction",
      "remodeling-interiors",
      "plumbing",
      "hvac",
      "electrical",
      "solar",
      "ev-charging",
      "outdoor-lighting",
      "security-cameras",
      "smart-automation",
    ]);
    expect(slugs.length).toBe(10);
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
    expect(getServiceBySlug("GENERAL-CONSTRUCTION")?.slug).toBe("general-construction");
    expect(getServiceBySlug("remodeling-interiors")?.slug).toBe("remodeling-interiors");
    expect(getServiceBySlug("PLUMBING")?.slug).toBe("plumbing");
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
  it("sitemap.xml should reference vixgeneralservices.com and all service subpages", () => {
    const sitemapPath = path.resolve(__dirname, "../../public/sitemap.xml");
    const sitemapContent = fs.readFileSync(sitemapPath, "utf8");

    expect(sitemapContent).toContain("https://www.vixgeneralservices.com/");
    expect(sitemapContent).toContain("https://www.vixgeneralservices.com/services");
    
    // Test that every service slug has its canonical URL declared in sitemap.xml
    getAllServiceSlugs().forEach((slug) => {
      expect(sitemapContent).toContain(`https://www.vixgeneralservices.com/services/${slug}`);
    });

    // Test that every service area is declared in sitemap.xml
    [
      "massachusetts",
      "maine",
      "new-hampshire",
      "rhode-island",
      "vermont",
    ].forEach((area) => {
      expect(sitemapContent).toContain(`https://www.vixgeneralservices.com/service-areas/${area}`);
    });

    expect(sitemapContent).not.toContain("mkfreitasllc.com");
  });

  it("robots.txt should declare the official sitemap URL and explicitly authorize AI bots", () => {
    const robotsPath = path.resolve(__dirname, "../../public/robots.txt");
    const robotsContent = fs.readFileSync(robotsPath, "utf8");

    expect(robotsContent).toContain("Sitemap: https://www.vixgeneralservices.com/sitemap.xml");
    expect(robotsContent).toContain("User-agent: GPTBot");
    expect(robotsContent).toContain("User-agent: PerplexityBot");
    expect(robotsContent).toContain("User-agent: ClaudeBot");
    expect(robotsContent).toContain("User-agent: Google-Extended");
  });

  it("llms.txt and llms-full.txt should exist and define core business knowledge", () => {
    const llmsPath = path.resolve(__dirname, "../../public/llms.txt");
    const llmsContent = fs.readFileSync(llmsPath, "utf8");
    expect(llmsContent).toContain("# VIX General Services");
    expect(llmsContent).toContain("(954) 330-9296");
    expect(llmsContent).toContain("outdoor-lighting");
    expect(llmsContent).toContain("security-cameras");

    const llmsFullPath = path.resolve(__dirname, "../../public/llms-full.txt");
    const llmsFullContent = fs.readFileSync(llmsFullPath, "utf8");
    expect(llmsFullContent).toContain("VIX General Services - Comprehensive AI Knowledge Base");
    expect(llmsFullContent).toContain("3000K warm white");
    expect(llmsFullContent).toContain("Massachusetts");
  });

  it("_redirects should exist with SPA routing rule", () => {
    const redirectsPath = path.resolve(__dirname, "../../public/_redirects");
    const redirectsContent = fs.readFileSync(redirectsPath, "utf8");
    expect(redirectsContent).toContain("/*    /index.html   200");
  });
});

describe("Official Service Area Source", () => {
  it("uses the confirmed five-state service area", () => {
    expect(SERVICE_AREAS.map((area) => area.slug)).toEqual([
      "massachusetts",
      "maine",
      "new-hampshire",
      "rhode-island",
      "vermont",
    ]);
  });

  it("does not publish the previous Florida locations", () => {
    const publicFiles = ["llms.txt", "llms-full.txt", "sitemap.xml"];
    const staleLocations = [
      "South Florida",
      "Boca Raton",
      "Coral Springs",
      "Parkland",
    ];

    publicFiles.forEach((file) => {
      const content = fs.readFileSync(path.resolve(__dirname, `../../public/${file}`), "utf8");
      staleLocations.forEach((location) => {
        expect(content).not.toContain(location);
      });
    });
  });
});

describe("Business Identity", () => {
  it("uses the business and owner names supplied in the client form", () => {
    expect(COMPANY_INFO.name).toBe("VIX General Services");
    expect(COMPANY_INFO.legalName).toBe("VIX CONSTRUCTION AND LANDSCAPE INC");
    expect(COMPANY_INFO.ownerName).toBe("Kristyan Martins");
  });

  it("does not confuse the photo-delivery address with the business email", () => {
    expect(COMPANY_INFO.email).toBe("vixgeneralconstruction@gmail.com");
    expect(COMPANY_INFO.email).not.toBe("crewsystems.io@gmail.com");
  });
});

describe("Project Gallery", () => {
  it("uses the 18 unique supplied project photos with descriptive titles and categories", () => {
    expect(IMAGES.gallery).toHaveLength(18);

    IMAGES.gallery.forEach((item) => {
      expect(item.title.length).toBeGreaterThan(10);
      expect(item.category).toBeTruthy();
      expect(item.url).toMatch(/^\/images\/projects\/.+\.jpg$/);

      const assetPath = path.resolve(__dirname, `../../public${item.url}`);
      expect(fs.existsSync(assetPath)).toBe(true);
    });
  });

  it("covers the requested project procedures", () => {
    const categories = new Set(IMAGES.gallery.map((item) => item.category));
    expect(categories).toEqual(
      new Set([
        "HVAC",
        "ELECTRICAL",
        "CONSTRUCTION",
        "INTERIORS",
        "LIGHTING",
        "EV CHARGING",
        "ENERGY EFFICIENCY",
        "COMMERCIAL ENERGY",
      ]),
    );
  });
});

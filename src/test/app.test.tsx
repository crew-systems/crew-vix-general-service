import React from "react";
import { describe, it, expect, beforeAll } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";
import { SERVICES } from "../data/servicesData";
import { SERVICE_AREAS } from "../data/landscapingData";

describe("App Render Test", () => {
  beforeAll(() => {
    // Mock browser APIs not present in jsdom
    global.IntersectionObserver = class {
      readonly root: Element | Document | null = null;
      readonly rootMargin: string = "";
      readonly thresholds: ReadonlyArray<number> = [];
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords(): IntersectionObserverEntry[] { return []; }
    } as unknown as typeof IntersectionObserver;

    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof ResizeObserver;

    window.scrollTo = () => {};
  });

  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
    expect(container.innerHTML).not.toContain("An unexpected error occurred");
    expect(container.innerHTML).toContain("VIX General Services");
    expect(container.textContent).toContain("FROM FOUNDATION TO A");
    expect(container.textContent).toContain("SMARTER, ENERGY-EFFICIENT HOME");
    expect(container.textContent).toContain("END-TO-END CONSTRUCTION");

    const heroVideo = container.querySelector("#hero video");
    expect(heroVideo).not.toBeNull();
    expect(heroVideo).toHaveAttribute("autoplay");
    expect(heroVideo).toHaveAttribute("loop");
    expect(heroVideo).toHaveAttribute("playsinline");
    // Poster is the current video's own first frame (never older artwork),
    // so the hero paints before the video has downloaded.
    expect(heroVideo).toHaveAttribute(
      "poster",
      "/videos/vix-hero-night-mobile-poster.jpg",
    );
    expect(heroVideo?.className).not.toMatch(/opacity-0/);
    expect(
      Array.from(heroVideo?.querySelectorAll("source") ?? []).map((source) =>
        source.getAttribute("src"),
      ),
    ).toEqual([
      "/videos/vix-hero-night-desktop.mp4",
      "/videos/vix-hero-night-mobile.mp4",
    ]);
    expect(container.querySelector("#hero picture")).toBeNull();

    // The client asked to remove the rating strip and the reviews section.
    expect(container.querySelector("#hero")?.textContent).not.toMatch(
      /Rating from/,
    );
    expect(container.querySelector("#reviews")).toBeNull();
    expect(container.querySelector('a[href="/#reviews"]')).toBeNull();

    // Below-the-fold images must not compete with the hero video on load
    // (eager loading pulled ~6MB of images on phones before this).
    const eagerBelowFold = Array.from(
      container.querySelectorAll<HTMLImageElement>("main img"),
    )
      .filter((img) => !img.closest("#hero"))
      .filter((img) => img.getAttribute("loading") !== "lazy")
      .map((img) => img.getAttribute("src"));
    expect(eagerBelowFold).toEqual([]);

    const brandLogo = container.querySelector<HTMLImageElement>(
      'header img[alt="VIX General Services"]',
    );
    expect(brandLogo).toHaveAttribute(
      "src",
      "/images/vix-general-services-logo.webp",
    );

    const header = container.querySelector("header");
    const serviceLinks = new Set(
      Array.from(
        header?.querySelectorAll<HTMLAnchorElement>('a[href^="/services/"]') ??
          [],
      ).map((link) => link.getAttribute("href")),
    );
    const serviceAreaLinks = new Set(
      Array.from(
        header?.querySelectorAll<HTMLAnchorElement>(
          'a[href^="/service-areas/"]',
        ) ?? [],
      ).map((link) => link.getAttribute("href")),
    );

    expect([...serviceLinks].sort()).toEqual(
      SERVICES.map((service) => `/services/${service.slug}`).sort(),
    );
    expect([...serviceAreaLinks].sort()).toEqual(
      SERVICE_AREAS.map((area) => `/service-areas/${area.slug}`).sort(),
    );
  });

  it("opens estimate modal on clicking Free Estimate button without crashing", () => {
    const { container, getAllByText } = render(<App />);
    const buttons = getAllByText("Free Estimate");
    expect(buttons.length).toBeGreaterThan(0);
    fireEvent.click(buttons[0]);
    expect(container.innerHTML).not.toContain("An unexpected error occurred");
    expect(container.querySelector("#inline-xCsxxTefyGz05iGmy5el-modal")).not.toBeNull();
  });
});

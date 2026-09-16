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
    // Visible from the first paint: hiding it until `playing` left some
    // phones stuck on the poster.
    expect(heroVideo).toHaveAttribute(
      "poster",
      "/videos/vix-home-loop-mobile-poster.jpg",
    );
    expect(heroVideo?.className).not.toMatch(/opacity-0/);
    expect(
      Array.from(heroVideo?.querySelectorAll("source") ?? []).map((source) =>
        source.getAttribute("src"),
      ),
    ).toEqual([
      "/videos/vix-home-loop-desktop.mp4",
      "/videos/vix-home-loop-mobile.mp4",
    ]);
    expect(container.querySelector("#hero picture img")).toHaveAttribute(
      "src",
      "/videos/vix-home-loop-mobile-poster.jpg",
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

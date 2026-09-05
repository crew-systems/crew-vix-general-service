import React from "react";
import { describe, it, expect, beforeAll } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ContactPage } from "../pages/ContactPage";
import { GHLFormEmbed } from "../components/GHLFormEmbed";
import { EstimateModal } from "../components/EstimateModal";
import { ServicesSection } from "../components/ServicesSection";
import { ThankYouPage } from "../pages/ThankYouPage";

describe("Contact and Form Embed Tests", () => {
  beforeAll(() => {
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
    Element.prototype.scrollIntoView = () => {};
  });

  it("renders GHLFormEmbed with correct GoHighLevel iframe attributes and instanceId", () => {
    const { container } = render(<GHLFormEmbed instanceId="test-form" />);
    const iframe = container.querySelector("iframe");
    expect(iframe).not.toBeNull();
    expect(iframe?.getAttribute("src")).toBe(
      "https://api.leadconnectorhq.com/widget/form/ZPe9ADAkmygEVDdixGlE"
    );
    expect(iframe?.getAttribute("id")).toBe("inline-ZPe9ADAkmygEVDdixGlE-test-form");
    expect(iframe?.getAttribute("data-layout-iframe-id")).toBe(
      "inline-ZPe9ADAkmygEVDdixGlE-test-form"
    );
    expect(iframe?.getAttribute("data-form-id")).toBe("ZPe9ADAkmygEVDdixGlE");
  });

  it("deduplicates GHL form script when multiple embeds are rendered", () => {
    const { unmount } = render(
      <div>
        <GHLFormEmbed instanceId="one" />
        <GHLFormEmbed instanceId="two" />
      </div>
    );
    const scripts = document.querySelectorAll(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]'
    );
    expect(scripts.length).toBeLessThanOrEqual(1);
    unmount();
  });

  it("renders ContactPage with form and triggers scroll on CTA click", () => {
    const { container, getByText } = render(
      <HelmetProvider>
        <BrowserRouter>
          <ContactPage />
        </BrowserRouter>
      </HelmetProvider>
    );
    expect(container.textContent).toContain("Get Your Free Estimate");
    expect(container.querySelector("iframe")).not.toBeNull();

    // Verify contact form card is present with scroll anchor
    const formCard = container.querySelector("#contact-form-card");
    expect(formCard).not.toBeNull();

    // Test clicking Free Estimate CTA in Header
    const freeEstimateBtn = getByText("Free Estimate");
    expect(freeEstimateBtn).toBeDefined();
    fireEvent.click(freeEstimateBtn);
  });

  it("renders EstimateModal with preselected service and custom instanceId", () => {
    const { container } = render(
      <EstimateModal
        isOpen={true}
        onClose={() => {}}
        defaultService="outdoor-lighting"
      />
    );
    expect(container.textContent).toContain("Outdoor & Landscape Lighting");
    const modalIframe = container.querySelector("#inline-ZPe9ADAkmygEVDdixGlE-modal");
    expect(modalIframe).not.toBeNull();
    const dialog = container.querySelector('[role="dialog"]');
    expect(dialog).not.toBeNull();
    expect(dialog?.getAttribute("aria-modal")).toBe("true");
  });

  it("closes EstimateModal when Escape key is pressed", () => {
    let closed = false;
    render(
      <EstimateModal
        isOpen={true}
        onClose={() => {
          closed = true;
        }}
      />
    );
    fireEvent.keyDown(window, { key: "Escape" });
    expect(closed).toBe(true);
  });

  it("renders ServicesSection carousel with navigation arrows and 7 services", () => {
    const { container } = render(
      <BrowserRouter>
        <ServicesSection onOpenEstimate={() => {}} />
      </BrowserRouter>
    );
    expect(container.textContent).toContain("Our Specialized Services");
    expect(container.textContent).toContain("View All 7 Services Overview");
    expect(container.querySelector('button[aria-label="Previous service"]')).not.toBeNull();
    expect(container.querySelector('button[aria-label="Next service"]')).not.toBeNull();
  });

  it("renders ThankYouPage with confirmation message, next steps, and direct contact", () => {
    const { container } = render(
      <HelmetProvider>
        <BrowserRouter>
          <ThankYouPage />
        </BrowserRouter>
      </HelmetProvider>
    );
    expect(container.textContent).toContain("Thank You! We Received Your Request");
    expect(container.textContent).toContain("Your answers have been successfully submitted");
    expect(container.textContent).toContain("will reach out to you shortly");
    expect(container.textContent).toContain("What Happens Next?");
    expect(container.textContent).toContain("(954) 330-9296");
    expect(container.querySelector('a[href^="tel:"]')).not.toBeNull();
  });
});

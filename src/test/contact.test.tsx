import React from "react";
import { describe, it, expect, beforeAll } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ContactPage } from "../pages/ContactPage";
import { GHLFormEmbed, isFormSubmittedMessage } from "../components/GHLFormEmbed";
import { EstimateModal } from "../components/EstimateModal";
import { ServicesSection } from "../components/ServicesSection";
import { ThankYouPage } from "../pages/ThankYouPage";
import { DiscountPage } from "../pages/DiscountPage";

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
      "https://api.leadconnectorhq.com/widget/form/xCsxxTefyGz05iGmy5el"
    );
    expect(iframe?.getAttribute("id")).toBe("inline-xCsxxTefyGz05iGmy5el-test-form");
    expect(iframe?.getAttribute("data-layout-iframe-id")).toBe(
      "inline-xCsxxTefyGz05iGmy5el-test-form"
    );
    expect(iframe?.getAttribute("data-form-id")).toBe("xCsxxTefyGz05iGmy5el");
    expect(iframe?.getAttribute("data-height")).toBe("625");
  });

  it("detects the GHL sticky-contact array as a submit only when it comes from a focused own iframe", () => {
    const msg = ["set-sticky-contacts", "_ud", "{}", "loc", "fp"];
    expect(isFormSubmittedMessage(msg, { fromOwnIframe: true, iframeFocused: true })).toBe(true);
    // load-time message for a returning contact: visitor never touched the form
    expect(isFormSubmittedMessage(msg, { fromOwnIframe: true, iframeFocused: false })).toBe(false);
    // message from some other frame
    expect(isFormSubmittedMessage(msg, { fromOwnIframe: false, iframeFocused: true })).toBe(false);
  });

  it("ignores non-submit GHL array messages such as height and query-params", () => {
    const ctx = { fromOwnIframe: true, iframeFocused: true };
    expect(isFormSubmittedMessage(["highlevel.setHeight", { height: 600, id: "x" }], ctx)).toBe(false);
    expect(isFormSubmittedMessage(["fetch-query-params", "id", "loc"], ctx)).toBe(false);
    expect(isFormSubmittedMessage(["iframeLoaded"], ctx)).toBe(false);
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

  it("renders the supplied discount embed and hides the chat widget", () => {
    const chat = document.createElement("div");
    chat.id = "lc-chat-widget";
    document.body.appendChild(chat);
    const chatHost = document.createElement("chat-widget");
    chatHost.id = "ghl-chat-loader";
    document.body.appendChild(chatHost);

    const { container, unmount } = render(
      <HelmetProvider>
        <BrowserRouter>
          <DiscountPage />
        </BrowserRouter>
      </HelmetProvider>,
    );
    const iframe = container.querySelector('iframe[data-form-id="T42tLOEScaBPGs3uHtht"]');
    expect(iframe?.getAttribute("src")).toBe("https://api.leadconnectorhq.com/widget/form/T42tLOEScaBPGs3uHtht");
    expect(iframe?.getAttribute("id")).toBe("inline-T42tLOEScaBPGs3uHtht");
    expect(iframe?.getAttribute("data-layout-iframe-id")).toBe("inline-T42tLOEScaBPGs3uHtht");
    expect(iframe?.getAttribute("data-height")).toBe("605");
    expect(iframe?.getAttribute("title")).toBe("Discount Form ");
    expect(container.querySelector("header, footer")).toBeNull();
    expect(chat.style.display).toBe("none");
    expect(chatHost.style.display).toBe("none");

    unmount();
    expect(chat.style.display).toBe("");
    expect(chatHost.style.display).toBe("");
    chat.remove();
    chatHost.remove();
  });

  it("renders ContactPage with the shared form, service map, and scroll CTA", () => {
    const { container, getByText } = render(
      <HelmetProvider>
        <BrowserRouter>
          <ContactPage />
        </BrowserRouter>
      </HelmetProvider>
    );
    expect(container.textContent).toContain("Get Your Free Quote");
    expect(container.querySelector('iframe[data-form-id="xCsxxTefyGz05iGmy5el"]')).not.toBeNull();
    expect(container.querySelector('iframe[src^="https://www.openstreetmap.org/"]')).not.toBeNull();
    expect(container.querySelector('a[href="/service-areas"]')).not.toBeNull();

    // Verify contact form card is present with scroll anchor
    const formCard = container.querySelector("#contact-form-card");
    expect(formCard).not.toBeNull();
    expect(container.querySelector("header")?.classList.contains("vix-header-active")).toBe(true);

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
    const modalIframe = container.querySelector("#inline-xCsxxTefyGz05iGmy5el-modal");
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

  it("renders the three grouped service pillars and full-services link", () => {
    const { container } = render(
      <BrowserRouter>
        <ServicesSection onOpenEstimate={() => {}} />
      </BrowserRouter>
    );
    expect(container.textContent).toContain("THREE CONNECTED CAPABILITIES");
    expect(container.textContent).toContain("Construction & Remodeling");
    expect(container.textContent).toContain("Essential Building Systems");
    expect(container.textContent).toContain("Smart & Energy Solutions");
    expect(container.textContent).toContain("Explore Every Service");
  });

  it("renders standalone ThankYouPage with confirmation and homepage link", () => {
    const { container } = render(
      <HelmetProvider>
        <BrowserRouter>
          <ThankYouPage />
        </BrowserRouter>
      </HelmetProvider>
    );
    expect(container.textContent).toContain("Thank You! We Received Your Request");
    expect(container.textContent).toContain("will contact you within a few minutes from +1 978-705-5562");
    expect(container.textContent).toContain("Your message has been received");
    expect(container.querySelector('a[href="/"]')).not.toBeNull();
    expect(container.querySelector("header, footer")).toBeNull();
  });
});

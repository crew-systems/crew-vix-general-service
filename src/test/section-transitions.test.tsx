import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SectionTransitions } from "../components/SectionTransitions";

describe("SectionTransitions", () => {
  const originalIntersectionObserver = global.IntersectionObserver;

  afterEach(() => {
    global.IntersectionObserver = originalIntersectionObserver;
    document.documentElement.classList.remove("section-transitions-ready");
    vi.restoreAllMocks();
  });

  it("marks sections for dividers and reveals them when they intersect", async () => {
    let intersectionCallback: IntersectionObserverCallback | undefined;
    const observe = vi.fn();
    const unobserve = vi.fn();

    global.IntersectionObserver = class {
      readonly root: Element | Document | null = null;
      readonly rootMargin = "0px 0px -8% 0px";
      readonly thresholds = [0.12];
      observe = observe;
      unobserve = unobserve;
      disconnect = vi.fn();
      takeRecords = () => [];

      constructor(callback: IntersectionObserverCallback) {
        intersectionCallback = callback;
      }
    } as unknown as typeof IntersectionObserver;

    const { getByTestId } = render(
      <MemoryRouter>
        <section data-testid="first" style={{ backgroundColor: "#1A2B44" }}>
          First
        </section>
        <section data-testid="second" style={{ backgroundColor: "#F5F6F8" }}>
          Second
        </section>
        <SectionTransitions />
      </MemoryRouter>,
    );

    const firstSection = getByTestId("first");
    const secondSection = getByTestId("second");

    await waitFor(() => {
      expect(firstSection).toHaveAttribute("data-section-transition", "true");
      expect(secondSection).toHaveAttribute("data-section-divider", "true");
      expect(secondSection).toHaveAttribute("data-section-blend", "true");
      expect(
        secondSection.style.getPropertyValue("--section-blend-from"),
      ).toBe("rgb(26, 43, 68)");
      expect(observe).toHaveBeenCalledTimes(2);
    });

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: true,
            target: secondSection,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(secondSection).toHaveClass("is-visible");
    expect(unobserve).toHaveBeenCalledWith(secondSection);
  });

  it("reveals tall sections on the first visible pixel and sections already scrolled past", async () => {
    let intersectionCallback: IntersectionObserverCallback | undefined;
    let observerOptions: IntersectionObserverInit | undefined;

    global.IntersectionObserver = class {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      takeRecords = () => [];

      constructor(
        callback: IntersectionObserverCallback,
        options?: IntersectionObserverInit,
      ) {
        intersectionCallback = callback;
        observerOptions = options;
      }
    } as unknown as typeof IntersectionObserver;

    const { getByTestId } = render(
      <MemoryRouter>
        <section data-testid="passed">Passed</section>
        <section data-testid="below">Below</section>
        <SectionTransitions />
      </MemoryRouter>,
    );

    await waitFor(() => expect(intersectionCallback).toBeDefined());

    // A ratio threshold can never be met by a section taller than the
    // viewport / ratio (the one-column gallery on phones is ~7000px).
    expect(observerOptions?.threshold).toBe(0);

    const passed = getByTestId("passed");
    const below = getByTestId("below");

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: false,
            target: passed,
            boundingClientRect: { bottom: -40 } as DOMRectReadOnly,
            rootBounds: { top: 0 } as DOMRectReadOnly,
          } as unknown as IntersectionObserverEntry,
          {
            isIntersecting: false,
            target: below,
            boundingClientRect: { bottom: 2400 } as DOMRectReadOnly,
            rootBounds: { top: 0 } as DOMRectReadOnly,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(passed).toHaveClass("is-visible");
    expect(below).not.toHaveClass("is-visible");
  });

  it("does not hide live regions such as the toast container", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <section data-testid="toaster" aria-live="polite" />
        <section data-testid="content">Content</section>
        <SectionTransitions />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(getByTestId("content")).toHaveAttribute(
        "data-section-transition",
        "true",
      );
    });
    expect(getByTestId("toaster")).not.toHaveAttribute(
      "data-section-transition",
    );
  });

  it("shows all content immediately when IntersectionObserver is unavailable", async () => {
    global.IntersectionObserver = undefined as unknown as typeof IntersectionObserver;

    const { getByTestId } = render(
      <MemoryRouter>
        <section data-testid="section">Content</section>
        <SectionTransitions />
      </MemoryRouter>,
    );

    await waitFor(() => expect(getByTestId("section")).toHaveClass("is-visible"));
  });

  it("never marks #hero for section transition hiding to guarantee immediate above-the-fold render", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <section id="hero" data-testid="hero-section">Hero</section>
        <section data-testid="other-section">Other</section>
        <SectionTransitions />
      </MemoryRouter>,
    );

    const hero = getByTestId("hero-section");
    const other = getByTestId("other-section");

    await waitFor(() => {
      expect(hero).not.toHaveAttribute("data-section-transition");
      expect(other).toHaveAttribute("data-section-transition", "true");
    });
  });
});

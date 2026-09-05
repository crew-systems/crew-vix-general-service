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
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(secondSection).toHaveClass("is-visible");
    expect(unobserve).toHaveBeenCalledWith(secondSection);
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

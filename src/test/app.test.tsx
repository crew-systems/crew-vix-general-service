import React from "react";
import { describe, it, expect, beforeAll } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

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
  });

  it("opens estimate modal on clicking Free Estimate button without crashing", () => {
    const { container, getAllByText } = render(<App />);
    const buttons = getAllByText("Free Estimate");
    expect(buttons.length).toBeGreaterThan(0);
    fireEvent.click(buttons[0]);
    expect(container.innerHTML).not.toContain("An unexpected error occurred");
    expect(container.querySelector("#inline-ZPe9ADAkmygEVDdixGlE-modal")).not.toBeNull();
  });
});

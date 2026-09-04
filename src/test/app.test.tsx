import React from "react";
import { describe, it, expect, beforeAll } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("App Render Test", () => {
  beforeAll(() => {
    // Mock browser APIs not present in jsdom
    global.IntersectionObserver = class {
      root = null;
      rootMargin = "";
      thresholds = [];
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() { return []; }
    } as any;

    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as any;

    window.scrollTo = () => {};
  });

  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
    expect(container.innerHTML).not.toBe("");
  });
});

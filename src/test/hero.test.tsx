import React from "react";
import { render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Hero } from "../components/Hero";

describe("Hero", () => {
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it("still renders the background video when the OS asks for reduced motion", () => {
    // Windows reports prefers-reduced-motion whenever animation effects are
    // turned off, which previously left those PCs on a still image.
    window.matchMedia = ((query: string) => ({
      ...originalMatchMedia(query),
      matches: query.includes("prefers-reduced-motion"),
    })) as typeof window.matchMedia;

    const { container } = render(<Hero onOpenEstimate={() => {}} />);

    expect(container.querySelector("#hero video")).not.toBeNull();
  });
});

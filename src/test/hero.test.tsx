import React from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Hero } from "../components/Hero";

describe("Hero", () => {
  const originalMatchMedia = window.matchMedia;
  const originalPlay = HTMLMediaElement.prototype.play;

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    Object.defineProperty(HTMLMediaElement.prototype, "play", {
      configurable: true,
      value: originalPlay,
    });
  });

  it("hides the video behind its poster while autoplay is blocked, so iOS never shows a play button", async () => {
    let allowPlayback = false;
    Object.defineProperty(HTMLMediaElement.prototype, "play", {
      configurable: true,
      value: () =>
        allowPlayback
          ? Promise.resolve()
          : Promise.reject(new DOMException("blocked", "NotAllowedError")),
    });

    const { container } = render(<Hero onOpenEstimate={() => {}} />);
    const video = container.querySelector("#hero video") as HTMLVideoElement;
    const poster = container.querySelector("#hero img") as HTMLImageElement;

    expect(poster).toHaveAttribute("src", video.getAttribute("poster"));
    await waitFor(() => expect(video).toHaveClass("opacity-0"));

    // The visitor taps the page: playback is allowed and the video returns.
    allowPlayback = true;
    fireEvent.touchEnd(window);
    act(() => {
      video.dispatchEvent(new Event("playing"));
    });

    expect(video).not.toHaveClass("opacity-0");
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

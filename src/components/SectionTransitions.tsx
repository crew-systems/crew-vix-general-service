import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const SECTION_SELECTOR =
  'section:not([data-section-transition="off"])';
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const isVisibleColor = (color: string) =>
  color !== "transparent" &&
  color !== "rgba(0, 0, 0, 0)" &&
  color !== "rgba(0,0,0,0)";

/**
 * Adds progressive-enhancement transitions to the existing semantic sections.
 * Keeping this behavior here avoids adding layout wrappers to every page.
 */
export const SectionTransitions = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(SECTION_SELECTOR),
    );
    const prefersReducedMotion = window.matchMedia(
      REDUCED_MOTION_QUERY,
    ).matches;

    sections.forEach((section, index) => {
      section.dataset.sectionTransition = "true";

      if (index > 0) {
        const previousSection = sections[index - 1];
        const previousBackground = getComputedStyle(
          previousSection,
        ).backgroundColor;
        const currentBackground = getComputedStyle(section).backgroundColor;

        section.dataset.sectionDivider = "true";

        if (
          previousBackground !== currentBackground &&
          isVisibleColor(previousBackground) &&
          isVisibleColor(currentBackground)
        ) {
          section.dataset.sectionBlend = "true";
          section.style.setProperty(
            "--section-blend-from",
            previousBackground,
          );
        }
      }
    });

    if (
      prefersReducedMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      sections.forEach((section) => section.classList.add("is-visible"));

      return () => {
        sections.forEach((section) => {
          section.classList.remove("is-visible");
          section.removeAttribute("data-section-transition");
          section.removeAttribute("data-section-divider");
          section.removeAttribute("data-section-blend");
          section.style.removeProperty("--section-blend-from");
        });
      };
    }

    document.documentElement.classList.add("section-transitions-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target as HTMLElement;
          section.classList.add("is-visible");
          observer.unobserve(section);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("section-transitions-ready");
      sections.forEach((section) => {
        section.classList.remove("is-visible");
        section.removeAttribute("data-section-transition");
        section.removeAttribute("data-section-divider");
        section.removeAttribute("data-section-blend");
        section.style.removeProperty("--section-blend-from");
      });
    };
  }, [pathname]);

  return null;
};

import React, { useEffect, useRef } from "react";
import { Star, Shield, ArrowRight, Hammer } from "lucide-react";
import { COMPANY_INFO, IMAGES } from "../data/landscapingData";

interface HeroProps {
  onOpenEstimate: () => void;
}

// The mobile files are a 720x720 center crop: portrait phones only show the
// middle of a 16:9 frame anyway.
const HERO_MEDIA = {
  desktopVideo: "/videos/vix-home-loop-desktop.mp4",
  mobileVideo: "/videos/vix-home-loop-mobile.mp4",
};

// Keep in sync with the video preload links in index.html.
const DESKTOP_MEDIA_QUERY = "(min-width: 768px), (orientation: landscape)";

const HERO_MEDIA_CLASS =
  "absolute inset-0 h-full w-full scale-105 object-cover object-center brightness-[0.95] contrast-[1.02]";

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      if (document.hidden || !video.paused) return;
      video.play()?.catch(() => {
        // Autoplay can be retried after the visitor's first interaction.
      });
    };

    // React only sets `muted` as a property; iOS checks it before autoplaying.
    video.muted = true;
    video.defaultMuted = true;
    play();

    // Blocked autoplay is allowed after a tap, and mobile browsers can leave
    // the video paused when the tab comes back to the foreground.
    window.addEventListener("touchend", play, { passive: true });
    window.addEventListener("click", play);
    document.addEventListener("visibilitychange", play);

    return () => {
      window.removeEventListener("touchend", play);
      window.removeEventListener("click", play);
      document.removeEventListener("visibilitychange", play);
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero-section relative flex items-center overflow-hidden bg-[#00153F]"
    >
      {/* Video-only background. No poster or fallback image is rendered, so
          the previous hero artwork cannot flash before the first video frame. */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className={`hero-video ${HERO_MEDIA_CLASS}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            media={DESKTOP_MEDIA_QUERY}
            src={HERO_MEDIA.desktopVideo}
            type="video/mp4"
          />
          <source src={HERO_MEDIA.mobileVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto gutter-x hero-compact hero-content">
        <div className="flex flex-col items-stretch gap-8">
          {/* Content */}
          <div className="hero-left flex-1 flex flex-col justify-center max-w-3xl">
            {/* Location Chip */}
            <div className="hero-badge inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-white/10 backdrop-blur-md border border-white/25 mb-3 sm:mb-5 text-white text-xs font-semibold tracking-wide w-fit">
              <Hammer className="w-4 h-4 text-[#C99A55]" />
              <span>END-TO-END CONSTRUCTION · SMART ENERGY</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.08] mb-5 sm:mb-6 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              FROM FOUNDATION TO A{" "}
              <span className="text-[#C99A55] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                SMARTER, ENERGY-EFFICIENT HOME.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#EDE4D6]/90 mb-6 sm:mb-8 max-w-xl leading-relaxed text-shadow-sm font-normal">
              Residential and commercial construction, remodeling, plumbing,
              HVAC, electrical, solar, EV charging, and smart automation—from
              concept to completion.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="hero-cta-row flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onOpenEstimate}
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C99A55] text-[#00153F] font-bold text-sm sm:text-base hover:bg-[#D4A55C] transition-all shadow-crisp-lg border border-[#00153F]/15 btn-sheen group/btn"
              >
                <span>PLAN YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
              <a
                href="#build-journey"
                className="hero-cta-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-bold text-sm sm:text-base hover:bg-white/20 transition-all border border-white/30 text-center backdrop-blur-sm"
              >
                SEE THE BUILD JOURNEY
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="hero-social pt-5 border-t border-white/15 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {IMAGES.avatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt="Happy VIX General Services customer"
                      className="avatar-sm w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#00153F] object-cover shadow-crisp"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#fbbc04] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]"
                      />
                    ))}
                  </div>
                  <p className="text-white text-sm font-bold">
                    {COMPANY_INFO.stats.rating} Rating from{" "}
                    {COMPANY_INFO.stats.reviewsCount} Clients
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-white/20" />

              <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                <Shield className="w-5 h-5 text-[#C99A55]" />
                <span>Licensed &amp; Insured · Residential &amp; Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

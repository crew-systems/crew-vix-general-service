import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight, MoveHorizontal } from "lucide-react";
import { IMAGES } from "../data/landscapingData";

interface BeforeAfterSectionProps {
  onOpenEstimate: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  onOpenEstimate,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  // Global mouse event listeners for smooth dragging even outside the container
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = "";
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      document.body.style.cursor = "ew-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      if (isDragging) {
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }
    };
  }, [isDragging]);

  return (
    <section
      id="before-after"
      className="section-pad bg-white overflow-hidden border-y border-[#1A2B44]/10"
    >
      <div className="container mx-auto gutter-x">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Text Content */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/15 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A55]" /> Our Work
              Process
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-5 tracking-tight">
              FROM STANDARD LIGHTING TO
              <br />
              CUSTOM LED AMBIANCE
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-7 leading-relaxed">
              See how our electricians transform a living space with custom
              accent lighting, recessed fixtures, and smart controls.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7">
              <div className="bg-[#F5F6F8] p-5 rounded-lg border border-[#1A2B44]/12">
                <h4 className="font-heading font-bold text-[#1A2B44] text-base mb-1">
                  STANDARD LIGHTING
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A functional but flat overhead fixture with no accent or
                  ambient lighting options.
                </p>
              </div>

              <div className="bg-[#C99A55]/10 p-5 rounded-lg border border-[#C99A55]/30">
                <h4 className="font-heading font-bold text-[#C99A55] text-base mb-1">
                  CUSTOM LED INSTALLATION
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Recessed lighting, warm LED accents, and a smart control panel
                  deliver a fully customized ambiance.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] font-bold text-base hover:bg-[#243652] transition-all shadow-crisp border border-[#C99A55]/25"
            >
              <span>See Our Process</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Comparison Slider */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div
              ref={containerRef}
              className="relative rounded-lg overflow-hidden shadow-crisp-lg border-2 border-[#1A2B44]/15 select-none bg-[#1A2B44]/10"
            >
              <div
                className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden"
                onMouseDown={() => {
                  setIsDragging(true);
                }}
                onTouchMove={handleTouchMove}
              >
                {/* Custom LED Lighting Image (Base Layer, full-bleed) */}
                <img
                  src={IMAGES.after}
                  alt="Custom LED accent lighting installation - VIX General Services"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
                <span className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 z-10 bg-[#C99A55] text-[#1A2B44] px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-crisp select-none pointer-events-none border border-[#1A2B44]/15 whitespace-nowrap max-w-[45%] truncate">
                  <span className="sm:hidden">AFTER</span>
                  <span className="hidden sm:inline">CUSTOM LED LIGHTING</span>
                </span>

                {/* Before Image (full-bleed, revealed via clip-path so it never re-scales) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <img
                    src={IMAGES.before}
                    alt="Standard overhead lighting before upgrade"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                  <span className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 z-10 bg-black/75 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-crisp select-none pointer-events-none border border-white/15 whitespace-nowrap max-w-[45%] truncate">
                    <span className="sm:hidden">BEFORE</span>
                    <span className="hidden sm:inline">STANDARD LIGHTING</span>
                  </span>
                </div>

                {/* Slider Handle Divider Line - interactive zone */}
                <div
                  className="absolute top-0 bottom-0 z-30 cursor-ew-resize touch-none"
                  style={{
                    left: `${sliderPosition}%`,
                    width: "40px",
                    marginLeft: "-20px",
                  }}
                >
                  {/* Visible line */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] -translate-x-1/2 pointer-events-none" />

                  {/* Draggable handle button */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-md shadow-crisp-lg flex items-center justify-center border-2 border-[#C99A55] hover:scale-110 active:scale-95 transition-transform pointer-events-auto select-none"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDragging(true);
                    }}
                  >
                    <MoveHorizontal className="w-5 h-5 text-[#1A2B44]" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-3.5 italic flex items-center justify-center gap-2">
              <MoveHorizontal className="w-4 h-4 text-[#C99A55]" /> Drag the
              slider or tap left/right to see the process stages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

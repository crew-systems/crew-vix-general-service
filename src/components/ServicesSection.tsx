import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { SERVICES } from "../data/servicesData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";

interface ServicesSectionProps {
  onOpenEstimate: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenEstimate: _onOpenEstimate,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    try {
      const snapList = typeof api.scrollSnapList === "function" ? api.scrollSnapList() : [];
      setCount(snapList.length);
      setCurrent(typeof api.selectedScrollSnap === "function" ? api.selectedScrollSnap() : 0);

      api.on?.("select", () => {
        if (typeof api.selectedScrollSnap === "function") {
          setCurrent(api.selectedScrollSnap());
        }
      });
    } catch (e) {
      console.warn("Carousel initialization check:", e);
    }
  }, [api]);

  // Autoplay: automatically advance to the next service every 5 seconds (5000ms)
  useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      try {
        if (typeof api.scrollNext === "function") {
          if (typeof api.canScrollNext === "function" && !api.canScrollNext()) {
            api.scrollTo?.(0);
          } else {
            api.scrollNext();
          }
        }
      } catch {
        // ignore safe edge-cases
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section id="services" className="section-pad bg-[#F5F6F8] overflow-hidden">
      <div className="container mx-auto gutter-x">
        {/* Section Header - no em-dash */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A55]" /> Our Specialized Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
            One Trusted Team.{" "}
            <span className="text-[#C99A55]">Complete Home Solutions.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Explore our 7 specialized services from HVAC and electrical to solar, EV charging, outdoor lighting, security cameras, and smart automation.
          </p>
        </div>

        {/* Carousel Slider with automatic scrolling, touch swipe, and mouse drag */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="w-full carousel-edge-fade"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              duration: 35,
            }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-ml-4 sm:-ml-6 py-2">
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <CarouselItem
                    key={index}
                    className="pl-4 sm:pl-6 basis-[88%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex"
                  >
                    <div
                      className={`rounded-xl overflow-hidden border shadow-crisp hover:shadow-crisp-lg transition-all duration-300 group flex flex-col w-full ${
                        service.featured
                          ? "bg-[#1A2B44] border-[#C99A55]/40"
                          : "bg-white border-[#1A2B44]/12"
                      }`}
                    >
                      {/* Image Container */}
                      <Link
                        to={`/services/${service.slug}`}
                        className="relative h-56 overflow-hidden block shrink-0"
                        aria-label={`View ${service.name}`}
                      >
                        {service.featured && (
                          <span className="absolute top-3 left-3 z-10 bg-[#C99A55] text-[#1A2B44] px-3 py-1.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider shadow-crisp leading-none">
                            Featured Service
                          </span>
                        )}
                        <img
                          src={service.heroImage}
                          alt={`${service.shortName} services - VIX General Services`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                          loading="lazy"
                        />
                        {/* Icon Badge - bottom left inside image */}
                        <div
                          className={`absolute bottom-3 left-3 w-12 h-12 rounded-full flex items-center justify-center shadow-crisp-lg border-[3px] ${
                            service.featured ? "border-[#1A2B44]" : "border-white"
                          } ${service.iconBg}`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </Link>

                      {/* Card Content */}
                      <div className="pt-5 pb-5 px-5 flex flex-col flex-1">
                        <h3
                          className={`text-xl font-heading font-extrabold mb-2 group-hover:text-[#C99A55] transition-colors ${
                            service.featured ? "text-white" : "text-[#1A2B44]"
                          }`}
                        >
                          <Link to={`/services/${service.slug}`}>
                            {service.shortName}
                          </Link>
                        </h3>
                        <p
                          className={`text-sm leading-relaxed mb-5 flex-1 line-clamp-3 ${
                            service.featured
                              ? "text-white/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {service.shortDesc}
                        </p>

                        {/* Dedicated Subpage Link */}
                        {service.featured ? (
                          <Link
                            to={`/services/${service.slug}`}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-sm hover:bg-[#D4A55C] transition-all shadow-crisp group/link"
                          >
                            <span>LEARN MORE</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        ) : (
                          <Link
                            to={`/services/${service.slug}`}
                            className="inline-flex items-center text-sm font-bold text-[#1A2B44] hover:text-[#C99A55] transition-colors group/link pt-1"
                          >
                            <span>LEARN MORE</span>
                            <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Carousel Controls: Navigation Arrows, Pagination Dots & All Services Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-4 pt-6 border-t border-[#1A2B44]/10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                try {
                  api?.scrollPrev();
                } catch {
                  // safe
                }
              }}
              className="w-8 h-8 rounded-full border border-[#1A2B44]/15 bg-white text-[#1A2B44] hover:bg-[#1A2B44] hover:text-[#EDE4D6] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#C99A55]"
              aria-label="Previous service"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.max(0, count || 0) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    try {
                      api?.scrollTo(i);
                    } catch {
                      // safe
                    }
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === i
                      ? "w-8 bg-[#C99A55]"
                      : "w-2.5 bg-[#1A2B44]/20 hover:bg-[#1A2B44]/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                try {
                  api?.scrollNext();
                } catch {
                  // safe
                }
              }}
              className="w-8 h-8 rounded-full border border-[#1A2B44]/15 bg-white text-[#1A2B44] hover:bg-[#1A2B44] hover:text-[#EDE4D6] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#C99A55]"
              aria-label="Next service"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1A2B44] hover:text-[#C99A55] transition-colors"
          >
            <span>View All 7 Services Overview</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

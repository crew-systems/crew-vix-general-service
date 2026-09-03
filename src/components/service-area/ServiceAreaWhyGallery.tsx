import React from "react";
import {
  Clock,
  MessageSquare,
  Sparkles,
  Shield,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { IMAGES, type SERVICE_AREAS } from "../../data/landscapingData";

type Area = (typeof SERVICE_AREAS)[number];

const differentiators = [
  {
    icon: Clock,
    title: "PUNCTUALITY",
  },
  {
    icon: MessageSquare,
    title: "CLEAR COMMUNICATION",
    desc: "Always know what's happening with your project.",
  },
  {
    icon: Sparkles,
    title: "PERFECT DETAILS",
    desc: "Small details make the biggest difference.",
  },
  {
    icon: Shield,
    title: "SAFE, RELIABLE WORK",
    desc: "We respect your property from start to finish.",
  },
];

interface ServiceAreaWhyGalleryProps {
  area: Area;
  onOpenEstimate: () => void;
}

export const ServiceAreaWhyGallery: React.FC<ServiceAreaWhyGalleryProps> = ({
  area,
  onOpenEstimate,
}) => {
  return (
    <>
      {/* Why Choose Us (compact) */}
      <section className="section-pad bg-[#1A2B44] text-white">
        <div className="container mx-auto gutter-x">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#C99A55] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Why {area.city} Homeowners Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#EDE4D6] mb-4 tracking-tight">
              RELIABLE, PROFESSIONAL, LOCAL
            </h2>
            <p className="text-base sm:text-lg text-[#EDE4D6]/80 leading-relaxed">
              We've built our reputation in {area.city} by being punctual,
              communicative, and delivering quality work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              const desc =
                item.title === "PUNCTUALITY"
                  ? `Reliable scheduling and professional teams in ${area.city}.`
                  : item.desc;
              return (
                <div
                  key={i}
                  className="bg-[#243652]/60 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-[#C99A55]/50 transition-all"
                >
                  <div className="w-11 h-11 rounded-md bg-[#C99A55] text-[#1A2B44] flex items-center justify-center mb-3.5 border border-white/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-heading font-extrabold text-[#EDE4D6] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#EDE4D6]/80 leading-relaxed">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-[#F5F6F8]">
        <div className="container mx-auto gutter-x">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A55]" /> Recent Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
              PROJECTS NEAR {area.city.toUpperCase()}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              A look at the quality and craftsmanship we bring to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {area.galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-crisp hover:shadow-crisp-lg transition-all duration-500 cursor-pointer group h-72 border border-[#1A2B44]/10 bg-[#1A2B44]/5"
              >
                <img
                  src={img}
                  alt={`Project ${index + 1} near ${area.city}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-pad overflow-hidden bg-[#1A2B44]">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.finalCta}
            alt={`Home services in ${area.city}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#1A2B44]/85 to-black/90" />
        </div>
        <div className="container relative z-10 mx-auto gutter-x text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/20 border border-[#C99A55]/40 text-[#C99A55] font-bold text-xs uppercase tracking-wider mb-5">
            <MapPin className="w-3.5 h-3.5" /> Serving {area.fullName}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[#EDE4D6] mb-5 tracking-tight leading-tight">
            READY TO GET STARTED IN {area.city.toUpperCase()}?
          </h2>
          <p className="text-lg sm:text-xl text-[#EDE4D6]/90 mb-9 max-w-2xl mx-auto leading-relaxed">
            Get a free, no-obligation estimate and experience the VIX difference
            in {area.city}.
          </p>
          <button
            onClick={onOpenEstimate}
            className="px-10 py-4.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-extrabold text-lg sm:text-xl hover:bg-[#D4A55C] transition-all duration-300 shadow-crisp-lg inline-flex items-center gap-3 border border-white/20"
          >
            <span>GET MY FREE ESTIMATE</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </>
  );
};

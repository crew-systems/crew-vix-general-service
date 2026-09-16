import React from "react";
import { ArrowRight, DraftingCompass, Hammer, Home, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const stages = [
  {
    step: "01",
    icon: DraftingCompass,
    title: "PLAN & FOUNDATION",
    description:
      "Scope, constructability, site conditions, foundation work, and the pathways every building system will need later.",
    image: "/images/concepts/end-to-end-construction-hero.jpg",
  },
  {
    step: "02",
    icon: Hammer,
    title: "STRUCTURE & ROUGH-IN",
    description:
      "Framing, electrical, plumbing, HVAC, low-voltage, and future-ready infrastructure coordinated before close-in.",
    image: "/images/projects/orga-new-construction-rough-in.jpg",
  },
  {
    step: "03",
    icon: Home,
    title: "INTERIORS & FINISHES",
    description:
      "Kitchens, bathrooms, living areas, trim, lighting, surfaces, and the details that make the property feel complete.",
    image: "/images/projects/jack-cove-lighting-upgrade.jpg",
  },
  {
    step: "04",
    icon: Zap,
    title: "SMART & ENERGY READY",
    description:
      "Solar, EV charging, automation, efficient equipment, security, and connected controls designed as one system.",
    image: "/images/projects/commercial-solar-energy-upgrade.jpg",
  },
];

export const BuildJourneySection: React.FC = () => {
  return (
    <section
      id="build-journey"
      className="relative overflow-hidden bg-[#101E31] text-white section-pad"
    >
      <div className="absolute inset-0 opacity-[0.07] blueprint-grid" />
      <div className="container relative z-10 mx-auto gutter-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end mb-12 lg:mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-[#C99A55] text-xs font-extrabold uppercase tracking-[0.24em] mb-4">
              <span className="h-px w-10 bg-[#C99A55]" />
              The Complete Build Journey
            </div>
            <h2 className="max-w-4xl text-3xl sm:text-4xl md:text-6xl font-heading font-extrabold leading-[1.02] tracking-tight text-[#F4EFE7]">
              ONE PROPERTY. EVERY CRITICAL PHASE.{" "}
              <span className="text-[#C99A55]">ONE ACCOUNTABLE TEAM.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-sm sm:text-base leading-relaxed text-white/70">
              VIX connects construction, interiors, essential systems, and
              smart-energy technology from the first plan through final
              commissioning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.step}
                className="group relative min-h-[410px] overflow-hidden rounded-xl border border-white/15 bg-[#172A43] shadow-2xl"
              >
                <img
                  src={stage.image}
                  alt={stage.title.toLowerCase()}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1524] via-[#0A1524]/74 to-[#0A1524]/12" />
                <div className="absolute inset-x-0 top-0 h-1 bg-[#C99A55] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative z-10 flex h-full min-h-[410px] flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-5xl font-extrabold text-white/20">
                      {stage.step}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#C99A55]/45 bg-[#C99A55]/15 text-[#E7B96F] backdrop-blur-md">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-heading font-extrabold tracking-tight text-white">
                      {stage.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-white/15 pt-7">
          <p className="max-w-2xl text-sm text-white/60">
            Need one focused trade instead of a full build? Every phase is also
            available as a specialized service.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-[#C99A55]/45 bg-[#C99A55] px-6 py-3 text-sm font-extrabold text-[#14243A] shadow-crisp transition-all hover:bg-[#D6AB6B]"
          >
            Explore Every Capability
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

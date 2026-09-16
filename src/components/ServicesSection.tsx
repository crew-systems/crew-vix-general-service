import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, CircuitBoard, Sparkles, Zap } from "lucide-react";
import { SERVICES } from "../data/servicesData";

interface ServicesSectionProps {
  onOpenEstimate: () => void;
}

const pillars = [
  {
    eyebrow: "BUILD",
    title: "Construction & Remodeling",
    description:
      "New construction, additions, full renovations, and interior transformations coordinated from structure through finish.",
    slugs: ["general-construction", "remodeling-interiors"],
    icon: Building2,
  },
  {
    eyebrow: "CONNECT",
    title: "Essential Building Systems",
    description:
      "Plumbing, electrical, and HVAC planned together so the property performs reliably behind every finished surface.",
    slugs: ["plumbing", "electrical", "hvac"],
    icon: CircuitBoard,
  },
  {
    eyebrow: "OPTIMIZE",
    title: "Smart & Energy Solutions",
    description:
      "Solar, EV charging, automation, lighting, and security that make the completed property more efficient and connected.",
    slugs: ["solar", "ev-charging", "smart-automation", "outdoor-lighting", "security-cameras"],
    icon: Zap,
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEstimate }) => (
  <section id="services" className="section-pad overflow-hidden bg-[#F5F6F8]">
    <div className="container mx-auto gutter-x">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#C99A55]/30 bg-[#C99A55]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00153F]">
          <Sparkles className="h-3.5 w-3.5 text-[#C99A55]" /> One Integrated Team
        </div>
        <h2 className="mb-4 text-3xl font-heading font-extrabold tracking-tight text-[#00153F] sm:text-4xl md:text-5xl">
          THREE CONNECTED CAPABILITIES. <span className="text-[#C99A55]">ONE COMPLETE PROJECT.</span>
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Structure, essential systems, and intelligent technology are planned as one—giving residential and commercial clients a clearer path from concept to completion.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar, index) => {
          const services = pillar.slugs
            .map((slug) => SERVICES.find((service) => service.slug === slug))
            .filter((service): service is (typeof SERVICES)[number] => Boolean(service));
          const lead = services[0];
          const Icon = pillar.icon;
          return (
            <article key={pillar.title} className="group overflow-hidden rounded-xl border border-[#00153F]/12 bg-white shadow-crisp transition-all duration-300 hover:-translate-y-1 hover:shadow-crisp-lg">
              <Link to={`/services/${lead.slug}`} className="relative block h-64 overflow-hidden">
                <img src={lead.heroImage} alt={pillar.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00153F] via-[#00153F]/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <span className="mb-2 block text-[11px] font-extrabold tracking-[0.22em] text-[#E7B96F]">0{index + 1} · {pillar.eyebrow}</span>
                    <h3 className="text-2xl font-heading font-extrabold leading-tight text-white">{pillar.title}</h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white backdrop-blur-md"><Icon className="h-5 w-5" /></span>
                </div>
              </Link>
              <div className="p-6">
                <p className="mb-5 min-h-[66px] text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                <div className="divide-y divide-[#00153F]/10 border-y border-[#00153F]/10">
                  {services.map((service) => (
                    <Link key={service.slug} to={`/services/${service.slug}`} className="flex items-center justify-between py-3 text-sm font-bold text-[#00153F] transition-colors hover:text-[#C08A3F]">
                      <span>{service.shortName}</span><ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#00153F]/10 pt-7 sm:flex-row">
        <button onClick={onOpenEstimate} className="rounded-lg bg-[#00153F] px-7 py-3.5 text-sm font-bold text-white shadow-crisp transition-colors hover:bg-[#0B2F64]">Discuss Your Project</button>
        <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-bold text-[#00153F] transition-colors hover:text-[#C99A55]">
          Explore Every Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </section>
);

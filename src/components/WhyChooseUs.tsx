import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Users,
  Home,
  Sparkles,
  Phone,
} from "lucide-react";
import { COMPANY_INFO, IMAGES } from "../data/landscapingData";

interface WhyChooseUsProps {
  onOpenEstimate: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEstimate }) => {
  const differentiators = [
    {
      icon: ShieldCheck,
      title: "TRUSTED & RELIABLE",
      description:
        "Licensed, insured, and committed to providing dependable service you can count on.",
    },
    {
      icon: Users,
      title: "EXPERT TECHNICIANS",
      description:
        "Skilled professionals delivering high-quality workmanship on every job.",
    },
    {
      icon: Home,
      title: "CUSTOMER FIRST",
      description:
        "We treat your home like our own and ensure you're 100% satisfied.",
    },
    {
      icon: Sparkles,
      title: "TRANSPARENT & FAIR PRICING",
      description:
        "Detailed estimates with no hidden costs. You approve everything before we start any work.",
    },
  ];

  return (
    <section id="why-us" className="section-pad bg-[#F5F6F8] overflow-hidden">
      <div className="container mx-auto gutter-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden shadow-crisp-lg border-2 border-white">
              <img
                src="https://vibe.filesafe.space/1787931819686809992/attachments/c38e5709-9625-4b12-ada0-cc93b51fec10.png"
                alt="VIX General Services technician team"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-5 -right-1 sm:right-5 bg-[#1A2B44] text-[#EDE4D6] p-5 rounded-lg shadow-crisp-lg border border-[#C99A55]/40 max-w-[200px]">
              <div className="text-3xl font-heading font-extrabold text-[#C99A55]">
                {COMPANY_INFO.stats.experienceYears}
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-white mt-1">
                Years of Service Excellence
              </p>
            </div>
          </div>

          {/* Right Column: Copy & Value Props */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#1A2B44]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#1A2B44]/20">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A55]" /> Trusted
              Partner
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-5 tracking-tight">
              WHY HOMEOWNERS CHOOSE VIX
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-7 leading-relaxed">
              We know the common frustrations with home service contractors:
              delays, poor communication, and rushed work. See how{" "}
              <strong>VIX General Services</strong> does it differently:
            </p>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {differentiators.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-lg border border-[#1A2B44]/12 shadow-crisp hover:border-[#C99A55]/50 hover:-translate-y-1 hover:shadow-crisp-lg transition-all duration-300 ease-out"
                  >
                    <div className="w-10 h-10 rounded-md bg-[#C99A55]/10 text-[#C99A55] flex items-center justify-center mb-3 border border-[#C99A55]/25">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-heading font-extrabold text-[#1A2B44] text-sm mb-1.5">
                      {diff.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] font-bold text-base hover:bg-[#243652] transition-all shadow-crisp border border-[#C99A55]/25 text-center"
              >
                Get Free Estimate
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[#1A2B44] font-bold text-base border border-[#1A2B44]/15 hover:bg-[#F5F6F8] transition-all text-center"
              >
                <Phone className="w-4 h-4 text-[#C99A55]" />
                <span>Call Direct: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Sparkles } from "lucide-react";
import { ServiceItem } from "../../data/servicesData";
import { COMPANY_INFO } from "../../data/landscapingData";

interface ServiceDetailIntroProps {
  service: ServiceItem;
}

export const ServiceDetailIntro: React.FC<ServiceDetailIntroProps> = ({ service }) => {
  return (
    <section className="section-pad bg-[#F5F6F8]">
      <div className="container mx-auto gutter-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Context Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider border border-[#C99A55]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A55]" />
              <span>Specialized {service.shortName} Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1A2B44] tracking-tight leading-tight">
              WHY SOUTH FLORIDA PROPERTY OWNERS CHOOSE VIX FOR {service.shortName.toUpperCase()}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {service.longDesc}
            </p>

            <div className="p-6 rounded-xl bg-white border border-[#1A2B44]/10 shadow-crisp">
              <h3 className="text-base font-heading font-bold text-[#1A2B44] mb-2">
                Engineered for South Florida Climate & Codes
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.whyChooseText}
              </p>
            </div>

            {/* 4 Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {service.benefits.map((b, idx) => {
                const BenefitIcon = b.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-white border border-[#1A2B44]/8 shadow-crisp flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-md bg-[#C99A55]/10 flex items-center justify-center text-[#C99A55] mb-3">
                      <BenefitIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-[#1A2B44] text-base mb-1">
                      {b.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Key Stats & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl overflow-hidden shadow-crisp-lg border-2 border-white">
              <img
                src={service.heroImage}
                alt={`${service.name} project in South Florida`}
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-[#1A2B44] text-[#EDE4D6] p-5 rounded-lg shadow-crisp">
                <div className="text-3xl font-heading font-extrabold text-[#C99A55]">
                  {COMPANY_INFO.stats.experienceYears}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-white mt-1">
                  Years Experience
                </p>
              </div>

              <div className="bg-[#C99A55] text-[#1A2B44] p-5 rounded-lg shadow-crisp">
                <div className="text-3xl font-heading font-extrabold">
                  {COMPANY_INFO.stats.projectsCompleted}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1A2B44]/80 mt-1">
                  Projects Done
                </p>
              </div>

              <div className="bg-white text-[#1A2B44] p-5 rounded-lg border border-[#1A2B44]/10 shadow-crisp">
                <div className="text-3xl font-heading font-extrabold text-[#1A2B44]">
                  {COMPANY_INFO.stats.rating}★
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  Average Rating
                </p>
              </div>

              <div className="bg-[#243652] text-white p-5 rounded-lg shadow-crisp">
                <div className="text-3xl font-heading font-extrabold text-[#C99A55]">
                  100%
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/80 mt-1">
                  Code Compliant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

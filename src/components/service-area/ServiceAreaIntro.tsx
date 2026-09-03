import React from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, type SERVICE_AREAS } from "../../data/landscapingData";

type Area = (typeof SERVICE_AREAS)[number];

interface ServiceAreaIntroProps {
  area: Area;
}

export const ServiceAreaIntro: React.FC<ServiceAreaIntroProps> = ({ area }) => {
  return (
    <section className="section-pad bg-[#F5F6F8]">
      <div className="container mx-auto gutter-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/20">
              <MapPin className="w-3.5 h-3.5 text-[#C99A55]" /> Serving{" "}
              {area.city}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-5 tracking-tight">
              YOUR LOCAL EXPERTS IN {area.city.toUpperCase()}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5">
              {area.longDesc}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-7">
              When you hire VIX General Services, you're working with a local
              team that knows {area.city}, local home conditions, ideal
              equipment for South Florida's climate, and regional homeowner
              preferences.
            </p>

            {/* Neighborhoods Served */}
            <div className="bg-white rounded-lg p-6 border border-[#1A2B44]/10 shadow-crisp">
              <h3 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#C99A55] mb-4">
                Neighborhoods We Serve in {area.city}
              </h3>
              <div className="flex flex-wrap gap-2">
                {area.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] text-xs font-semibold border border-[#C99A55]/20"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A55]" /> {n}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border/60">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-[#1A2B44]">Zip Codes Served:</strong>{" "}
                  {area.zipCodes.join(", ")}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats + Image */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-lg overflow-hidden shadow-crisp-lg border-2 border-white">
              <img
                src={area.galleryImages[0]}
                alt={`Service project in ${area.city}`}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-[#1A2B44] text-[#EDE4D6] p-5 rounded-lg">
                <div className="text-3xl font-heading font-extrabold text-[#C99A55]">
                  {COMPANY_INFO.stats.experienceYears}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-white mt-1">
                  Years of Experience
                </p>
              </div>
              <div className="bg-[#C99A55] text-[#1A2B44] p-5 rounded-lg">
                <div className="text-3xl font-heading font-extrabold">
                  {COMPANY_INFO.stats.projectsCompleted}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1A2B44]/80 mt-1">
                  Projects Completed
                </p>
              </div>
              <div className="bg-[#EDE4D6] text-[#1A2B44] p-5 rounded-lg border border-[#1A2B44]/10">
                <div className="text-3xl font-heading font-extrabold">
                  {COMPANY_INFO.stats.rating}★
                </div>
                <p className="text-xs font-bold uppercase tracking-wider mt-1">
                  Average Rating
                </p>
              </div>
              <div className="bg-[#243652] text-white p-5 rounded-lg">
                <div className="text-3xl font-heading font-extrabold">
                  {COMPANY_INFO.stats.reviewsCount}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#C99A55] mt-1">
                  Verified Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

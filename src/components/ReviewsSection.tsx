import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { COMPANY_INFO, IMAGES } from "../data/landscapingData";

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: "Michael R.",
      location: "Boca Raton, FL",
      service: "AC Installation & Repair",
      avatar: IMAGES.avatars[0],
      text: "VIX installed our new AC system and did an amazing job. Professional, on time and very fair pricing! Highly recommend for any HVAC work.",
    },
    {
      name: "Jessica T.",
      location: "Coral Springs, FL",
      service: "Solar Panel Installation",
      avatar: IMAGES.avatars[1],
      text: "They installed our solar panels and the savings are real. Great team and excellent communication throughout the entire project.",
    },
    {
      name: "Daniel S.",
      location: "Parkland, FL",
      service: "EV Charger Installation",
      avatar: IMAGES.avatars[2],
      text: "The EV charger installation was quick and flawless. Highly recommend VIX General Services!",
    },
  ];

  return (
    <section id="reviews" className="section-pad bg-[#F5F6F8] overflow-hidden">
      <div className="container mx-auto gutter-x">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-[#fbbc04] mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#fbbc04]" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
            5-STAR SERVICE. REAL REVIEWS.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Read real reviews from homeowners who trusted VIX General Services
            for their HVAC, electrical, solar, and EV charging projects.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-7 border border-[#1A2B44]/12 shadow-crisp hover:shadow-crisp-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1 text-[#fbbc04]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#fbbc04]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#C99A55]/20" />
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed mb-5 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Bio */}
              <div className="pt-4 border-t border-[#1A2B44]/12 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-md object-cover border-2 border-[#C99A55]"
                />
                <div>
                  <h4 className="font-heading font-extrabold text-[#1A2B44] text-sm flex items-center gap-1">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#C99A55]" />
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {review.location}
                  </p>
                  <span className="text-[11px] text-[#C99A55] font-semibold">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-10 text-center flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground">
          <span className="w-2 h-2 rounded-md bg-[#C99A55]"></span>
          <span>
            5-Star Rating: HVAC, Electrical & Solar Specialist (
            {COMPANY_INFO.stats.reviewsCount} verified reviews)
          </span>
        </div>
      </div>
    </section>
  );
};

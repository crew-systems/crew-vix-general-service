import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { ServiceItem } from "../../data/servicesData";
import { SERVICE_AREAS } from "../../data/landscapingData";

interface ServiceDetailServiceAreasProps {
  service: ServiceItem;
}

export const ServiceDetailServiceAreas: React.FC<ServiceDetailServiceAreasProps> = ({
  service,
}) => {
  return (
    <section className="section-pad bg-white border-y border-[#1A2B44]/10">
      <div className="container mx-auto gutter-x">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/20">
            <MapPin className="w-3.5 h-3.5 text-[#C99A55]" />
            <span>Regional Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
            WHERE WE PROVIDE {service.shortName.toUpperCase()} SERVICES
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our specialized crews proudly serve property owners across South Florida, including these prime service areas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              to={`/service-areas/${area.slug}`}
              className="group bg-[#F5F6F8] rounded-xl p-6 border border-[#1A2B44]/10 shadow-crisp hover:shadow-crisp-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 text-[#C99A55] mb-3">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#1A2B44]">
                  {area.fullName}
                </span>
              </div>

              <h3 className="text-xl font-heading font-extrabold text-[#1A2B44] mb-2 group-hover:text-[#C99A55] transition-colors">
                {service.shortName} in {area.city}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                Licensed {service.name.toLowerCase()} for residential and commercial properties in {area.city} and surrounding neighborhoods.
              </p>

              <div className="inline-flex items-center text-xs font-bold text-[#1A2B44] group-hover:text-[#C99A55] transition-colors pt-2 border-t border-[#1A2B44]/10">
                <span>Explore {area.city} Service Area</span>
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1A2B44] hover:text-[#C99A55] transition-colors"
          >
            <span>View All South Florida Service Areas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

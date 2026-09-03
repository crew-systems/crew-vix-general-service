import React, { useState } from "react";
import { Camera, X, ZoomIn } from "lucide-react";
import { ServiceItem } from "../../data/servicesData";
import { IMAGES } from "../../data/landscapingData";

interface ServiceDetailGalleryProps {
  service: ServiceItem;
}

export const ServiceDetailGallery: React.FC<ServiceDetailGalleryProps> = ({ service }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Strictly filter gallery items matching service categories
  const filteredItems = IMAGES.gallery.filter((item) =>
    service.galleryCategories.some(
      (cat) => cat.toLowerCase() === item.category.toLowerCase()
    )
  );

  // Never fall back to unrelated trades. If no additional gallery items exist,
  // display the service's verified showcase hero image.
  const displayItems =
    filteredItems.length > 0
      ? filteredItems
      : [
          {
            url: service.heroImage,
            title: `${service.shortName} System Installation Showcase`,
            category: service.shortName,
          },
        ];

  return (
    <section className="section-pad bg-white border-y border-[#1A2B44]/10">
      <div className="container mx-auto gutter-x">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/20">
            <Camera className="w-3.5 h-3.5 text-[#C99A55]" />
            <span>Proven Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
            RECENT {service.shortName.toUpperCase()} WORK & PROJECTS
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Take a look at real installations and service work completed by our licensed technicians across South Florida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item.url)}
              className="group relative rounded-xl overflow-hidden shadow-crisp hover:shadow-crisp-lg border border-[#1A2B44]/10 cursor-pointer bg-black/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.url}
                  alt={`${item.title} - ${service.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#C99A55] text-[#1A2B44] mb-1.5">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-[#EDE4D6] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Expanded project view"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

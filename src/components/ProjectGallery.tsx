import React, { useState } from "react";
import {
  Sparkles,
  Maximize2,
  X,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { IMAGES } from "../data/landscapingData";

interface ProjectGalleryProps {
  onOpenEstimate: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  onOpenEstimate,
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "HVAC",
    "COMMERCIAL HVAC",
    "ELECTRICAL",
    "Solar",
    "FLOORING",
    "BATHROOM",
    "KITCHEN",
    "ELECTRICAL CONTROLS",
    "COMMERCIAL INTERIOR",
  ];

  const filteredGallery =
    activeCategory === "All"
      ? IMAGES.gallery
      : IMAGES.gallery.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredGallery.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredGallery.length) % filteredGallery.length,
      );
    }
  };

  return (
    <section
      id="gallery"
      className="section-pad bg-white overflow-hidden border-t border-[#1A2B44]/10"
    >
      <div className="container mx-auto gutter-x">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A55]" /> Project
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-5 tracking-tight">
            OUR PROJECT PORTFOLIO
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Explore our recent residential projects. From HVAC installations to
            electrical panel upgrades, solar systems, and EV charging stations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md text-xs font-extrabold uppercase tracking-wider transition-all border ${
                activeCategory === cat
                  ? "bg-[#1A2B44] text-[#C99A55] border-[#C99A55]/50 shadow-crisp"
                  : "bg-[#F5F6F8] text-[#1A2B44]/80 border-[#1A2B44]/15 hover:bg-[#1A2B44]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative rounded-lg overflow-hidden shadow-crisp hover:shadow-crisp-lg transition-all duration-500 cursor-pointer group h-80 border border-[#1A2B44]/12 bg-[#1A2B44]/5"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="self-end">
                  <div className="w-10 h-10 rounded-md bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-white/25">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-[#C99A55] text-[#1A2B44] text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-[#1A2B44]/15">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-heading font-extrabold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA Bar */}
        <div className="mt-12 text-center bg-[#F5F6F8] p-8 rounded-lg border border-[#1A2B44]/12 max-w-2xl mx-auto">
          <p className="text-[#1A2B44] font-heading font-bold text-lg mb-3">
            Want Results Like These For Your Home?
          </p>
          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] font-bold text-base hover:bg-[#243652] transition-all shadow-crisp border border-[#C99A55]/25"
          >
            <span>Start Your Project Today</span>
          </button>
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/15"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 p-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/15"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 p-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/15"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] text-center p-4">
            <img
              src={filteredGallery[selectedImage].url}
              alt={filteredGallery[selectedImage].title}
              className="max-h-[70vh] w-auto mx-auto rounded-lg shadow-2xl object-contain border border-white/20"
            />
            <div className="mt-4">
              <span className="px-3 py-1 rounded-md bg-[#C99A55] text-[#1A2B44] text-xs font-bold uppercase tracking-wider border border-[#1A2B44]/15">
                {filteredGallery[selectedImage].category}
              </span>
              <h3 className="text-xl font-heading font-bold text-white mt-2">
                {filteredGallery[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

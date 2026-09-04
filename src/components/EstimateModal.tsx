import React from "react";
import { X } from "lucide-react";
import { GHLFormEmbed } from "./GHLFormEmbed";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: unknown;
}

const mapServiceKeyToLabel = (key?: unknown): string => {
  if (!key || typeof key !== "string") return "General Consultation";
  const lower = key.toLowerCase();
  if (lower.includes("light") || lower.includes("outdoor"))
    return "Outdoor & Landscape Lighting";
  if (lower.includes("camera") || lower.includes("security"))
    return "Security Camera Systems";
  if (lower.includes("auto") || lower.includes("smart"))
    return "Smart Control Automation";
  if (lower.includes("hvac") || lower.includes("cool"))
    return "HVAC & Air Conditioning";
  if (lower.includes("electr")) return "Electrical Services";
  if (lower.includes("solar")) return "Solar Energy Systems";
  if (lower.includes("ev") || lower.includes("charg"))
    return "EV Charging Stations";
  return key;
};

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  // Add/remove modal-open class on body and handle Escape key for accessibility
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.classList.remove("modal-open");
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isExplicitService =
    typeof defaultService === "string" && defaultService.trim().length > 0;
  const serviceLabel = mapServiceKeyToLabel(defaultService);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Compact Centered Modal Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Free Estimate Request"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#1A2B44]/10 overflow-hidden z-10 my-auto animate-scale-up"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-[#1A2B44]/5 hover:bg-[#1A2B44]/15 text-[#1A2B44] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C99A55] focus:ring-offset-1 border border-[#1A2B44]/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Selected Service Badge (if preselected) */}
        {isExplicitService && (
          <div className="bg-[#1A2B44] text-[#EDE4D6] px-4 py-2 text-xs font-semibold flex items-center gap-2 pr-12">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C99A55]" />
            <span>
              Selected Service: <strong className="text-white">{serviceLabel}</strong>
            </span>
          </div>
        )}

        {/* Embedded Official GoHighLevel Form */}
        <div className="p-3 sm:p-4 pt-4 sm:pt-5">
          <GHLFormEmbed instanceId="modal" minHeight={510} />
        </div>
      </div>
    </div>
  );
};

export default EstimateModal;

import React from "react";
import {
  X,
  Shield,
  Calendar,
  Phone,
  Sparkles,
  Award,
} from "lucide-react";
import { COMPANY_INFO } from "../data/landscapingData";
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
  // Add/remove modal-open class on body for chat widget hiding
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  if (!isOpen) return null;

  const isExplicitService =
    typeof defaultService === "string" && defaultService.trim().length > 0;
  const serviceLabel = mapServiceKeyToLabel(defaultService);

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#F7F8FA] rounded-t-2xl sm:rounded-2xl shadow-2xl border border-[#1A2B44]/15 overflow-hidden z-10 mt-auto sm:my-6 animate-scale-up max-h-[94vh] flex flex-col">
        {/* Header Bar */}
        <div className="bg-[#1A2B44] text-white p-5 sm:p-6 relative shrink-0 border-b border-[#C99A55]/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none border border-white/15"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#C99A55]/20 border border-[#C99A55]/40 text-[#C99A55] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Free &amp; No Obligation
            </span>
            {isExplicitService && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-[#EDE4D6] text-xs font-medium">
                Selected: <strong className="ml-1 text-white">{serviceLabel}</strong>
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#EDE4D6]">
            Get Your Free Estimate
          </h3>
          <p className="text-[#EDE4D6]/80 text-xs sm:text-sm mt-1 max-w-lg">
            Complete the form below{isExplicitService ? ` for ${serviceLabel.toLowerCase()}` : ""}{" "}
            and our South Florida team will prepare a custom quote.
          </p>
        </div>

        {/* Modal Body - scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {/* Embedded Official GoHighLevel Form */}
          <div
            id="ghl-form-embed-modal-area"
            className="w-full bg-white rounded-xl p-3 sm:p-4 border border-[#1A2B44]/10 shadow-crisp"
          >
            <GHLFormEmbed instanceId="modal" minHeight={740} />
          </div>

          {/* Direct call option if customer is in a hurry */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-[#EDE4D6]/50 border border-[#C99A55]/30 text-xs text-[#1A2B44]">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C99A55] shrink-0" />
              <span>Need immediate assistance? Speak with our team directly:</span>
            </div>
            <a
              href={`tel:+1${COMPANY_INFO.phone.replace(/\D/g, "")}`}
              className="font-bold text-[#1A2B44] hover:text-[#C99A55] transition-colors underline shrink-0"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>

          {/* Trust badges footer inside modal */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#1A2B44]/10 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-4 h-4 text-[#C99A55] mb-1" />
              <span className="text-[11px] font-medium text-muted-foreground">
                Licensed &amp; Insured
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-4 h-4 text-[#C99A55] mb-1" />
              <span className="text-[11px] font-medium text-muted-foreground">
                Fast Turnaround
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-4 h-4 text-[#C99A55] mb-1" />
              <span className="text-[11px] font-medium text-muted-foreground">
                Top Rated in FL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateModal;

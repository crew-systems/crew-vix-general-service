import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Shield,
  Calendar,
  Phone,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "../data/landscapingData";
import { postTrackingEvent } from "./tracking";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "HVAC Service",
    details: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameParts = formData.name.trim().split(" ");
    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "estimate-request-form",
      formData: {
        first_name: nameParts[0] || "",
        last_name: nameParts.slice(1).join(" ") || "",
        email: formData.email,
        phone: formData.phone.replace(/\D/g, ""),
      },
      formLabels: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: "tk_96e7ea04932943e389ea37e7410684b0",
      locationId: "6KW7de8zxEIekNQUTAUO",
      projectId: "1787931819686809992",
      sessionId: crypto.randomUUID(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
        source: "ai_studio",
        projectId: "1787931819686809992",
        formName: "VIX General Services Estimate Request",
      },
    };

    postTrackingEvent(trackingPayload, {
      customFields: {
        VFKgALshmWEGvE3Y2sDH: {
          value: formData.service,
          label: "Service Needed",
        },
        USv6sLSYKl8fhxULu77m: {
          value: formData.details,
          label: "Project Details",
        },
      },
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#F7F8FA] rounded-b-none sm:rounded-lg shadow-2xl border border-[#1A2B44]/12 border-t-0 sm:border-t overflow-hidden z-10 mt-auto sm:my-8 animate-scale-up">
        {/* Header Bar */}
        <div className="bg-[#1A2B44] text-white p-5 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none border border-white/15"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C99A55]/20 border border-[#C99A55]/40 text-[#C99A55] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Free & No Obligation
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#EDE4D6]">
            Get Your Free Estimate
          </h3>
          <p className="text-[#EDE4D6]/80 text-sm sm:text-base mt-2 max-w-lg">
            Tell us about your project and our HVAC, electrical, solar, or EV
            charging specialists will contact you to schedule your consultation.
          </p>
        </div>

        {/* Modal Body - scrollable on mobile */}
        <div className="p-5 sm:p-8 max-h-[70vh] sm:max-h-none overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#C99A55]/15 text-[#C99A55] rounded-md flex items-center justify-center mx-auto mb-4 border border-[#C99A55]/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-[#1A2B44] mb-2">
                Request Received!
              </h4>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Thank you,{" "}
                <strong className="text-foreground">
                  {formData.name || "for your interest"}
                </strong>
                ! Our team will review your details and contact you within 1
                business day.
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] font-bold text-base hover:bg-[#243652] transition-all shadow-crisp border border-[#C99A55]/25"
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              {/* Internal Form Embed Placeholder Container */}
              <div
                id="ghl-form-embed-area"
                data-embed-container="FORM EMBED AREA"
                className="w-full bg-white rounded-lg p-5 border border-[#1A2B44]/12 mb-6 shadow-crisp relative group"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1A2B44]/12">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C99A55] animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A2B44]">
                      Estimate Form
                    </span>
                  </div>
                </div>

                {/* Built-in quick inquiry form inside the embed area */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A2B44] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ex: John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#1A2B44]/15 bg-[#F7F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#C99A55]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A2B44] mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        inputMode="numeric"
                        maxLength={14}
                        placeholder="(407) 000-0000"
                        value={formData.phone}
                        onChange={(e) => {
                          const digits = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                          let formatted = digits;
                          if (digits.length > 6) {
                            formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
                          } else if (digits.length > 3) {
                            formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
                          }
                          setFormData({ ...formData, phone: formatted });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#1A2B44]/15 bg-[#F7F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#C99A55]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A2B44] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#1A2B44]/15 bg-[#F7F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#C99A55]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A2B44] mb-1">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#1A2B44]/15 bg-[#F7F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#C99A55]"
                      >
                        <option value="HVAC Service">HVAC Service</option>
                        <option value="Electrical Service">
                          Electrical Service
                        </option>
                        <option value="Solar Installation">
                          Solar Installation
                        </option>
                        <option value="EV Charging Installation">
                          EV Charging Installation
                        </option>
                        <option value="Other Service">Other Service</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A2B44] mb-1">
                      Project Details (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us what you'd like to transform..."
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#1A2B44]/15 bg-[#F7F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#C99A55] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] font-bold text-base hover:bg-[#243652] transition-all shadow-crisp border border-[#C99A55]/25 active:scale-[0.99]"
                  >
                    <span>Get Free Estimate</span>
                  </button>
                </form>
              </div>

              {/* Trust badges footer inside modal */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#1A2B44]/12 text-center">
                <div className="flex flex-col items-center">
                  <Shield className="w-4 h-4 text-[#C99A55] mb-1" />
                  <span className="text-[11px] font-medium text-muted-foreground">
                    Licensed & Insured
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Calendar className="w-4 h-4 text-[#C99A55] mb-1" />
                  <span className="text-[11px] font-medium text-muted-foreground">
                    Fast Response
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-4 h-4 text-[#C99A55] mb-1" />
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </div>

              {/* Conversion-boosting review */}
              <div className="mt-4 p-4 rounded-lg bg-[#F5EDE0]/60 border border-[#C99A55]/25 flex items-start gap-3">
                <div className="flex gap-0.5 text-[#fbbc04] text-sm shrink-0 mt-0.5">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-[#141B2D] leading-relaxed italic">
                    "VIX installed our new AC system and did an amazing job.
                    Professional, on time and very fair pricing! Best home
                    service company we've ever hired."
                  </p>
                  <p className="text-xs font-semibold text-[#1A2B44] mt-1.5">
                    Michael R., Verified Customer
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

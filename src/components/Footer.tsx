import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { COMPANY_INFO, SERVICE_AREAS } from "../data/landscapingData";
import { Logo } from "./Logo";

interface FooterProps {
  onOpenEstimate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimate }) => {
  // Chat widget is loaded in index.html with data-widget-id="6a8f24ef67138e3df68b3f12"
  // No additional injection needed here to avoid conflicts

  return (
    <footer className="bg-[#1A2B44] text-[#EDE4D6] pt-16 pb-8 border-t border-[#C99A55]/25">
      <div className="container mx-auto gutter-x">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-3 space-y-4">
            <a href="#hero" className="flex items-center group">
              <Logo size="lg" theme="dark" />
            </a>

            <p className="text-xs text-[#EDE4D6]/70 leading-relaxed max-w-sm pt-1">
              Specialists in HVAC installation and repair, electrical services,
              solar solutions, and EV charging stations. 9 years of excellence
              serving South Florida.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#C99A55]/15 hover:bg-[#C99A55]/30 flex items-center justify-center transition-colors border border-[#C99A55]/25"
              >
                <Instagram className="w-4 h-4 text-[#C99A55]" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#C99A55]/15 hover:bg-[#C99A55]/30 flex items-center justify-center transition-colors border border-[#C99A55]/25"
              >
                <Facebook className="w-4 h-4 text-[#C99A55]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#C99A55]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#EDE4D6]/75 font-medium">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#before-after"
                  className="hover:text-white transition-colors"
                >
                  Results
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-white transition-colors"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#C99A55]">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs text-[#EDE4D6]/75 font-medium">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/service-areas/${area.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {area.city}, {area.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-[#C99A55] hover:text-white transition-colors font-bold"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#C99A55]">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-[#EDE4D6]/75 font-medium">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  HVAC
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Electrical
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Solar
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  EV Charging
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Free Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#C99A55]">
              Contact & Location
            </h4>

            <div className="space-y-2.5 text-xs text-[#EDE4D6]/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C99A55] shrink-0 mt-0.5" />
                <span>Serving South Florida & Surrounding Areas</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C99A55] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-white transition-colors font-bold"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C99A55] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <p className="text-[11px] text-[#EDE4D6]/60 leading-relaxed pt-1 border-t border-white/10 mt-3 pt-3">
                Mon-Fri: 9:00 AM to 5:00 PM &middot; Licensed & Insured &middot;
                Fast Response Times
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#EDE4D6]/55 gap-3">
          <p>
            © {new Date().getFullYear()} VIX General Services. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

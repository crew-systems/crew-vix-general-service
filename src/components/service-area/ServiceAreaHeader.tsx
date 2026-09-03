import React from "react";
import { Link } from "react-router-dom";
import { Phone, X, Menu } from "lucide-react";
import { COMPANY_INFO } from "../../data/landscapingData";
import { Logo } from "../Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Projects", href: "/#gallery" },
  { name: "Reviews", href: "/#reviews" },
];

interface ServiceAreaHeaderProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (v: boolean) => void;
  onOpenEstimate: () => void;
}

export const ServiceAreaHeader: React.FC<ServiceAreaHeaderProps> = ({
  isScrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  onOpenEstimate,
}) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F6F8]/95 backdrop-blur-md shadow-crisp py-2.5 border-b border-[#1A2B44]/10"
          : "bg-gradient-to-b from-[#1A2B44]/90 via-[#1A2B44]/40 to-transparent py-5 text-white"
      }`}
    >
      <div className="container mx-auto gutter-x">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <Logo size="sm" theme={isScrolled ? "light" : "dark"} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-colors py-2 ${
                  isScrolled
                    ? "text-[#1A2B44] hover:text-[#C99A55]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                isScrolled
                  ? "text-[#1A2B44] hover:text-[#C99A55]"
                  : "text-white hover:text-[#D4A55C]"
              }`}
            >
              <div className="w-8 h-8 rounded-md bg-[#C99A55]/15 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#C99A55]" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-normal text-muted-foreground">
                  Call Now
                </span>
                <span>{COMPANY_INFO.phone}</span>
              </div>
            </a>
            <button
              onClick={onOpenEstimate}
              className="px-5 py-2.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] hover:bg-[#243652] font-bold text-sm shadow-crisp hover:shadow-crisp-lg transition-all border border-[#C99A55]/25"
            >
              Free Estimate
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2.5 rounded-lg bg-[#1A2B44] text-white hover:bg-[#C99A55] transition-colors"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-lg transition-colors ${isScrolled ? "text-[#1A2B44] hover:bg-black/5" : "text-white hover:bg-white/10"}`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F6F8] border-b border-[#1A2B44]/10 shadow-crisp-lg py-5 px-5">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 text-base font-bold text-[#1A2B44] hover:text-[#C99A55] border-b border-border/50"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full py-3 rounded-lg bg-[#1A2B44] text-[#EDE4D6] font-bold text-center text-sm shadow-crisp"
            >
              Free Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

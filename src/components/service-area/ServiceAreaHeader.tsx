import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, X, Menu, ChevronDown } from "lucide-react";
import { COMPANY_INFO, SERVICE_AREAS } from "../../data/landscapingData";
import { SERVICES } from "../../data/servicesData";
import { Logo } from "../Logo";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
    items: [
      ...SERVICES.map((service) => ({
        name: service.name,
        href: `/services/${service.slug}`,
      })),
      { name: "View Every Service →", href: "/services" },
    ],
  },
  {
    name: "Service Areas",
    href: "/service-areas",
    hasDropdown: true,
    items: [
      ...SERVICE_AREAS.map((area) => ({
        name: `${area.city}, ${area.state}`,
        href: `/service-areas/${area.slug}`,
      })),
      { name: "View All Areas →", href: "/service-areas" },
    ],
  },
  { name: "Why Choose Us", href: "/#why-us" },
  { name: "Projects", href: "/#gallery" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/contact" },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);
  };

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

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
            {navLinks.map((link) => {
              const textClass = isScrolled
                ? "text-[#1A2B44] hover:text-[#C99A55]"
                : "text-white/90 hover:text-white";

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && openMenu(link.name)}
                  onMouseLeave={() => link.hasDropdown && scheduleClose()}
                >
                  <Link
                    to={link.href}
                    onClick={() => setOpenDropdown(null)}
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 ${textClass}`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {link.hasDropdown && (
                    <div
                      onMouseEnter={() => openMenu(link.name)}
                      className={`absolute top-full pt-2 transition-all duration-200 ${
                        link.name === "Services"
                          ? "left-1/2 w-[38rem] -translate-x-1/2"
                          : "left-0 w-72"
                      } ${
                        openDropdown === link.name
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div
                        className={`bg-[#F5F6F8] rounded-md shadow-crisp-lg border border-[#1A2B44]/12 p-2 ${
                          link.name === "Services"
                            ? "grid grid-cols-2 gap-0.5"
                            : "space-y-0.5"
                        }`}
                      >
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-3 py-2 rounded-md text-xs font-semibold text-[#1A2B44] hover:bg-[#1A2B44] hover:text-[#EDE4D6] transition-colors ${
                              link.name === "Services" &&
                              item.href === "/services"
                                ? "col-span-2 mt-1 border-t border-[#1A2B44]/10 pt-2.5"
                                : ""
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
              <div key={link.name}>
                <div className="flex items-center justify-between border-b border-border/50">
                  <Link
                    to={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setOpenDropdown(null);
                    }}
                    className="block py-2.5 text-base font-bold text-[#1A2B44] hover:text-[#C99A55] flex-1"
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name,
                        )
                      }
                      className="p-2.5 text-[#1A2B44]"
                      aria-label={`Toggle ${link.name}`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.hasDropdown && openDropdown === link.name && (
                  <div className="pl-4 py-1 space-y-0.5">
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block py-2 text-sm font-semibold text-[#C99A55] hover:text-[#1A2B44] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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

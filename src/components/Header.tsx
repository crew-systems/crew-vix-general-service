import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { COMPANY_INFO, SERVICE_AREAS } from "../data/landscapingData";
import { Logo } from "./Logo";

interface HeaderProps {
  onOpenEstimate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      items: [
        {
          name: "Outdoor & Landscape Lighting",
          href: "/services/outdoor-lighting",
        },
        {
          name: "Security Camera Systems",
          href: "/services/security-cameras",
        },
        {
          name: "Smart Control Automation",
          href: "/services/smart-automation",
        },
        { name: "Electrical Services", href: "/services/electrical" },
        { name: "HVAC & Air Conditioning", href: "/services/hvac" },
        { name: "Solar Energy Systems", href: "/services/solar" },
        { name: "EV Charging Stations", href: "/services/ev-charging" },
        { name: "View All 7 Services →", href: "/services" },
      ],
    },
    {
      name: "Service Areas",
      href: "/service-areas",
      hasDropdown: true,
      items: [
        ...SERVICE_AREAS.map((a) => ({
          name: `${a.city}, ${a.state}`,
          href: `/service-areas/${a.slug}`,
        })),
        { name: "View All Areas →", href: "/service-areas" },
      ],
    },
    { name: "Why Choose Us", href: "/#why-us" },
    { name: "Projects", href: "/#gallery" },
    { name: "Reviews", href: "/#reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-2.5 lg:py-4 text-white site-header ${
        isScrolled
          ? "bg-[#1A2B44] border-b border-[#C99A55]/25 shadow-crisp"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto gutter-x">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link
            to="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center group shrink-0"
          >
            <Logo size="lg" theme="dark" className="header-logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && openMenu(link.name)}
                onMouseLeave={() => link.hasDropdown && scheduleClose()}
              >
                {link.hasDropdown ? (
                  <div
                    className="relative flex items-center"
                    onMouseEnter={() => openMenu(link.name)}
                  >
                    <Link
                      to={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("/")) {
                          setOpenDropdown(null);
                        } else {
                          e.preventDefault();
                          setOpenDropdown(
                            openDropdown === link.name ? null : link.name,
                          );
                          const el = document.querySelector(link.href);
                          if (el)
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }
                      }}
                      className="flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 text-white/90 hover:text-white"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      onMouseEnter={() => openMenu(link.name)}
                      className={`absolute top-full left-0 w-72 pt-2 transition-all duration-200 ${
                        openDropdown === link.name
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#F5F6F8] rounded-md shadow-crisp-lg border border-[#1A2B44]/12 p-2 space-y-0.5">
                        {link.items?.map((item) =>
                          item.href.startsWith("#") ? (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenDropdown(null);
                                const el = document.querySelector(item.href);
                                if (el)
                                  el.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                              }}
                              className="block px-3 py-2 rounded-md text-xs font-semibold text-[#1A2B44] hover:bg-[#1A2B44] hover:text-[#EDE4D6] transition-colors"
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-3 py-2 rounded-md text-xs font-semibold text-[#1A2B44] hover:bg-[#1A2B44] hover:text-[#EDE4D6] transition-colors"
                            >
                              {item.name}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      if (link.href === "/#hero" && window.location.pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else if (link.href.startsWith("/#") && window.location.pathname === "/") {
                        e.preventDefault();
                        const id = link.href.replace("/#", "");
                        const el = document.getElementById(id);
                        if (el)
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }
                    }}
                    className="text-sm font-semibold transition-colors py-2 relative text-white/90 hover:text-white"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Phone Area */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 text-xs font-bold transition-colors text-white hover:text-[#D4A55C]"
            >
              <div className="w-8 h-8 rounded-md bg-[#C99A55]/15 flex items-center justify-center border border-[#C99A55]/25">
                <Phone className="w-4 h-4 text-[#C99A55]" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-normal text-white/60">
                  Call Now
                </span>
                <span>{COMPANY_INFO.phone}</span>
              </div>
            </a>

            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-sm hover:bg-[#D4A55C] transition-all shadow-crisp border border-[#1A2B44]/15"
            >
              Free Estimate
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2.5 rounded-full bg-[#C99A55] text-[#1A2B44] hover:bg-[#D4A55C] transition-colors border border-[#1A2B44]/15"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg transition-colors text-white hover:bg-white/10 border border-white/15"
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

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F6F8] border-b border-[#1A2B44]/12 shadow-crisp-lg py-5 px-5 animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="space-y-0.5">
            {navLinks.map((link) => (
              <div key={link.name}>
                <div className="flex items-center justify-between">
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      setOpenDropdown(null);
                      if (link.href === "/#hero" && window.location.pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else if (link.href.startsWith("/#") && window.location.pathname === "/") {
                        e.preventDefault();
                        const id = link.href.replace("/#", "");
                        const el = document.getElementById(id);
                        if (el)
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }
                    }}
                    className="block py-2.5 text-base font-bold text-[#1A2B44] hover:text-[#C99A55] border-b border-[#1A2B44]/12 flex-1"
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name,
                        )
                      }
                      className="p-2.5 text-[#1A2B44]"
                      aria-label={`Toggle ${link.name}`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {link.hasDropdown && openDropdown === link.name && (
                  <div className="pl-4 pb-2 space-y-0.5">
                    {link.items?.map((item) =>
                      item.href.startsWith("#") ? (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMobileMenuOpen(false);
                            setOpenDropdown(null);
                            const el = document.querySelector(item.href);
                            if (el)
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                          }}
                          className="block py-2 text-sm font-semibold text-[#C99A55] hover:text-[#1A2B44] transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
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
                      ),
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-base shadow-crisp border border-[#1A2B44]/15"
              >
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

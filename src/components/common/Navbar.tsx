import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import type { Language } from "../../types";

interface NavItem {
  label: {
    pl: string;
    en: string;
  };
  href: string;
}

interface NavbarProps {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

const navItems: NavItem[] = [
  {
    label: {
      pl: "Strona główna",
      en: "Home",
    },
    href: "/",
  },
  {
    label: {
      pl: "O nas",
      en: "About Us",
    },
    href: "/about",
  },
  {
    label: {
      pl: "Produkty",
      en: "Products",
    },
    href: "/products",
  },
  {
    label: {
      pl: "Usługi",
      en: "Services",
    },
    href: "/services",
  },
  {
    label: {
      pl: "Kontakt",
      en: "Contact",
    },
    href: "/contact",
  },
];

const mobileMenuText = {
  menu: {
    pl: "Menu",
    en: "Menu",
  },
};

export function Navbar({ currentLang, onLanguageToggle }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred_language") as Language;
    if (savedLang && savedLang !== currentLang) {
      onLanguageToggle(savedLang);
    } else if (!savedLang) {
      localStorage.setItem("preferred_language", "pl");
      onLanguageToggle("pl");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItem = ({ item }: { item: NavItem }) => {
    const isActive = location.pathname === item.href;
    return (
      <Link
        to={item.href}
        className={`relative px-4 py-2 transition-colors duration-200 ease-in-out group ${
          isScrolled ? "text-gray-900" : "text-white"
        } ${isActive ? "font-semibold" : ""}`}>
        {item.label[currentLang]}
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-current transform ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          } transition-transform duration-200 ease-in-out`}
        />
      </Link>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo
                className={`h-8 md:h-10 w-auto ${
                  isScrolled ? "" : "filter brightness-0 invert"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.label[currentLang]} item={item} />
            ))}
            <div
              className={`pl-4 border-l ${
                isScrolled ? "border-gray-200" : "border-white/20"
              }`}>
              <LanguageToggle
                currentLang={currentLang}
                onToggle={onLanguageToggle}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 ${
              isScrolled
                ? "text-gray-900 hover:bg-gray-100 focus:ring-gray-300"
                : "text-white hover:bg-white/10 focus:ring-white/30"
            }`}
            aria-label={mobileMenuText.menu[currentLang]}>
            <span className="sr-only">{mobileMenuText.menu[currentLang]}</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div
              className={`py-4 space-y-2 mt-4 rounded-b-lg ${
                isScrolled
                  ? "bg-white border-t border-gray-200"
                  : "bg-transparent"
              }`}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.label[currentLang]}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 text-base font-medium rounded-md transition-colors duration-150 ease-in-out ${
                      isScrolled
                        ? "text-gray-900 hover:bg-gray-50"
                        : "text-white hover:bg-white/10"
                    } ${isActive ? "font-semibold bg-opacity-10" : ""}`}>
                    {item.label[currentLang]}
                  </Link>
                );
              })}
              <div className="px-4 py-2">
                <LanguageToggle
                  currentLang={currentLang}
                  onToggle={onLanguageToggle}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

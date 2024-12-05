import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import type { Language } from "../../types";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
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
            className={`lg:hidden p-2 rounded-full focus:outline-none focus:ring-2 transition-colors duration-200 ${
              isScrolled
                ? "text-gray-900 hover:bg-gray-100 focus:ring-gray-300"
                : "text-white hover:bg-white/10 focus:ring-white/30"
            }`}
            aria-label={mobileMenuText.menu[currentLang]}>
            <span className="sr-only">{mobileMenuText.menu[currentLang]}</span>
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span
                className={`absolute w-5 h-0.5 transform transition-all duration-300 ease-in-out ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                } ${isMenuOpen ? "rotate-45" : "-translate-y-1"}`}
              />
              <span
                className={`absolute w-5 h-0.5 ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                } ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                } transition-opacity duration-200 ease-in-out`}
              />
              <span
                className={`absolute w-5 h-0.5 transform transition-all duration-300 ease-in-out ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                } ${isMenuOpen ? "-rotate-45" : "translate-y-1"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#0B1A45]/98 backdrop-blur-md">
              <div className="h-full overflow-y-auto">
                <motion.div className="px-4 py-6 space-y-4 flex flex-col">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <motion.div
                        key={item.label[currentLang]}
                        variants={itemVariants}>
                        <Link
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors duration-200 
                            text-white hover:bg-white/10 active:bg-white/20
                            ${isActive ? "bg-white/15" : ""}`}>
                          {item.label[currentLang]}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    variants={itemVariants}
                    className="px-4 py-3 text-white">
                    <LanguageToggle
                      currentLang={currentLang}
                      onToggle={onLanguageToggle}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

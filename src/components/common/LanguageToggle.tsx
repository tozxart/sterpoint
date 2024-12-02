import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import type { Language } from "../../types";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
  className?: string;
}

const languageConfig = {
  pl: {
    name: "PL",
    flag: "/flags/pl.svg",
    nativeName: "PL",
  },
  en: {
    name: "EN",
    flag: "/flags/gb.svg",
    nativeName: "EN",
  },
};

export function LanguageToggle({
  currentLang,
  onToggle,
  className = "",
}: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred_language") as Language;
    if (savedLang && savedLang !== currentLang) {
      onToggle(savedLang);
    }
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    localStorage.setItem("preferred_language", lang);
    onToggle(lang);
    setIsOpen(false);
  };

  // Sort languages to ensure PL is always first
  const sortedLanguages = Object.entries(languageConfig).sort(([a], [b]) =>
    a === "pl" ? -1 : b === "pl" ? 1 : 0
  );

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="language-dropdown-button"
        aria-expanded={isOpen}
        aria-haspopup="true">
        <motion.img
          src={languageConfig[currentLang].flag}
          alt={`${languageConfig[currentLang].name} flag`}
          className="language-flag"
          whileHover={{ scale: 1.1, rotate: -5 }}
        />
        <span className="text-sm font-medium">
          {languageConfig[currentLang].nativeName}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="language-dropdown-menu">
            <div className="py-1">
              {sortedLanguages.map(([lang, config]) => (
                <motion.button
                  key={lang}
                  whileHover={{ x: 4 }}
                  onClick={() => handleLanguageSelect(lang as Language)}
                  className={`language-option ${
                    currentLang === lang ? "bg-primary-50 text-primary-900" : ""
                  }`}>
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    src={config.flag}
                    alt={`${config.name} flag`}
                    className="language-flag"
                  />
                  <span>{config.name}</span>
                  {currentLang === lang && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto text-primary-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

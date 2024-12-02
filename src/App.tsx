import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { getStoredLanguage, setStoredLanguage } from "./utils/languageUtils";
import type { Language } from "./types";
import { Navbar } from "./components/common/Navbar";

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>(getStoredLanguage());

  const handleLanguageToggle = (lang: Language) => {
    setStoredLanguage(lang);
    setCurrentLang(lang);
  };

  // Initialize language on app load
  useEffect(() => {
    const savedLang = getStoredLanguage();
    if (savedLang !== currentLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              currentLang={currentLang}
              onLanguageToggle={handleLanguageToggle}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              currentLang={currentLang}
              onLanguageToggle={handleLanguageToggle}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              currentLang={currentLang}
              onLanguageToggle={handleLanguageToggle}
            />
          }
        />
        <Route
          path="/services"
          element={
            <ServicesPage
              currentLang={currentLang}
              onLanguageToggle={handleLanguageToggle}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage
              currentLang={currentLang}
              onLanguageToggle={handleLanguageToggle}
            />
          }
        />
      </Routes>
      <Navbar
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
      />
    </Router>
  );
}

export default App;

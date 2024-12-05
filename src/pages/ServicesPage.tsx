import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedButton } from "../components/common/AnimatedButton";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import type { Language } from "../types";
import { motion } from "framer-motion";
import { getAssetPath } from "../utils/assetUtils";

interface ServicesPageProps {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  benefits: string[];
}

export function ServicesPage({
  currentLang,
  onLanguageToggle,
}: ServicesPageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: processRef, inView: processInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const content = {
    pl: {
      hero: {
        title: "NASZE USŁUGI",
        subtitle: "Kompleksowe rozwiązania dla Twojego biznesu",
      },
      services: {
        title: "CO OFERUJEMY",
        description:
          "Poznaj nasze profesjonalne usługi dostosowane do Twoich potrzeb.",
        items: [
          {
            id: "vending-solutions",
            title: "Rozwiązania Vendingowe",
            description:
              "Kompleksowa obsługa automatów vendingowych z akcesoriami sportowymi.",
            features: [
              "Instalacja i konfiguracja",
              "Monitoring i zarządzanie",
              "Serwis techniczny 24/7",
              "Regularne uzupełnianie produktów",
            ],
            image: getAssetPath("images/Services/vending.jpg"),
            benefits: [
              "Zwiększenie przychodów",
              "Automatyzacja sprzedaży",
              "Dostępność 24/7",
              "Minimalne zaangażowanie personelu",
            ],
          },
          {
            id: "maintenance",
            title: "Serwis i Konserwacja",
            description:
              "Profesjonalna obsługa techniczna i konserwacja sprzętu.",
            features: [
              "Regularne przeglądy",
              "Szybkie naprawy",
              "Części zamienne",
              "Dokumentacja techniczna",
            ],
            image: getAssetPath("images/Services/Service.jpg"),
            benefits: [
              "Minimalizacja przestojów",
              "Wydłużenie żywotności sprzętu",
              "Optymalizacja kosztów",
              "Profesjonalne wsparcie",
            ],
          },
          {
            id: "consulting",
            title: "Doradztwo i Wsparcie",
            description:
              "Eksperckie doradztwo w zakresie optymalizacji biznesu.",
            features: [
              "Analiza potrzeb",
              "Planowanie rozwiązań",
              "Optymalizacja procesów",
              "Szkolenia personelu",
            ],
            image: getAssetPath("images/Services/Consulting.jpg"),
            benefits: [
              "Zwiększenie efektywności",
              "Optymalizacja kosztów",
              "Rozwój biznesu",
              "Profesjonalne wsparcie",
            ],
          },
        ] as Service[],
      },
      process: {
        title: "PROCES WSPÓŁPRACY",
        steps: [
          {
            number: "01",
            title: "Analiza Potrzeb",
            description: "Dokładna analiza potrzeb i wymagań Twojego obiektu.",
          },
          {
            number: "02",
            title: "Planowanie",
            description: "Opracowanie spersonalizowanego planu wdrożenia.",
          },
          {
            number: "03",
            title: "Implementacja",
            description: "Profesjonalne wdrożenie zaplanowanych rozwiązań.",
          },
          {
            number: "04",
            title: "Wsparcie",
            description: "Ciągłe wsparcie techniczne i biznesowe.",
          },
        ],
      },
    },
    en: {
      hero: {
        title: "OUR SERVICES",
        subtitle: "Comprehensive solutions for your business",
      },
      services: {
        title: "WHAT WE OFFER",
        description:
          "Discover our professional services tailored to your needs.",
        items: [
          {
            id: "vending-solutions",
            title: "Vending Solutions",
            description:
              "Comprehensive management of vending machines with sports accessories.",
            features: [
              "Installation and configuration",
              "Monitoring and management",
              "24/7 technical service",
              "Regular product replenishment",
            ],
            image:
              "https://topsec.fr/wp-content/uploads/2022/02/img_distributeurs_FR.png",
            benefits: [
              "Revenue increase",
              "Sales automation",
              "24/7 availability",
              "Minimal staff involvement",
            ],
          },
          {
            id: "maintenance",
            title: "Service & Maintenance",
            description:
              "Professional technical service and equipment maintenance.",
            features: [
              "Regular inspections",
              "Quick repairs",
              "Spare parts",
              "Technical documentation",
            ],
            image: getAssetPath("images/Services/Service.jpg"),
            benefits: [
              "Downtime minimization",
              "Extended equipment life",
              "Cost optimization",
              "Professional support",
            ],
          },
          {
            id: "consulting",
            title: "Consulting & Support",
            description: "Expert consulting in business optimization.",
            features: [
              "Needs analysis",
              "Solution planning",
              "Process optimization",
              "Staff training",
            ],
            image: getAssetPath("images/Services/Consulting.jpg"),
            benefits: [
              "Increased efficiency",
              "Cost optimization",
              "Business development",
              "Professional support",
            ],
          },
        ] as Service[],
      },
      process: {
        title: "COLLABORATION PROCESS",
        steps: [
          {
            number: "01",
            title: "Needs Analysis",
            description:
              "Thorough analysis of your facility's needs and requirements.",
          },
          {
            number: "02",
            title: "Planning",
            description: "Development of a personalized implementation plan.",
          },
          {
            number: "03",
            title: "Implementation",
            description: "Professional implementation of planned solutions.",
          },
          {
            number: "04",
            title: "Support",
            description: "Continuous technical and business support.",
          },
        ],
      },
    },
  };

  return (
    <>
      <Navbar currentLang={currentLang} onLanguageToggle={onLanguageToggle} />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://topsec.fr/wp-content/uploads/elementor/thumbs/header-groupe_exper-3-pwjb8vvik4tip8nv9h38agshjv2sdmh0ugn5qz0fn4.jpg"
              alt="Services Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>
          <div
            ref={heroRef}
            className={`relative z-10 h-full flex items-center justify-center text-center px-4 ${
              heroInView ? "animate-fade-in" : ""
            }`}>
            <div className="max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6">
                {content[currentLang].hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90">
                {content[currentLang].hero.subtitle}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-20 bg-gray-50" ref={servicesRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {content[currentLang].services.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {content[currentLang].services.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {content[currentLang].services.items.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <div className="relative overflow-hidden h-64 bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6 flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {currentLang === "pl" ? "Funkcje:" : "Features:"}
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {currentLang === "pl" ? "Korzyści:" : "Benefits:"}
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4"
                              />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <AnimatedButton
                        href="/contact"
                        text={currentLang === "pl" ? "Kontakt" : "Contact Us"}
                        variant="primary"
                        className="w-full justify-center text-base font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white" ref={processRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {content[currentLang].process.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content[currentLang].process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="process-step">
                  <div className="text-4xl font-bold text-primary-600 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer currentLang={currentLang} />
    </>
  );
}

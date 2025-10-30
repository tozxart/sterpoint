import React from "react";
import { useInView } from "react-intersection-observer";
import { Navbar } from "../../components/common/Navbar";
import { Footer } from "../../components/common/Footer";
import type { Language } from "../../types";
import { motion } from "framer-motion";
import { getAssetPath } from "../../utils/assetUtils";

interface TennisPadelPageProps {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

export function TennisPadelPage({
  currentLang,
  onLanguageToggle,
}: TennisPadelPageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const content = {
    pl: {
      hero: {
        title: "TENIS I PADEL",
        subtitle: "Profesjonalny sprzęt dla graczy",
      },
      description:
        "Oferujemy szeroki wybór profesjonalnego sprzętu do tenisa i padla, który spełnia najwyższe standardy jakości. Nasze produkty są idealne dla klubów sportowych, kortów i szkół tenisa. Wyposażamy kluby oraz indywidualnych klientów w sprzęt tenisowy i padlowy na terenie całej Polski: Warszawa, Poznań, Łódź, Gdańsk, Wrocław i inne. Oferujemy szybką dostawę i serwis lokalny.",
      features: [
        {
          title: "Najwyższa jakość",
          description: "Sprzęt najwyższej klasy od renomowanych producentów.",
        },
        {
          title: "Profesjonalne wyposażenie",
          description:
            "Kompleksowe wyposażenie dla graczy na każdym poziomie zaawansowania.",
        },
        {
          title: "Trwałość",
          description:
            "Produkty wykonane z najlepszych materiałów, zapewniających długotrwałe użytkowanie.",
        },
        {
          title: "Innowacyjność",
          description:
            "Nowoczesne rozwiązania technologiczne poprawiające komfort gry.",
        },
      ],
    },
    en: {
      hero: {
        title: "TENNIS & PADEL",
        subtitle: "Professional equipment for players",
      },
      description:
        "We offer a wide range of professional tennis and padel equipment that meets the highest quality standards. Our products are perfect for sports clubs, courts, and tennis schools. We equip clubs and individuals with tennis and padel gear throughout Poland: Warsaw, Poznan, Lodz, Gdansk, Wroclaw and more. Fast delivery and local support.",
      features: [
        {
          title: "Highest quality",
          description: "Top-tier equipment from renowned manufacturers.",
        },
        {
          title: "Professional equipment",
          description:
            "Comprehensive equipment for players at every skill level.",
        },
        {
          title: "Durability",
          description:
            "Products made from the best materials ensuring long-term use.",
        },
        {
          title: "Innovation",
          description: "Modern technological solutions improving game comfort.",
        },
      ],
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
              src={getAssetPath("images/TennisPadel/1.png")}
              alt="Tennis and Padel Equipment"
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

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-12 text-center">
                {content[currentLang].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {content[currentLang].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Product Images Section */}
              <div className="mt-20 space-y-12">
                <h2 className="text-3xl font-bold text-center mb-12">
                  {currentLang === "pl" ? "Nasze Produkty" : "Our Products"}
                </h2>
                <div className="space-y-12 max-w-7xl mx-auto px-4 md:px-6">
                  {[2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <motion.div
                      key={num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="max-w-6xl mx-auto">
                        <img
                          src={getAssetPath(`images/TennisPadel/${num}.png`)}
                          alt={`Tennis and Padel Equipment ${num}`}
                          className="w-full h-auto"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {currentLang === "pl" ? "Najczęstsze pytania (FAQ)" : "Frequently Asked Questions (FAQ)"}
          </h2>
          <ul className="space-y-6 mb-8">
            {(currentLang === "pl"
              ? [
                  { q: "Jakiego rodzaju produkty tenisowe i padlowe oferujecie?", a: "Dostarczamy szeroki wybór rakiet, piłek, akcesoriów oraz odzieży sportowej dla każdej grupy wiekowej." },
                  { q: "Czy możliwa jest personalizacja produktów?", a: "Oferujemy usługę personalizacji wybranych produktów i akcesoriów według Twoich potrzeb." },
                  { q: "Jaki jest czas realizacji zamówienia?", a: "Standardowy czas dostawy to 3-7 dni roboczych." },
                ]
              : [
                  { q: "What tennis and padel products do you offer?", a: "We supply a wide range of rackets, balls, accessories and sportswear for every age group." },
                  { q: "Can products be customized?", a: "We offer product and accessory customization tailored to your requirements." },
                  { q: "What is the delivery timeline?", a: "Standard delivery is 3-7 working days." },
                ])
              .map((faq, idx) => (
                <li key={idx}>
                  <strong>{faq.q}</strong>
                  <p className="ml-4 text-gray-700">{faq.a}</p>
                </li>
              ))}
          </ul>
          <h2 className="text-3xl font-bold mb-6 text-center">
            {currentLang === "pl" ? "Opinie Klientów" : "Customer Testimonials"}
          </h2>
          <div className="space-y-6">
            {currentLang === "pl"
              ? [
                  "Świetnej jakości produkty i sprawna obsługa – polecam każdemu klubowi. – Marek, Łódź",
                  "Szybka realizacja zamówienia, szeroki wybór akcesoriów. – Ania, Katowice",
                ]
              : [
                  "Great quality products and efficient service – recommended for every club. – Mark, Lodz",
                  "Quick fulfillment and a wide choice of accessories. – Ann, Katowice",
                ].map((opinion, i) => (
              <blockquote key={i} className="border-l-4 border-blue-500 pl-4 text-gray-600 italic">
                {opinion}
              </blockquote>
            ))}
          </div>
        </div>
      </main>
      <Footer currentLang={currentLang} />
    </>
  );
}

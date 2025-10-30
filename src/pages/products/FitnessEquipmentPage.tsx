import React from "react";
import { useInView } from "react-intersection-observer";
import { Navbar } from "../../components/common/Navbar";
import { Footer } from "../../components/common/Footer";
import type { Language } from "../../types";
import { motion } from "framer-motion";
import { getAssetPath } from "../../utils/assetUtils";

interface FitnessEquipmentPageProps {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

export function FitnessEquipmentPage({
  currentLang,
  onLanguageToggle,
}: FitnessEquipmentPageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const content = {
    pl: {
      hero: {
        title: "SPRZĘT FITNESS",
        subtitle: "Profesjonalny sprzęt do Twojej siłowni",
      },
      description:
        "Oferujemy szeroki wybór profesjonalnego sprzętu fitness, który spełnia najwyższe standardy jakości i bezpieczeństwa. Nasze produkty są idealne dla siłowni, klubów fitness i obiektów sportowych. Dostarczamy sprzęt fitness i akcesoria treningowe w całej Polsce – Warszawa, Poznań, Wrocław, Kraków, Gdańsk i inne miasta. Nasz serwis obejmuje montaż oraz wsparcie lokalne.",
      features: [
        {
          title: "Profesjonalna jakość",
          description:
            "Sprzęt najwyższej klasy, zaprojektowany dla profesjonalnych obiektów sportowych.",
        },
        {
          title: "Bezpieczeństwo użytkowania",
          description:
            "Wszystkie urządzenia spełniają rygorystyczne normy bezpieczeństwa.",
        },
        {
          title: "Trwałość",
          description:
            "Wykonane z wysokiej jakości materiałów, zapewniających długotrwałe użytkowanie.",
        },
        {
          title: "Ergonomia",
          description:
            "Sprzęt zaprojektowany z myślą o komforcie i efektywności treningu.",
        },
      ],
    },
    en: {
      hero: {
        title: "FITNESS EQUIPMENT",
        subtitle: "Professional equipment for your gym",
      },
      description:
        "We offer a wide range of professional fitness equipment that meets the highest quality and safety standards. Our products are perfect for gyms, fitness clubs, and sports facilities. Fitness equipment delivered anywhere in Poland – Warsaw, Poznan, Wroclaw, Cracow, Gdansk, and more. Local installation and nationwide support.",
      features: [
        {
          title: "Professional quality",
          description:
            "Top-tier equipment designed for professional sports facilities.",
        },
        {
          title: "Safety in use",
          description: "All equipment meets rigorous safety standards.",
        },
        {
          title: "Durability",
          description:
            "Made from high-quality materials ensuring long-term use.",
        },
        {
          title: "Ergonomics",
          description:
            "Equipment designed for comfort and training efficiency.",
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
              src={getAssetPath("images/FitnessEquipment/1.png")}
              alt="Fitness Equipment"
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
                  {[2, 3, 4, 5, 6].map((num) => (
                    <motion.div
                      key={num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="max-w-6xl mx-auto">
                        <img
                          src={getAssetPath(
                            `images/FitnessEquipment/${num}.png`
                          )}
                          alt={`Fitness Equipment ${num}`}
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
                  { q: "Z jakich materiałów wykonany jest sprzęt fitness?", a: "Wszystkie urządzenia wykonane są z wysokiej klasy materiałów zapewniających wieloletnią trwałość." },
                  { q: "Czy sprzęt posiada gwarancję?", a: "Tak, udzielamy pełnej gwarancji oraz oferujemy serwis gwarancyjny i pogwarancyjny." },
                  { q: "Jak wygląda dostawa i montaż sprzętu?", a: "Zapewniamy szybki transport oraz fachowy montaż w Twoim obiekcie." },
                ]
              : [
                  { q: "What materials are used for the fitness equipment?", a: "All devices are built using high-grade materials for long-term durability." },
                  { q: "Is the equipment covered by a warranty?", a: "Yes, we provide full warranty and both warranty and post-warranty support." },
                  { q: "How does delivery and installation work?", a: "We ensure prompt delivery and professional assembly at your site." },
                ]
            ).map((faq, idx) => (
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
                  "Sprzęt fitness jest solidny, a obsługa bardzo profesjonalna. – Karolina, Gdańsk",
                  "Montaż przebiegł sprawnie, a użytkownicy są bardzo zadowoleni. – Rafał, Warszawa",
                ]
              : [
                  "The fitness equipment is robust and the staff is very professional. – Caroline, Gdansk",
                  "Installation went smoothly and our users are very satisfied. – Raphael, Warsaw",
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

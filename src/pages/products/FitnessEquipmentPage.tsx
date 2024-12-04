import React from "react";
import { useInView } from "react-intersection-observer";
import { Navbar } from "../../components/common/Navbar";
import { Footer } from "../../components/common/Footer";
import type { Language } from "../../types";
import { motion } from "framer-motion";

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
        "Oferujemy szeroki wybór profesjonalnego sprzętu fitness, który spełnia najwyższe standardy jakości i bezpieczeństwa. Nasze produkty są idealne dla siłowni, klubów fitness i obiektów sportowych.",
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
        "We offer a wide range of professional fitness equipment that meets the highest quality and safety standards. Our products are perfect for gyms, fitness clubs, and sports facilities.",
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
              src="/images/FitnessEquipment/1.png"
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
                          src={`/images/FitnessEquipment/${num}.png`}
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
      </main>
      <Footer currentLang={currentLang} />
    </>
  );
}

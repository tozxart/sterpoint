import React from "react";
import { useInView } from "react-intersection-observer";
import { Navbar } from "../../components/common/Navbar";
import { Footer } from "../../components/common/Footer";
import type { Language } from "../../types";
import { motion } from "framer-motion";
import { getAssetPath } from "../../utils/assetUtils";

interface SwimmingAccessoriesPageProps {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

export function SwimmingAccessoriesPage({
  currentLang,
  onLanguageToggle,
}: SwimmingAccessoriesPageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const content = {
    pl: {
      hero: {
        title: "AKCESORIA PŁYWACKIE",
        subtitle: "Profesjonalny sprzęt dla Twojego obiektu",
      },
      description:
        "Oferujemy szeroki wybór profesjonalnych akcesoriów pływackich, które spełniają najwyższe standardy jakości i bezpieczeństwa. Nasze produkty są idealne dla basenów publicznych, klubów sportowych i szkół pływania.",
      features: [
        {
          title: "Wysokiej jakości materiały",
          description:
            "Wszystkie nasze produkty są wykonane z najwyższej jakości materiałów.",
        },
        {
          title: "Zgodność z normami bezpieczeństwa",
          description:
            "Spełniamy wszystkie wymagane normy i standardy bezpieczeństwa.",
        },
        {
          title: "Trwałość i niezawodność",
          description:
            "Nasze produkty są zaprojektowane z myślą o długotrwałym użytkowaniu.",
        },
        {
          title: "Łatwa konserwacja",
          description:
            "Produkty łatwe w czyszczeniu i konserwacji, idealne do częstego użytku.",
        },
      ],
      products: [
        "Czepki pływackie",
        "Okulary do pływania",
        "Akcesoria treningowe",
        "Sprzęt ratunkowy",
      ],
    },
    en: {
      hero: {
        title: "SWIMMING ACCESSORIES",
        subtitle: "Professional equipment for your facility",
      },
      description:
        "We offer a wide selection of professional swimming accessories that meet the highest quality and safety standards. Our products are perfect for public pools, sports clubs, and swimming schools.",
      features: [
        {
          title: "High-quality materials",
          description:
            "All our products are made with premium quality materials.",
        },
        {
          title: "Safety standards compliant",
          description: "We meet all required safety norms and standards.",
        },
        {
          title: "Durability and reliability",
          description: "Our products are designed for long-term use.",
        },
        {
          title: "Easy maintenance",
          description:
            "Products are easy to clean and maintain, perfect for frequent use.",
        },
      ],
      products: [
        "Swimming caps",
        "Swimming goggles",
        "Training accessories",
        "Safety equipment",
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
              src={getAssetPath("SwimmingAccessories/9.png")}
              alt="Swimming Accessories"
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

              <div className="bg-gray-50 rounded-lg p-8 mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {currentLang === "pl"
                    ? "Dostępne produkty"
                    : "Available Products"}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {content[currentLang].products.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-gray-800">{product}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Images Section */}
        <div className="mt-20 space-y-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentLang === "pl" ? "Nasze Produkty" : "Our Products"}
          </h2>
          <div className="space-y-12 max-w-6xl mx-auto px-4 md:px-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="max-w-5xl mx-auto">
                  <img
                    src={getAssetPath(`SwimmingAccessories/${num}.png`)}
                    alt={`Swimming Product ${num}`}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer currentLang={currentLang} />
    </>
  );
}

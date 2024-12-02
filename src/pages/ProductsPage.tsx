import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedButton } from "../components/common/AnimatedButton";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import type { Language } from "../types";
import { motion } from "framer-motion";

interface ProductsPageProps {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  category: string;
}

export function ProductsPage({
  currentLang,
  onLanguageToggle,
}: ProductsPageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: productsRef, inView: productsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const content = {
    pl: {
      hero: {
        title: "NASZE PRODUKTY",
        subtitle: "Innowacyjne rozwiązania dla Twojego obiektu",
      },
      categories: {
        title: "KATEGORIE PRODUKTÓW",
        description:
          "Odkryj naszą szeroką gamę produktów dostosowanych do Twoich potrzeb.",
      },
      catalogs: {
        title: "KATALOGI PRODUKTÓW",
        general: "Katalog ogólny produktów",
        vendingTypes: "Typy automatów vendingowych",
        downloadBtn: "Pobierz katalog",
      },
      products: [
        {
          id: "vending-machines",
          title: "Automaty Vendingowe",
          description:
            "Nowoczesne automaty z akcesoriami sportowymi dostępne 24/7. Różne typy automatów dostosowane do Twoich potrzeb.",
          features: [
            "Płatności bezgotówkowe",
            "System monitorowania zapasów",
            "Zdalna obsługa",
            "Customizacja produktów",
            "Różne typy automatów",
            "Pełna obsługa serwisowa",
          ],
          image:
            "https://topsec.fr/wp-content/uploads/2022/02/img_distributeurs_FR.png",
          category: "vending",
        },
        {
          id: "swimming",
          title: "Akcesoria Pływackie",
          description: "Profesjonalny sprzęt i akcesoria do pływania.",
          features: [
            "Czepki i okulary",
            "Ręczniki",
            "Akcesoria treningowe",
            "Stroje kąpielowe",
          ],
          image: "https://topsec.fr/wp-content/uploads/2022/02/img_piscine.jpg",
          category: "swimming",
        },
        {
          id: "fitness",
          title: "Sprzęt Fitness",
          description: "Wysokiej jakości akcesoria do ćwiczeń i treningu.",
          features: [
            "Maty do ćwiczeń",
            "Akcesoria treningowe",
            "Odzież sportowa",
            "Suplementy",
          ],
          image: "https://topsec.fr/wp-content/uploads/2022/02/img_fitness.jpg",
          category: "fitness",
        },
        {
          id: "tennis-padel",
          title: "Tenis i Padel",
          description: "Profesjonalny sprzęt i akcesoria do tenisa i padla.",
          features: [
            "Rakiety tenisowe i padlowe",
            "Piłki do gry",
            "Akcesoria treningowe",
            "Odzież sportowa",
            "Obuwie specjalistyczne",
            "Wyposażenie kortów",
          ],
          image: "/images/products/tennis-padel.jpg",
          category: "tennis",
        },
      ] as Product[],
    },
    en: {
      hero: {
        title: "OUR PRODUCTS",
        subtitle: "Innovative solutions for your facility",
      },
      categories: {
        title: "PRODUCT CATEGORIES",
        description:
          "Discover our wide range of products tailored to your needs.",
      },
      catalogs: {
        title: "PRODUCT CATALOGS",
        general: "General Product Catalog",
        vendingTypes: "Vending Machine Types",
        downloadBtn: "Download Catalog",
      },
      products: [
        {
          id: "vending-machines",
          title: "Vending Machines",
          description:
            "Modern vending machines with sports accessories available 24/7. Various types of machines tailored to your needs.",
          features: [
            "Cashless payments",
            "Stock monitoring system",
            "Remote management",
            "Product customization",
            "Various machine types",
            "Full service support",
          ],
          image:
            "https://topsec.fr/wp-content/uploads/2022/02/img_distributeurs_FR.png",
          category: "vending",
        },
        {
          id: "swimming",
          title: "Swimming Accessories",
          description: "Professional swimming equipment and accessories.",
          features: [
            "Caps and goggles",
            "Towels",
            "Training accessories",
            "Swimwear",
          ],
          image: "https://topsec.fr/wp-content/uploads/2022/02/img_piscine.jpg",
          category: "swimming",
        },
        {
          id: "fitness",
          title: "Fitness Equipment",
          description: "High-quality exercise and training accessories.",
          features: [
            "Exercise mats",
            "Training accessories",
            "Sports clothing",
            "Supplements",
          ],
          image: "https://topsec.fr/wp-content/uploads/2022/02/img_fitness.jpg",
          category: "fitness",
        },
        {
          id: "tennis-padel",
          title: "Tennis and Padel",
          description:
            "Professional equipment and accessories for tennis and padel.",
          features: [
            "Tennis and padel rackets",
            "Game balls",
            "Training accessories",
            "Sports clothing",
            "Specialized footwear",
            "Court equipment",
          ],
          image: "/images/products/tennis-padel.jpg",
          category: "tennis",
        },
      ] as Product[],
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
              alt="Products Hero"
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

        {/* Catalogs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {content[currentLang].catalogs.title}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* General Catalog */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={productsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {content[currentLang].catalogs.general}
                </h3>
                <a
                  href="/catalogs/general-product-catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {content[currentLang].catalogs.downloadBtn}
                </a>
              </motion.div>

              {/* Vending Machines Catalog */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={productsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {content[currentLang].catalogs.vendingTypes}
                </h3>
                <a
                  href="/catalogs/vending-machines-types.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {content[currentLang].catalogs.downloadBtn}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gray-50" ref={productsRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {content[currentLang].categories.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {content[currentLang].categories.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content[currentLang].products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={productsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="product-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {product.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-gray-600 text-sm">
                            <svg
                              className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
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
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                      <AnimatedButton
                        href={`/products/${product.id}`}
                        text={
                          currentLang === "pl"
                            ? "Dowiedz się więcej"
                            : "Learn More"
                        }
                        variant="primary"
                        className="w-full text-center text-sm py-2"
                      />
                    </div>
                  </div>
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

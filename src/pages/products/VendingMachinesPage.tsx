import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedButton } from "../../components/common/AnimatedButton";
import { Navbar } from "../../components/common/Navbar";
import { Footer } from "../../components/common/Footer";
import type { Language } from "../../types";
import { motion } from "framer-motion";
import { getAssetPath } from "../../utils/assetUtils";

interface VendingMachinesPageProps {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

interface MachineSection {
  title: string;
  items: string[];
}

interface MachineDescription {
  title: string;
  sections: MachineSection[];
}

interface Machine {
  image: string;
  id: number;
  name: {
    [key in Language]: string;
  };
  description: {
    [key in Language]: MachineDescription;
  };
}

export function VendingMachinesPage({
  currentLang,
  onLanguageToggle,
}: VendingMachinesPageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: typesRef } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const machineTypes: Machine[] = [
    {
      image: "TYPY_AUTOMATÓW_TOPSEC-2.png",
      id: 2,
      name: {
        pl: "Basen",
        en: "Swimming Pool",
      },
      description: {
        pl: {
          title: "PRODUKTY NA BASEN",
          sections: [
            {
              title: "",
              items: [
                "Czepki pływackie",
                "Okulary pływackie",
                "Stroje kąpielowe",
                "Ręczniki",
                "Pieluszki do pływania dla niemowląt",
                "Rękawki do pływania",
                "Klipsy na nos, zatyczki do uszu do pływania",
                "Żele pod prysznic",
              ],
            },
          ],
        },
        en: {
          title: "SWIMMING POOL PRODUCTS",
          sections: [
            {
              title: "",
              items: [
                "Swimming caps",
                "Swimming goggles",
                "Swimwear",
                "Towels",
                "Swimming diapers for infants",
                "Swimming arm bands",
                "Nose clips, ear plugs for swimming",
                "Shower gels",
              ],
            },
          ],
        },
      },
    },
    {
      image: "TYPY_AUTOMATÓW_TOPSEC-3.png",
      id: 3,
      name: {
        pl: "Fitness",
        en: "Fitness",
      },
      description: {
        pl: {
          title: "PRODUKTY NA SIŁOWNIĘ",
          sections: [
            {
              title: "",
              items: [
                "Ubiór: koszulki, legginsy, spodenki, biustonosze sportowe, skarpetki, rękawice do podnoszenia ciężarów",
                "Akcesoria na siłownię: butelki, shakery, kłódki",
                "Higiena: ręczniki, żele pod prysznic",
                "Akcesoria do telefonów: słuchawki, opaski na telefon, kable do szybkiego ładowania 3 w 1",
              ],
            },
          ],
        },
        en: {
          title: "GYM PRODUCTS",
          sections: [
            {
              title: "",
              items: [
                "Clothing: t-shirts, leggings, shorts, sports bras, socks, weight lifting gloves",
                "Gym accessories: bottles, shakers, locks",
                "Hygiene: towels, shower gels",
                "Phone accessories: headphones, phone armbands, 3-in-1 fast charging cables",
              ],
            },
          ],
        },
      },
    },
    {
      image: "TYPY_AUTOMATÓW_TOPSEC-4.png",
      id: 4,
      name: {
        pl: "Multisport",
        en: "Multisport",
      },
      description: {
        pl: {
          title: "BASEN + FITNESS",
          sections: [
            {
              title: "BASEN:",
              items: [
                "Czepki pływackie",
                "Okulary pływackie",
                "Stroje kąpielowe",
                "Ręczniki",
                "Pieluszki do pływania dla niemowląt",
                "Rękawki do pływania",
                "Klipsy na nos, zatyczki do uszu do pływania",
                "Żele pod prysznic",
              ],
            },
            {
              title: "FITNESS:",
              items: [
                "Ubiór: koszulki, legginsy, spodenki, biustonosze sportowe, skarpetki, rękawice do podnoszenia ciężarów",
                "Akcesoria na siłownię: butelki, shakery, kłódki",
                "Higiena: ręczniki, żele pod prysznic",
                "Akcesoria do telefonów: słuchawki, opaski na telefon, kable do szybkiego ładowania 3 w 1",
              ],
            },
          ],
        },
        en: {
          title: "SWIMMING POOL + FITNESS",
          sections: [
            {
              title: "SWIMMING POOL:",
              items: [
                "Swimming caps",
                "Swimming goggles",
                "Swimwear",
                "Towels",
                "Swimming diapers for infants",
                "Swimming arm bands",
                "Nose clips, ear plugs for swimming",
                "Shower gels",
              ],
            },
            {
              title: "FITNESS:",
              items: [
                "Clothing: t-shirts, leggings, shorts, sports bras, socks, weight lifting gloves",
                "Gym accessories: bottles, shakers, locks",
                "Hygiene: towels, shower gels",
                "Phone accessories: headphones, phone armbands, 3-in-1 fast charging cables",
              ],
            },
          ],
        },
      },
    },
    {
      image: "TYPY_AUTOMATÓW_TOPSEC-5.png",
      id: 5,
      name: {
        pl: "Multisport",
        en: "Multisport",
      },
      description: {
        pl: {
          title: "BASEN + FITNESS + PADEL",
          sections: [
            {
              title: "BASEN:",
              items: [
                "Czepki pływackie",
                "Okulary pływackie",
                "Stroje kąpielowe",
                "Ręczniki",
                "Pieluszki do pływania dla niemowląt",
                "Rękawki do pływania",
                "Klipsy na nos, zatyczki do uszu do pływania",
                "Żele pod prysznic",
              ],
            },
            {
              title: "FITNESS:",
              items: [
                "Ubiór: koszulki, legginsy, spodenki, biustonosze sportowe, skarpetki, rękawice do podnoszenia ciężarów",
                "Akcesoria na siłownię: butelki, shakery, kłódki",
                "Higiena: ręczniki, żele pod prysznic",
                "Akcesoria do telefonów: słuchawki, opaski na telefon, kable do szybkiego ładowania 3 w 1",
              ],
            },
            {
              title: "PADEL:",
              items: [
                "Piłki",
                "Ochraniacze na rakiety",
                "Overgripy",
                "Tłumiki drgań",
                "Opaski na nadgarstki",
                "Ręczniki",
              ],
            },
          ],
        },
        en: {
          title: "SWIMMING POOL + FITNESS + PADEL",
          sections: [
            {
              title: "SWIMMING POOL:",
              items: [
                "Swimming caps",
                "Swimming goggles",
                "Swimwear",
                "Towels",
                "Swimming diapers for infants",
                "Swimming arm bands",
                "Nose clips, ear plugs for swimming",
                "Shower gels",
              ],
            },
            {
              title: "FITNESS:",
              items: [
                "Clothing: t-shirts, leggings, shorts, sports bras, socks, weight lifting gloves",
                "Gym accessories: bottles, shakers, locks",
                "Hygiene: towels, shower gels",
                "Phone accessories: headphones, phone armbands, 3-in-1 fast charging cables",
              ],
            },
            {
              title: "PADEL:",
              items: [
                "Balls",
                "Racket protectors",
                "Overgrips",
                "Vibration dampeners",
                "Wristbands",
                "Towels",
              ],
            },
          ],
        },
      },
    },
    {
      image: "TYPY_AUTOMATÓW_TOPSEC-6.png",
      id: 6,
      name: {
        pl: "Multisport",
        en: "Multisport",
      },
      description: {
        pl: {
          title: "FITNESS + PADEL",
          sections: [
            {
              title: "FITNESS:",
              items: [
                "Ubiór: koszulki, legginsy, spodenki, biustonosze sportowe, skarpetki, rękawice do podnoszenia ciężarów",
                "Akcesoria na siłownię: butelki, shakery, kłódki",
                "Higiena: ręczniki, żele pod prysznic",
                "Akcesoria do telefonów: słuchawki, opaski na telefon, kable do szybkiego ładowania 3 w 1",
              ],
            },
            {
              title: "PADEL:",
              items: [
                "Piłki",
                "Ochraniacze na rakiety",
                "Overgripy",
                "Tłumiki drgań",
                "Opaski na nadgarstki",
                "Ręczniki",
              ],
            },
          ],
        },
        en: {
          title: "FITNESS + PADEL",
          sections: [
            {
              title: "FITNESS:",
              items: [
                "Clothing: t-shirts, leggings, shorts, sports bras, socks, weight lifting gloves",
                "Gym accessories: bottles, shakers, locks",
                "Hygiene: towels, shower gels",
                "Phone accessories: headphones, phone armbands, 3-in-1 fast charging cables",
              ],
            },
            {
              title: "PADEL:",
              items: [
                "Balls",
                "Racket protectors",
                "Overgrips",
                "Vibration dampeners",
                "Wristbands",
                "Towels",
              ],
            },
          ],
        },
      },
    },
    {
      image: "TYPY_AUTOMATÓW_TOPSEC-7.png",
      id: 7,
      name: {
        pl: "Multisport",
        en: "Multisport",
      },
      description: {
        pl: {
          title: "BASEN + FITNESS + PADEL + TENIS",
          sections: [
            {
              title: "BASEN:",
              items: [
                "Czepki pływackie",
                "Okulary pływackie",
                "Stroje kąpielowe",
                "Ręczniki",
                "Pieluszki do pływania dla niemowląt",
                "Rękawki do pływania",
                "Klipsy na nos, zatyczki do uszu do pływania",
                "Żele pod prysznic",
              ],
            },
            {
              title: "FITNESS:",
              items: [
                "Ubiór: koszulki, legginsy, spodenki, biustonosze sportowe, skarpetki, rękawice do podnoszenia ciężarów",
                "Akcesoria na siłownię: butelki, shakery, kłódki",
                "Higiena: ręczniki, żele pod prysznic",
                "Akcesoria do telefonów: słuchawki, opaski na telefon, kable do szybkiego ładowania 3 w 1",
              ],
            },
            {
              title: "PADEL I TENIS:",
              items: [
                "Piłki",
                "Ochraniacze na rakiety",
                "Overgripy",
                "Tłumiki drgań",
                "Opaski na nadgarstki",
                "Ręczniki",
              ],
            },
          ],
        },
        en: {
          title: "SWIMMING POOL + FITNESS + PADEL + TENNIS",
          sections: [
            {
              title: "SWIMMING POOL:",
              items: [
                "Swimming caps",
                "Swimming goggles",
                "Swimwear",
                "Towels",
                "Swimming diapers for infants",
                "Swimming arm bands",
                "Nose clips, ear plugs for swimming",
                "Shower gels",
              ],
            },
            {
              title: "FITNESS:",
              items: [
                "Clothing: t-shirts, leggings, shorts, sports bras, socks, weight lifting gloves",
                "Gym accessories: bottles, shakers, locks",
                "Hygiene: towels, shower gels",
                "Phone accessories: headphones, phone armbands, 3-in-1 fast charging cables",
              ],
            },
            {
              title: "PADEL AND TENNIS:",
              items: [
                "Balls",
                "Racket protectors",
                "Overgrips",
                "Vibration dampeners",
                "Wristbands",
                "Towels",
              ],
            },
          ],
        },
      },
    },
    {
      image: "TYPY_AUTOMATÓW_TOPSEC-8.png",
      id: 8,
      name: {
        pl: "Multisport",
        en: "Multisport",
      },
      description: {
        pl: {
          title: "FITNESS + PADEL + TENIS",
          sections: [
            {
              title: "FITNESS:",
              items: [
                "Ubiór: koszulki, legginsy, spodenki, biustonosze sportowe, skarpetki, rękawice do podnoszenia ciężarów",
                "Akcesoria na siłownię: butelki, shakery, kłódki",
                "Higiena: ręczniki, żele pod prysznic",
                "Akcesoria do telefonów: słuchawki, opaski na telefon, kable do szybkiego ładowania 3 w 1",
              ],
            },
            {
              title: "PADEL I TENIS:",
              items: [
                "Piłki",
                "Ochraniacze na rakiety",
                "Overgripy",
                "Tłumiki drgań",
                "Opaski na nadgarstki",
                "Ręczniki",
              ],
            },
          ],
        },
        en: {
          title: "FITNESS + PADEL + TENNIS",
          sections: [
            {
              title: "FITNESS:",
              items: [
                "Clothing: t-shirts, leggings, shorts, sports bras, socks, weight lifting gloves",
                "Gym accessories: bottles, shakers, locks",
                "Hygiene: towels, shower gels",
                "Phone accessories: headphones, phone armbands, 3-in-1 fast charging cables",
              ],
            },
            {
              title: "PADEL AND TENNIS:",
              items: [
                "Balls",
                "Racket protectors",
                "Overgrips",
                "Vibration dampeners",
                "Wristbands",
                "Towels",
              ],
            },
          ],
        },
      },
    },
  ];

  const content = {
    pl: {
      hero: {
        title: "AUTOMATY VENDINGOWE",
        subtitle: "Nowoczesne rozwiązania dostępne 24/7",
      },
      description:
        "Nasze automaty vendingowe to nowoczesne rozwiązanie zapewniające dostęp do akcesoriów sportowych przez całą dobę. Oferujemy różne typy automatów dostosowane do indywidualnych potrzeb klientów. Obsługujemy zarówno duże miasta jak Warszawa, Poznań, Kraków, Wrocław, Łódź, jak i mniejsze miejscowości w całej Polsce. Nasze automaty vendingowe znajdziesz w nowoczesnych siłowniach, basenach, klubach sportowych, szkołach i biurach. Potrzebujesz serwisu lokalnego lub instalacji automatu? Skontaktuj się z nami!",
      features: [
        {
          title: "Płatności bezgotówkowe",
          description:
            "Akceptujemy wszystkie popularne metody płatności bezgotówkowych.",
        },
        {
          title: "System monitorowania zapasów",
          description:
            "Zaawansowany system monitorujący stan produktów w czasie rzeczywistym.",
        },
        {
          title: "Zdalna obsługa",
          description:
            "Możliwość zdalnego zarządzania i monitorowania pracy automatu.",
        },
        {
          title: "Customizacja produktów",
          description: "Dostosowanie oferty produktowej do potrzeb obiektu.",
        },
        {
          title: "Różne typy automatów",
          description:
            "Szeroki wybór automatów o różnych rozmiarach i funkcjach.",
        },
        {
          title: "Pełna obsługa serwisowa",
          description:
            "Kompleksowa obsługa techniczna i serwisowa wszystkich urządzeń.",
        },
      ],
      machineTypes: {
        title: "TYPY AUTOMATÓW",
        subtitle: "Poznaj nasze różnorodne rozwiązania",
      },
      cta: "Skontaktuj się z nami",
    },
    en: {
      hero: {
        title: "VENDING MACHINES",
        subtitle: "Modern solutions available 24/7",
      },
      description:
        "Our vending machines are a modern solution providing access to sports accessories around the clock. We offer various types of machines tailored to individual customer needs. We serve all of Poland, including Warsaw, Poznan, Cracow, Wroclaw, Lodz, and more. Sterpoint vending machines are available in gyms, pools, sports clubs, schools, and offices nationwide. Need local installation or support? Contact us!",
      features: [
        {
          title: "Cashless payments",
          description: "We accept all popular cashless payment methods.",
        },
        {
          title: "Stock monitoring system",
          description:
            "Advanced system monitoring product status in real-time.",
        },
        {
          title: "Remote management",
          description:
            "Possibility of remote management and monitoring of machine operation.",
        },
        {
          title: "Product customization",
          description: "Customization of product offering to facility needs.",
        },
        {
          title: "Various machine types",
          description:
            "Wide selection of machines with different sizes and functions.",
        },
        {
          title: "Full service support",
          description:
            "Comprehensive technical and service support for all devices.",
        },
      ],
      machineTypes: {
        title: "MACHINE TYPES",
        subtitle: "Discover our diverse solutions",
      },
      cta: "Contact us",
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
              src={getAssetPath("vendingMachine/TYPY_AUTOMATÓW_TOPSEC-1.jpg")}
              alt="Vending Machines"
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
            <div className="max-w-7xl mx-auto">
              <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                {content[currentLang].description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
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

              {/* Machine Types Section */}
              <div ref={typesRef} className="mt-20">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">
                    {content[currentLang].machineTypes.title}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {content[currentLang].machineTypes.subtitle}
                  </p>
                </div>
                <div className="space-y-16">
                  {machineTypes.map((machine) => (
                    <div
                      key={machine.id}
                      className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-full md:w-1/2">
                        <img
                          src={getAssetPath(`vendingMachine/${machine.image}`)}
                          alt={`${machine.name[currentLang]} Vending Machine`}
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                      <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-block bg-red-500 text-white rounded-lg px-4 py-2">
                          {machine.name[currentLang]}
                        </div>
                        <h3 className="text-2xl font-bold">
                          {machine.description[currentLang].title}
                        </h3>
                        {machine.description[currentLang].sections.map(
                          (section, sIndex) => (
                            <div key={sIndex} className="space-y-2">
                              {section.title && (
                                <h4 className="text-xl font-semibold">
                                  {section.title}
                                </h4>
                              )}
                              <ul className="list-disc list-inside space-y-2">
                                {section.items.map((item, iIndex) => (
                                  <li key={iIndex} className="text-gray-700">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 text-center">
                <AnimatedButton
                  href="/contact"
                  text={content[currentLang].cta}
                  variant="primary"
                  className="text-lg px-8 py-4"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {currentLang === "pl"
              ? "Najczęstsze pytania (FAQ)"
              : "Frequently Asked Questions (FAQ)"}
          </h2>
          <ul className="space-y-6 mb-8">
            {(currentLang === "pl"
              ? [
                  {
                    q: "Jakie są korzyści z instalacji automatów vendingowych Sterpoint?",
                    a: "Nasze automaty zapewniają klientom całodobowy dostęp do szerokiej gamy produktów, zwiększając wygodę oraz przychody Twojego obiektu.",
                  },
                  {
                    q: "Czy mogę dostosować asortyment produktów?",
                    a: "Tak, oferujemy pełną personalizację asortymentu zgodnie z indywidualnymi potrzebami obiektu.",
                  },
                  {
                    q: "Jak wygląda serwis i konserwacja automatów?",
                    a: "Zapewniamy kompleksowy serwis techniczny oraz zdalne monitorowanie pracy automatu.",
                  },
                ]
              : [
                  {
                    q: "What are the benefits of installing Sterpoint vending machines?",
                    a: "Our machines offer customers 24/7 access to a wide range of products, increasing convenience and facility revenue.",
                  },
                  {
                    q: "Can I customize the product selection?",
                    a: "Yes, we provide full customization options tailored to your facility's needs.",
                  },
                  {
                    q: "How is the maintenance and servicing handled?",
                    a: "We provide comprehensive technical support and remote monitoring for every machine.",
                  },
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
                  "Automaty vendingowe Sterpoint doskonale sprawdziły się w naszym centrum sportowym. Klienci są zachwyceni wygodą i szeroką gamą produktów. – Marta, Warszawa",
                  "Instalacja automatów przebiegła sprawnie, serwis działa bez zarzutu. Polecam każdemu właścicielowi obiektu sportowego. – Piotr, Kraków",
                ]
              : [
                  "Sterpoint vending machines have been a great addition to our sports facility. Our clients love the convenience and product variety. – Marta, Warsaw",
                  "Installation was smooth and the support team is excellent. Highly recommended to any facility owner. – Peter, Krakow",
                ].map((opinion, i) => (
                  <blockquote
                    key={i}
                    className="border-l-4 border-blue-500 pl-4 text-gray-600 italic">
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

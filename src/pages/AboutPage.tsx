import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedButton } from "../components/common/AnimatedButton";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import type { Language } from "../types";
import { motion } from "framer-motion";

interface AboutPageProps {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

export function AboutPage({ currentLang, onLanguageToggle }: AboutPageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const content = {
    pl: {
      hero: {
        title: "O NAS",
        subtitle: "Poznaj naszą historię i wartości",
      },
      enterprise: {
        title: "ROZWIĄZANIA",
        subtitle: "BIZNESOWE",
        description:
          "Dostarczamy zintegrowane rozwiązania pod klucz, które optymalizują wydajność Twojego obiektu i zwiększają efektywność operacyjną na wszystkich poziomach usług.",
      },
      timeline: {
        items: [
          {
            title: "PROJEKTOWANIE",
            description:
              "Kroje, materiały, wzory: nasze zespoły zawsze wybierają tylko najlepsze rozwiązania przy projektowaniu produktów naszych różnych marek. Dzięki temu możesz uprawiać sport z klasą!",
          },
          {
            title: "ZAOPATRZENIE",
            description:
              "Wybieramy najbardziej efektywnych dostawców, aby w pełni spełnić Twoje oczekiwania dotyczące jakości produktów, przy coraz bardziej przystępnych cenach. Dzięki temu wszyscy wygrywają!",
          },
          {
            title: "DOSTAWA I MARKETING",
            description:
              "Od przygotowania naszych usług po ich wdrożenie w Twojej placówce, włączając logistykę i dostawę, zarządzamy każdym etapem procesu samodzielnie, aby zapewnić optymalną realizację usług. Możesz cieszyć się bezstresowym doświadczeniem!",
          },
          {
            title: "MAGAZYNOWANIE I MONITORING",
            description:
              "Nasze regionalne oddziały i spółki zależne w Europie zapewniają, że technicy TOPSEC mogą zarządzać codzienną konserwacją i dostawami, a każda placówka ma dedykowanego kierownika sektora TOPSEC. Oferujemy gwarancję spersonalizowanej obsługi klienta. I to bez robienia zamieszania!",
          },
          {
            title: "OBSŁUGA KLIENTA",
            description:
              "Dla Twojej pełnej satysfakcji i aby uwolnić Twój personel od konieczności obsługi problemów użytkowników, nasza obsługa klienta jest dostępna 24 godziny na dobę, 7 dni w tygodniu; jesteśmy zawsze gotowi odpowiedzieć na wszystkie pytania lub prośby o prace konserwacyjne na miejscu. Dostępni w każdej chwili, aby Ci doradzić!",
          },
        ],
        discover: {
          title: "ODKRYJ",
          subtitle: "NASZE RÓŻNE DOŚWIADCZENIA ZAKUPOWE",
          cta: "SKONTAKTUJ SIĘ Z NAMI",
        },
      },
      values: {
        title: "NASZE WARTOŚCI",
        items: [
          {
            title: "Innowacyjność",
            description: "Ciągłe poszukiwanie nowych rozwiązań i technologii",
          },
          {
            title: "Jakość",
            description:
              "Bezkompromisowe podejście do jakości produktów i usług",
          },
          {
            title: "Partnerstwo",
            description:
              "Budowanie długotrwałych relacji z klientami i partnerami",
          },
        ],
      },
      team: {
        title: "NASZ ZESPÓŁ",
        description:
          "Grupa pasjonatów i ekspertów, którzy tworzą innowacyjne rozwiązania dla naszych klientów.",
        cta: "Dołącz do nas",
      },
    },
    en: {
      hero: {
        title: "ABOUT US",
        subtitle: "Discover our story and values",
      },
      enterprise: {
        title: "ENTERPRISE",
        subtitle: "SOLUTIONS",
        description:
          "Delivering integrated turnkey solutions that optimize your facility's performance and enhance operational efficiency across all service levels.",
      },
      timeline: {
        items: [
          {
            title: "DESIGN",
            description:
              "Cuts, materials, designs: our teams always select only the best in designing the products of our various brands. So you get to do sport in style!",
          },
          {
            title: "SOURCING",
            description:
              "We select the most efficient suppliers to fully meet your expectations in terms of product quality, with ever more affordable prices. This makes everyone a winner!",
          },
          {
            title: "SUPPLY AND MARKETING",
            description:
              "From preparing our services to their deployment at your establishment, including logistics and delivery, we manage each step of the process ourselves to ensure optimal service delivery. You get to enjoy a stress-free experience!",
          },
          {
            title: "STOCKING AND MONITORING",
            description:
              "Our regional branches and subsidiaries in Europe ensure TOPSEC technicians can manage daily maintenance and supply, with each establishment having a dedicated TOPSEC sector head. We offer the assurance of personalised customer service. And especially without making waves!",
          },
          {
            title: "CUSTOMER SERVICE RELATIONS",
            description:
              "For your complete satisfaction and to free your staff from having to handle user issues, our customer service is available 24 hours a day, 7 days a week; we're always ready to answer all their questions or requests for maintenance work on site. Available at all times to advise you!",
          },
        ],
        discover: {
          title: "DISCOVER",
          subtitle: "OUR VARIOUS PURCHASING EXPERIENCES",
          cta: "CONTACT US",
        },
      },
      values: {
        title: "OUR VALUES",
        items: [
          {
            title: "Innovation",
            description: "Continuous pursuit of new solutions and technologies",
          },
          {
            title: "Quality",
            description:
              "Uncompromising approach to product and service quality",
          },
          {
            title: "Partnership",
            description:
              "Building lasting relationships with clients and partners",
          },
        ],
      },
      team: {
        title: "OUR TEAM",
        description:
          "A group of passionate experts creating innovative solutions for our clients.",
        cta: "Join us",
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
              alt="About Us Hero"
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

        {/* Enterprise Solutions Section */}
        <div className="holiday-village-section text-center mx-auto max-w-4xl px-4 py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-[#4B9BFF]">
              {content[currentLang].enterprise.title}
            </span>
            <br />
            <span className="text-gray-900">
              {content[currentLang].enterprise.subtitle}
            </span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {content[currentLang].enterprise.description}
          </p>
        </div>

        {/* Timeline Section */}
        <section className="elementor-section timeline-section" id="timeline">
          <div className="timeline-container">
            <div className="timeline-content">
              <div className="timeline-items">
                {content[currentLang].timeline.items.map((item, index) => (
                  <div key={index} className="timeline-item in-view">
                    {index % 2 === 0 ? (
                      <>
                        <div className="timeline-left">
                          <h2>{item.title}</h2>
                          <p>{item.description}</p>
                        </div>
                        <div className="timeline-center">
                          <div className="timeline-icon">
                            <img
                              src={`https://topsec.fr/wp-content/uploads/2022/03/${getTimelineIcon(
                                index
                              )}`}
                              alt={item.title}
                            />
                          </div>
                          <div className="timeline-line"></div>
                        </div>
                        <div className="timeline-right"></div>
                      </>
                    ) : (
                      <>
                        <div className="timeline-left"></div>
                        <div className="timeline-center">
                          <div className="timeline-icon">
                            <img
                              src={`https://topsec.fr/wp-content/uploads/2022/03/${getTimelineIcon(
                                index
                              )}`}
                              alt={item.title}
                            />
                          </div>
                          <div className="timeline-line"></div>
                        </div>
                        <div className="timeline-right">
                          <h2>{item.title}</h2>
                          <p>{item.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="discover-section">
                <h3>{content[currentLang].timeline.discover.title}</h3>
                <p>{content[currentLang].timeline.discover.subtitle}</p>
                <AnimatedButton
                  href="/contact"
                  text={content[currentLang].timeline.discover.cta}
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section py-20" ref={valuesRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                {content[currentLang].values.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content[currentLang].values.items.map(
                  (
                    value: { title: string; description: string },
                    index: number
                  ) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white" ref={teamRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {content[currentLang].team.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {content[currentLang].team.description}
              </p>
              <AnimatedButton
                href="/contact"
                text={content[currentLang].team.cta}
                variant="primary"
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer currentLang={currentLang} />
    </>
  );
}

// Helper function to get timeline icons
function getTimelineIcon(index: number): string {
  const icons = [
    "ampoule_1.png",
    "livraison_.png",
    "gps_.png",
    "carton_.png",
    "sav_.png",
  ];
  return icons[index];
}

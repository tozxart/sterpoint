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

  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.2,
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
      mission: {
        title: "NASZA MISJA",
        description:
          "Dostarczamy innowacyjne rozwiązania dla obiektów sportowych i rekreacyjnych, dbając o najwyższą jakość i satysfakcję klientów.",
        stats: [
          { value: "25+", label: "Lat doświadczenia" },
          { value: "2300+", label: "Zadowolonych klientów" },
          { value: "50+", label: "Ekspertów w zespole" },
        ],
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
      mission: {
        title: "OUR MISSION",
        description:
          "We deliver innovative solutions for sports and leisure facilities, ensuring the highest quality and customer satisfaction.",
        stats: [
          { value: "25+", label: "Years of experience" },
          { value: "2300+", label: "Satisfied clients" },
          { value: "50+", label: "Team experts" },
        ],
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

        {/* Mission Section */}
        <section className="py-20 bg-white" ref={missionRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {content[currentLang].mission.title}
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                {content[currentLang].mission.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content[currentLang].mission.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="elementor-section timeline-section" id="timeline">
          <div className="timeline-container">
            <div className="timeline-content">
              {/* Enterprise Solutions Section */}
              <div className="holiday-village-section text-center mx-auto max-w-4xl px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="text-[#4B9BFF]">ENTERPRISE</span>
                  <br />
                  <span className="text-gray-900">SOLUTIONS</span>
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                  <span className="text-[#4B9BFF] font-medium">
                    Delivering integrated turnkey solutions
                  </span>{" "}
                  <span className="text-gray-800">
                    that optimize your facility's performance and enhance
                    operational efficiency across all service levels.
                  </span>
                </p>
              </div>

              <div className="timeline-items">
                {/* Design */}
                <div className="timeline-item in-view">
                  <div className="timeline-left">
                    <h2>DESIGN</h2>
                    <p>
                      Cuts, materials, designs: our teams always select only the
                      best in designing the products of our various brands. So
                      you get to do sport in style!
                    </p>
                  </div>
                  <div className="timeline-center">
                    <div className="timeline-icon">
                      <img
                        src="https://topsec.fr/wp-content/uploads/2022/03/ampoule_1.png"
                        alt="Design"
                      />
                    </div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-right mobile-only">
                    <h2>DESIGN</h2>
                    <p>
                      Cuts, materials, designs: our teams always select only the
                      best in designing the products of our various brands. So
                      you get to do sport in style!
                    </p>
                  </div>
                </div>

                {/* Sourcing */}
                <div className="timeline-item in-view">
                  <div className="timeline-left"></div>
                  <div className="timeline-center">
                    <div className="timeline-icon">
                      <img
                        src="https://topsec.fr/wp-content/uploads/2022/03/livraison_.png"
                        alt="Sourcing"
                      />
                    </div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-right">
                    <h2>Sourcing</h2>
                    <p>
                      We select the most efficient suppliers to fully meet your
                      expectations in terms of product quality, with ever more
                      affordable prices. This makes everyone a winner!
                    </p>
                  </div>
                </div>

                {/* Supply and Marketing */}
                <div className="timeline-item in-view">
                  <div className="timeline-left">
                    <h2>SUPPLY AND MARKETING</h2>
                    <p>
                      From preparing our services to their deployment at your
                      establishment, including logistics and delivery, we manage
                      each step of the process ourselves to ensure optimal
                      service delivery. You get to enjoy a stress-free
                      experience!
                    </p>
                  </div>
                  <div className="timeline-center">
                    <div className="timeline-icon">
                      <img
                        src="https://topsec.fr/wp-content/uploads/2022/03/gps_.png"
                        alt="Supply and Marketing"
                      />
                    </div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-right mobile-only">
                    <h2>SUPPLY AND MARKETING</h2>
                    <p>
                      From preparing our services to their deployment at your
                      establishment, including logistics and delivery, we manage
                      each step of the process ourselves to ensure optimal
                      service delivery. You get to enjoy a stress-free
                      experience!
                    </p>
                  </div>
                </div>

                {/* Stocking and Monitoring */}
                <div className="timeline-item in-view">
                  <div className="timeline-left"></div>
                  <div className="timeline-center">
                    <div className="timeline-icon">
                      <img
                        src="https://topsec.fr/wp-content/uploads/2022/03/carton_.png"
                        alt="Stocking and Monitoring"
                      />
                    </div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-right">
                    <h2>STOCKING AND MONITORING</h2>
                    <p>
                      Our regional branches and subsidiaries in Europe ensure
                      TOPSEC technicians can manage daily maintenance and
                      supply, with each establishment having a dedicated TOPSEC
                      sector head. We offer the assurance of personalised
                      customer service. And especially without making waves!
                    </p>
                  </div>
                </div>

                {/* Customer Service Relations */}
                <div className="timeline-item in-view">
                  <div className="timeline-left">
                    <h2>CUSTOMER SERVICE RELATIONS</h2>
                    <p>
                      For your complete satisfaction and to free your staff from
                      having to handle user issues, our customer service is
                      available 24 hours a day, 7 days a week; we're always
                      ready to answer all their questions or requests for
                      maintenance work on site. Available at all times to advise
                      you!
                    </p>
                  </div>
                  <div className="timeline-center">
                    <div className="timeline-icon">
                      <img
                        src="https://topsec.fr/wp-content/uploads/2022/03/sav_.png"
                        alt="Customer Service"
                      />
                    </div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-right mobile-only">
                    <h2>CUSTOMER SERVICE RELATIONS</h2>
                    <p>
                      For your complete satisfaction and to free your staff from
                      having to handle user issues, our customer service is
                      available 24 hours a day, 7 days a week; we're always
                      ready to answer all their questions or requests for
                      maintenance work on site. Available at all times to advise
                      you!
                    </p>
                  </div>
                </div>
              </div>

              <div className="discover-section">
                <h3>DISCOVER</h3>
                <p>OUR VARIOUS PURCHASING EXPERIENCES</p>
                <AnimatedButton
                  href="/contact"
                  text="CONTACT US"
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
                {content[currentLang].values.items.map((value, index) => (
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
                ))}
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
                href="/careers"
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

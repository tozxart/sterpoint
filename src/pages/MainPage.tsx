import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedButton } from "../components/common/AnimatedButton";
import type { Language } from "../types";
import { motion } from "framer-motion";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { Logo } from "../components/common/Logo";

interface MainPageProps {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

export function MainPage({ currentLang, onLanguageToggle }: MainPageProps) {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: leaderRef, inView: leaderInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: expertiseRef, inView: expertiseInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: cornerShopRef } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: contactRef } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const content = {
    pl: {
      hero: {
        title: "ZANURZ SIĘ W ŚWIECIE",
      },
      leader: {
        title: "LIDER W SPRZEDAŻY",
        subtitle: "ARTYKUŁÓW SPORTOWYCH I REKREACYJNYCH W TWOIM OBIEKCIE",
        description: "Zachwycaj użytkowników swoich obiektów!",
        cta: "Odkryj nasze marki",
      },
      expertise: {
        title: "W CZYM JESTEŚMY NAJLEPSI?",
        subtitle: "ZAPEWNIAMY TWÓJ SPOKÓJ I SATYSFAKCJĘ!",
        description:
          "Rozwijamy kompleksowe usługi dla Twoich obiektów. Projektowanie i zaopatrzenie w artykuły sportowe i rekreacyjne, logistyka, instalacja w Twoim obiekcie, konserwacja, zarządzanie zapasami, obsługa klienta: Twoje życie uproszczone, zajmujemy się wszystkim za Ciebie!",
        cta: "Odkryj nasze doświadczenie",
      },
      vending: {
        thoughtTitle: "CZY MYŚLAŁEŚ O ZAOFEROWANIU SWOIM UŻYTKOWNIKOM",
        experienceTitle: "A NOVEL PURCHASING EXPERIENCE?",
        vendingTitle: "AUTOMATY VENDINGOWE EXPRESS",
        description:
          "Przystępna cenowo gama niezbędnych artykułów sportowych i rekreacyjnych dostępnych do ekspresowego zakupu. Absolutny must-have!",
        cta: "Odkryj więcej",
      },
      cornerShop: {
        title: "SKLEP NAROŻNY",
        description:
          "Dodatkowa gama artykułów sportowych i rekreacyjnych dla wszystkich rodzajów i stylów sportu.\nJeszcze lepiej, gdy masz wybór!",
        cta: "Odkryj więcej",
      },
      contact: {
        title: "CHCESZ ZADOWOLIĆ SWOICH KLIENTÓW",
        subtitle: "I GENEROWAĆ WIĘCEJ PRZYCHODÓW DLA SWOJEJ PLACÓWKI?",
        cta: "Skontaktuj się z nami",
      },
      partners: {
        counter: {
          prefix: "WIĘCEJ NIŻ",
          value: 2300,
          suffix: "PLACÓWEK",
        },
        trust: "ZAUFAŁO NAM: DOŁĄCZ DO NICH!",
        title: "NASI PARTNERZY",
      },
      footer: {
        contact: {
          title: "KONTAKT",
          description:
            "W Ster Point kochamy sport tak bardzo, że jesteśmy gotowi służyć Ci pomocą w każdej chwili!",
          address: "ul. Przykładowa 123\n00-001 Warszawa",
          phone: "+48 123 456 789",
        },
        expertise: {
          title: "NASZE DOŚWIADCZENIE",
          links: [
            {
              text: "Automaty vendingowe express",
              href: "/our-expertise/express-vending-machines",
            },
            { text: "Sklep narożny", href: "/our-expertise/corner-shop" },
            { text: "Sklep koncepcyjny", href: "/our-expertise/concept-store" },
          ],
        },
        group: {
          title: "GRUPA TOPSEC",
          links: [
            { text: "Nasz zespół", href: "/the-topsec-group/our-team" },
            { text: "Nasze marki", href: "/our-brands" },
            { text: "Nasi partnerzy", href: "/our-partners" },
            { text: "Kontakt", href: "/contact-us" },
            { text: "Znajdź nas", href: "/the-topsec-group/find-us" },
          ],
        },
        news: {
          title: "AKTUALNOŚCI",
          links: [
            { text: "Ostatnie aktualności", href: "/news" },
            { text: "Wiadomości grupy", href: "/news/news-of-the-group" },
            { text: "Wydarzenia", href: "/news/events" },
            { text: "Portrety biznesowe", href: "/news/business-portraits" },
            { text: "Rekrutacja", href: "/news/recruitment" },
          ],
        },
        legal: {
          links: [
            { text: "Informacje prawne", href: "/legal-information" },
            { text: "RODO", href: "/rgpd" },
          ],
          copyright: "Copyright © 2024 - Ster Point",
        },
      },
    },
    en: {
      hero: {
        title: "IMMERSE YOURSELF IN THE WORLD OF",
      },
      leader: {
        title: "LEADER IN THE SALE",
        subtitle: "OF SPORTS AND LEISURE GOODS AT YOUR PREMISES",
        description: "Blow users of your premises away!",
        cta: "Discover our brands",
      },
      expertise: {
        title: "WHAT ARE WE BEST AT?",
        subtitle: "ENSURING YOUR PEACE OF MIND AND SATISFACTION!",
        description:
          "We develop full turnkey services for your establishments. The design and sourcing of sports and leisure goods, logistics, installation at your premises, maintenance, management of stocks, customer relationship management: your life simplified, we handle everything for you!",
        cta: "Discover our expertise",
      },
      vending: {
        thoughtTitle: "EVER THOUGHT ABOUT OFFERING YOUR USERS",
        experienceTitle: "A NOVEL PURCHASING EXPERIENCE?",
        vendingTitle: "EXPRESS VENDING MACHINES",
        description:
          "An affordable range of must-have sports and leisure goods available for express purchase. An absolute must!",
        cta: "Discover",
      },
      cornerShop: {
        title: "CORNER SHOP",
        description:
          "An additional range of sports and leisure goods for all sports types and styles.\nEven better if you have some choice!",
        cta: "Discover",
      },
      contact: {
        title: "YOU WANT TO SATISFY YOUR CUSTOMERS",
        subtitle: "AND GENERATE MORE INCOMES TO YOUR ESTABLISHMENT?",
        cta: "Contact us",
      },
      partners: {
        counter: {
          prefix: "MORE THAN",
          value: 2300,
          suffix: "ESTABLISHMENTS",
        },
        trust: "TRUST US: JOIN THEM!",
        title: "OUR PARTNERS",
      },
      footer: {
        contact: {
          title: "CONTACT US",
          description:
            "At Ster Point, we love sports so much that we're ready to help you at any time!",
          address: "123 Example Street\n00-001 Warsaw",
          phone: "+48 123 456 789",
        },
        expertise: {
          title: "OUR EXPERTISE",
          links: [
            {
              text: "Express vending machines",
              href: "/our-expertise/express-vending-machines",
            },
            { text: "Corner shop", href: "/our-expertise/corner-shop" },
            { text: "Concept store", href: "/our-expertise/concept-store" },
          ],
        },
        group: {
          title: "THE TOPSEC GROUP",
          links: [
            { text: "Our team", href: "/the-topsec-group/our-team" },
            { text: "Our brands", href: "/our-brands" },
            { text: "Our partners", href: "/our-partners" },
            { text: "Contact us", href: "/contact-us" },
            { text: "Find us", href: "/the-topsec-group/find-us" },
          ],
        },
        news: {
          title: "NEWS",
          links: [
            { text: "Last News", href: "/news" },
            { text: "News of the group", href: "/news/news-of-the-group" },
            { text: "Events", href: "/news/events" },
            { text: "Business portraits", href: "/news/business-portraits" },
            { text: "Recruitment", href: "/news/recruitment" },
          ],
        },
        legal: {
          links: [
            { text: "Legal information", href: "/legal-information" },
            { text: "GDPR", href: "/rgpd" },
          ],
          copyright: "Copyright © 2024 - Ster Point",
        },
      },
    },
  };

  return (
    <>
      <Navbar currentLang={currentLang} onLanguageToggle={onLanguageToggle} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="hero-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
            src="https://topsec.fr/wp-content/uploads/2022/02/TOPSEC_1.mp4"
          />
          <div className="hero-overlay" />
          <div
            ref={heroRef}
            className={`hero-content ${
              heroInView ? "slide-in" : "slide-out"
            } flex flex-col items-center justify-center`}>
            <h1 className="hero-title text-center">
              {content[currentLang].hero.title}
            </h1>
            <div className="mt-[-1rem] flex justify-center">
              <Logo className="w-48 md:w-64 lg:w-80 h-auto filter brightness-0 invert" />
            </div>
          </div>
        </div>

        {/* Leader Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="section-grid" ref={leaderRef}>
              <div
                className={`section-content ${
                  leaderInView ? "animate-fade-in-left" : ""
                }`}>
                <h2 className="section-title">
                  {content[currentLang].leader.title}
                  <span className="section-subtitle">
                    {content[currentLang].leader.subtitle}
                  </span>
                </h2>
                <p className="section-description">
                  {content[currentLang].leader.description}
                </p>
                <AnimatedButton
                  href="/our-brands"
                  text={content[currentLang].leader.cta}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={leaderInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative">
                <img
                  src="https://topsec.fr/wp-content/uploads/2022/02/img_leader-min-1.png"
                  alt="Leader in sports equipment"
                  className="w-full h-auto"
                  width={494}
                  height={428}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="section-grid" ref={expertiseRef}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={expertiseInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1">
                <img
                  src="https://topsec.fr/wp-content/uploads/2022/02/img_expertise.jpg"
                  alt="Our expertise"
                  className="image-container"
                  width={914}
                  height={898}
                />
              </motion.div>
              <div
                className={`order-1 lg:order-2 section-content ${
                  expertiseInView ? "animate-fade-in-right" : ""
                }`}>
                <h2 className="section-title">
                  {content[currentLang].expertise.title}
                  <span className="section-subtitle">
                    {content[currentLang].expertise.subtitle}
                  </span>
                </h2>
                <p className="section-description">
                  {content[currentLang].expertise.description}
                </p>
                <AnimatedButton
                  href="/our-expertise"
                  text={content[currentLang].expertise.cta}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vending Section */}
        <div className="relative">
          <div className="vending-wave">
            <svg viewBox="0 0 1440 100" className="w-full h-auto">
              <path
                fill="#ffffff"
                d="M0,0 C240,70 480,100 720,100 C960,100 1200,70 1440,0 L1440,100 L0,100 Z"
              />
            </svg>
          </div>

          <section className="vending-container">
            <div className="section-container">
              <div className="vending-header">
                <h2 className="vending-title">
                  {content[currentLang].vending.thoughtTitle}
                </h2>
                <h2 className="vending-subtitle">
                  {content[currentLang].vending.experienceTitle}
                </h2>
              </div>

              <div className="section-grid">
                <div className="demi-image">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="658"
                    height="681"
                    src="https://topsec.fr/wp-content/uploads/2022/02/img_distributeurs_FR.png"
                    className="w-full h-auto"
                    alt="Vending machines"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-3xl font-bold text-[#00A3FF] mb-6">
                    {content[currentLang].vending.vendingTitle}
                  </h3>
                  <p className="text-white text-lg mb-8">
                    {content[currentLang].vending.description}
                  </p>
                  <AnimatedButton
                    href="/our-expertise/express-vending-machines"
                    text={content[currentLang].vending.cta}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Corner Shop Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="section-grid" ref={cornerShopRef}>
              <div className="order-2 lg:order-1">
                <img
                  src="https://topsec.fr/wp-content/uploads/elementor/thumbs/boutiques-maillot-de-bain-swind-shop-topsec-1-q1a3cnox8autr63pazn53gkja76jskf8c2u6x8eg7i.png"
                  alt="Corner Shop"
                  className="image-container"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="section-title">
                  {content[currentLang].cornerShop.title}
                  <span className="section-subtitle">
                    {content[currentLang].cornerShop.description}
                  </span>
                </h2>
                <AnimatedButton
                  href="/our-expertise/corner-shop"
                  text={content[currentLang].cornerShop.cta}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="section-grid" ref={contactRef}>
              <div className="order-2 lg:order-1 bg-gray-50 p-8 rounded-lg">
                <div className="space-y-6">
                  <h2 className="contact-title">
                    {content[currentLang].contact.title}
                    <span className="contact-subtitle">
                      {content[currentLang].contact.subtitle}
                    </span>
                  </h2>
                  <div className="text-right">
                    <AnimatedButton
                      href="/contact-us"
                      text={content[currentLang].contact.cta}
                      variant="primary"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="demi-image">
                  <img
                    loading="lazy"
                    decoding="async"
                    width="650"
                    height="637"
                    src="https://topsec.fr/wp-content/uploads/2022/02/img_contact.jpg"
                    className="w-full h-auto rounded-lg"
                    alt="Contact us"
                    srcSet="https://topsec.fr/wp-content/uploads/2022/02/img_contact.jpg 650w, https://topsec.fr/wp-content/uploads/2022/02/img_contact-300x294.jpg 300w"
                    sizes="(max-width: 650px) 100vw, 650px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="partners-content">
            <div className="text-center">
              {/* Counter */}
              <div className="partners-counter">
                <span>{content[currentLang].partners.counter.prefix}</span>
                <span className="partners-counter-value">
                  {content[currentLang].partners.counter.value}
                </span>
                <span>{content[currentLang].partners.counter.suffix}</span>
              </div>

              {/* Trust Message */}
              <div className="partners-trust">
                {content[currentLang].partners.trust}
              </div>

              {/* Temporarily commented out Partners section for future activation
              <div className="partners-title">
                {content[currentLang].partners.title}
              </div>

              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView="auto"
                centeredSlides={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                speed={800}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                className="partners-swiper"
                onSlideChange={() => {
                  const activeSlide = document.querySelector(
                    ".swiper-slide-active img"
                  );
                  if (activeSlide) {
                    activeSlide.classList.add("animate-scale-in");
                    setTimeout(
                      () => activeSlide.classList.remove("animate-scale-in"),
                      500
                    );
                  }
                }}>
                <SwiperSlide>
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://topsec.fr/wp-content/uploads/2022/09/FFN-logolegere.png"
                    alt="FFN-logolegere"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    decoding="async"
                    src="https://topsec.fr/wp-content/uploads/2022/02/logo_azkoyen-1-1.png"
                    alt="logo_azkoyen"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    decoding="async"
                    src="https://topsec.fr/wp-content/uploads/2022/02/logo_bpi-1-1-300x80.png"
                    alt="logo_bpi"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    decoding="async"
                    src="https://topsec.fr/wp-content/uploads/2022/02/logo_ingenico-1-1.png"
                    alt="logo_ingenico"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    decoding="async"
                    src="https://topsec.fr/wp-content/uploads/2023/01/FFT_LOGO_LIGUE_AUVERGNE-RHONE-ALPES_FD_BL_NOIR-ET-BLANC-V2-1-300x99.png"
                    alt="tennis federation"
                  />
                </SwiperSlide>
              </Swiper>
              */}
            </div>
          </motion.div>
        </section>

        {/* Replace the old footer with the Footer component */}
        <Footer currentLang={currentLang} />
      </main>
    </>
  );
}

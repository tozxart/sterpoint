import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Navbar } from "../components/common/Navbar";
import type { Language } from "../types";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, LucideIcon } from "lucide-react";
import { Footer } from "../components/common/Footer";

interface ContactPageProps {
  currentLang: Language;
  onLanguageToggle: (lang: Language) => void;
}

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string[];
}

export function ContactPage({
  currentLang,
  onLanguageToggle,
}: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: mapRef, inView: mapInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const content = {
    pl: {
      hero: {
        title: "KONTAKT",
        subtitle: "Jesteśmy tutaj, aby Ci pomóc",
      },
      quickContact: {
        title: "SZYBKI KONTAKT",
        phone: "tel. +48 507 480 115",
        callToAction: "Zadzwoń do nas teraz!",
      },
      form: {
        title: "NAPISZ DO NAS",
        description:
          "Wypełnij formularz, a nasz zespół skontaktuje się z Tobą najszybciej jak to możliwe.",
        fields: {
          name: "Imię i nazwisko",
          email: "Email",
          phone: "Telefon",
          subject: "Temat",
          message: "Wiadomość",
        },
        button: "Wyślij wiadomość",
      },
      contact: {
        title: "INFORMACJE KONTAKTOWE",
        info: [
          {
            icon: Phone,
            title: "Telefon",
            details: ["+48 507 480 115"],
          },
          {
            icon: Mail,
            title: "Email",
            details: ["info@sterpoint.pl"],
          },
          {
            icon: MapPin,
            title: "Adres",
            details: ["ul. Skibowa 37", "61-306 Poznań", "Polska"],
          },
          {
            icon: Clock,
            title: "Godziny pracy",
            details: ["Poniedziałek - Piątek", "9:00 - 17:00"],
          },
        ] as ContactInfo[],
      },
    },
    en: {
      hero: {
        title: "CONTACT US",
        subtitle: "We're here to help",
      },
      quickContact: {
        title: "QUICK CONTACT",
        phone: "tel. +48 507 480 115",
        callToAction: "Call us now!",
      },
      form: {
        title: "GET IN TOUCH",
        description:
          "Fill out the form and our team will get back to you as soon as possible.",
        fields: {
          name: "Full Name",
          email: "Email",
          phone: "Phone",
          subject: "Subject",
          message: "Message",
        },
        button: "Send Message",
      },
      contact: {
        title: "CONTACT INFORMATION",
        info: [
          {
            icon: Phone,
            title: "Phone",
            details: ["+48 507 480 115"],
          },
          {
            icon: Mail,
            title: "Email",
            details: ["info@sterpoint.pl"],
          },
          {
            icon: MapPin,
            title: "Address",
            details: ["ul. Skibowa 37", "61-306 Poznań", "Poland"],
          },
          {
            icon: Clock,
            title: "Working Hours",
            details: ["Monday - Friday", "9:00 AM - 5:00 PM"],
          },
        ] as ContactInfo[],
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xbljeyoj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Show success message
        alert(
          currentLang === "pl"
            ? "Dziękujemy za wiadomość! Skontaktujemy się wkrótce."
            : "Thank you for your message! We will contact you soon."
        );
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      alert(
        currentLang === "pl"
          ? "Przepraszamy, wystąpił błąd. Prosimy spróbować później."
          : "Sorry, there was an error. Please try again later."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              alt="Contact Hero"
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

        {/* Quick Contact Banner */}
        <div className="bg-primary-600 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">
                  {content[currentLang].quickContact.title}
                </h2>
                <p className="text-white/90 mt-1">
                  {content[currentLang].quickContact.callToAction}
                </p>
              </div>
              <a
                href="tel:+48507480115"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
                <Phone className="w-6 h-6 mr-2" />
                {content[currentLang].quickContact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {content[currentLang].contact.title}
                  </h2>
                  <div className="space-y-6">
                    {content[currentLang].contact.info.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          {item.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  ref={formRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {content[currentLang].form.title}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {content[currentLang].form.description}
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {content[currentLang].form.fields.name}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="contact-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {content[currentLang].form.fields.email}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="contact-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {content[currentLang].form.fields.phone}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="contact-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {content[currentLang].form.fields.subject}
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="contact-input"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content[currentLang].form.fields.message}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="contact-input"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300">
                        {content[currentLang].form.button}
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section ref={mapRef} className="relative px-4 py-16 bg-gray-50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative">
              <div className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.477689327754!2d16.994704877115626!3d52.41866797206769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b3c48e24f6d%3A0x7edb0f7077991f51!2sSkibowa%2037%2C%2061-306%20Pozna%C5%84!5e0!3m2!1sen!2spl!4v1708613844307!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ster Point Location"
                  className="w-full h-full"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto -mt-16 relative z-10">
                <h3 className="text-xl font-semibold mb-2">
                  {currentLang === "pl" ? "Nasza Lokalizacja" : "Our Location"}
                </h3>
                <p className="text-gray-600">
                  Ster Point Sp. z o.o.
                  <br />
                  ul. Skibowa 37
                  <br />
                  61-306 Poznań
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer currentLang={currentLang} />
    </>
  );
}

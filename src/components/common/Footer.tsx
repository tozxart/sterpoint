import React from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { getAssetPath } from "../../utils/assetUtils";
import type { Language } from "../../types";
import { Link } from "react-router-dom";

interface FooterProps {
  currentLang: Language;
}

export function Footer({ currentLang }: FooterProps) {
  const content = {
    pl: {
      contact: {
        title: "KONTAKT",
        description:
          "W Ster Point kochamy sport tak bardzo, że jesteśmy gotowi służyć Ci pomocą w każdej chwili!",
        address: "ul. Skibowa 37\n61-306 Poznań",
        phone: "+48 507 480 115",
        email: "info@sterpoint.pl",
      },
      navigation: {
        company: {
          title: "FIRMA",
          links: [
            { text: "Strona główna", href: "/" },
            { text: "O nas", href: "/about" },
            { text: "Kontakt", href: "/contact" },
          ],
        },
        products: {
          title: "PRODUKTY",
          links: [
            { text: "Automaty vendingowe", href: "/products/vending-machines" },
            {
              text: "Akcesoria pływackie",
              href: "/products/swimming-accessories",
            },
            { text: "Sprzęt fitness", href: "/products/fitness-equipment" },
            { text: "Tenis i Padel", href: "/products/tennis-padel" },
          ],
        },
        services: {
          title: "USŁUGI",
          links: [{ text: "Nasze usługi", href: "/services" }],
        },
      },
      legal: {
        copyright: "Copyright © 2024 - Ster Point",
      },
    },
    en: {
      contact: {
        title: "CONTACT",
        description:
          "At Ster Point, we love sports so much that we're ready to help you at any time!",
        address: "ul. Skibowa 37\n61-306 Poznań",
        phone: "+48 507 480 115",
        email: "info@sterpoint.pl",
      },
      navigation: {
        company: {
          title: "COMPANY",
          links: [
            { text: "Home", href: "/" },
            { text: "About", href: "/about" },
            { text: "Contact", href: "/contact" },
          ],
        },
        products: {
          title: "PRODUCTS",
          links: [
            { text: "Vending Machines", href: "/products/vending-machines" },
            {
              text: "Swimming Accessories",
              href: "/products/swimming-accessories",
            },
            { text: "Fitness Equipment", href: "/products/fitness-equipment" },
            { text: "Tennis & Padel", href: "/products/tennis-padel" },
          ],
        },
        services: {
          title: "SERVICES",
          links: [{ text: "Our Services", href: "/services" }],
        },
      },
      legal: {
        copyright: "Copyright © 2024 - Ster Point",
      },
    },
  };

  return (
    <footer className="bg-gradient-to-r from-[#0B1A45] to-[#005295] text-white/90">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div className="lg:col-span-1">
            <Logo className="mb-6 h-12 brightness-0 invert" />
            <h4 className="text-xl font-bold mb-4">
              {content[currentLang].contact.title}
            </h4>
            <p className="text-white/80 mb-4">
              {content[currentLang].contact.description}
            </p>
            <p className="text-white/80 mb-4 whitespace-pre-line">
              {content[currentLang].contact.address}
              <br />
              {currentLang === "pl"
                ? "Działamy na terenie całej Polski, w tym Warszawa, Poznań, Kraków, Wrocław, Łódź, Gdańsk, Katowice. Skontaktuj się z nami po automaty vendingowe, baseny ogrodowe i serwis lokalny."
                : "We operate across Poland including Warsaw, Poznan, Cracow, Wroclaw, Lodz, Gdansk, Katowice. Contact us for vending machines, swimming pools, and local service."}
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${content[currentLang].contact.phone}`}
                className="text-white/80 hover:text-white transition-colors block">
                {content[currentLang].contact.phone}
              </a>
              <a
                href={`mailto:${content[currentLang].contact.email}`}
                className="text-white/80 hover:text-white transition-colors block">
                {content[currentLang].contact.email}
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              {content[currentLang].navigation.company.title}
            </h4>
            <ul className="space-y-2">
              {content[currentLang].navigation.company.links.map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              {content[currentLang].navigation.products.title}
            </h4>
            <ul className="space-y-2">
              {content[currentLang].navigation.products.links.map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              {content[currentLang].navigation.services.title}
            </h4>
            <ul className="space-y-2">
              {content[currentLang].navigation.services.links.map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Social Media Icons */}
            <div className="mt-8">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors">
                  <img
                    src={getAssetPath("social/linkedin.svg")}
                    alt="LinkedIn"
                    className="h-6 w-6 brightness-0 invert"
                  />
                </a>
                <a
                  href="https://www.facebook.com/sterpointpl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors">
                  <img
                    src={getAssetPath("social/facebook.svg")}
                    alt="Facebook"
                    className="h-6 w-6 brightness-0 invert"
                  />
                </a>
                <a
                  href="https://www.instagram.com/sterpointpl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors">
                  <img
                    src={getAssetPath("social/instagram.svg")}
                    alt="Instagram"
                    className="h-6 w-6 brightness-0 invert"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            {content[currentLang].legal.copyright}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

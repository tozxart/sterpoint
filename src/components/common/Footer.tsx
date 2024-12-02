import React from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { getAssetPath } from "../../utils/assetUtils";
import type { Language } from "../../types";

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
    en: {
      contact: {
        title: "CONTACT US",
        description:
          "At Ster Point, we love sports so much that we're ready to help you at any time!",
        address: "ul. Skibowa 37\n61-306 Poznań",
        phone: "+48 507 480 115",
        email: "info@sterpoint.pl",
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
  };

  return (
    <footer className="bg-gradient-to-r from-[#0B1A45] to-[#005295] text-white/90">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="footer-container">
        <div className="footer-grid">
          {/* Contact Section */}
          <div>
            <h4 className="footer-heading">
              {content[currentLang].contact.title}
            </h4>
            <p className="footer-text mb-4">
              {content[currentLang].contact.description}
            </p>
            <p className="footer-text mb-4 whitespace-pre-line">
              {content[currentLang].contact.address}
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${content[currentLang].contact.phone}`}
                className="footer-link block">
                {content[currentLang].contact.phone}
              </a>
              <a
                href={`mailto:${content[currentLang].contact.email}`}
                className="footer-link block">
                {content[currentLang].contact.email}
              </a>
            </div>
          </div>

          {/* Expertise Section */}
          <div>
            <h4 className="footer-heading">
              {content[currentLang].expertise.title}
            </h4>
            <ul className="space-y-3">
              {content[currentLang].expertise.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Section */}
          <div>
            <h4 className="footer-heading">
              {content[currentLang].group.title}
            </h4>
            <ul className="space-y-3">
              {content[currentLang].group.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* News Section */}
          <div>
            <h4 className="footer-heading">
              {content[currentLang].news.title}
            </h4>
            <ul className="space-y-3">
              {content[currentLang].news.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo and Social Media */}
          <div className="text-center">
            <Logo className="footer-logo" />
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/company/topsec"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link">
                <img
                  src={getAssetPath("social/linkedin.svg")}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCxNPGFUBTECxfUq22QNLU5Q"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link">
                <img
                  src={getAssetPath("social/youtube.svg")}
                  alt="YouTube"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.facebook.com/TopsecFrance"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link">
                <img
                  src={getAssetPath("social/facebook.svg")}
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/topsecfrance/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link">
                <img
                  src={getAssetPath("social/instagram.svg")}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-8 mb-4">
            {content[currentLang].legal.links.map((link, index) => (
              <a key={index} href={link.href} className="footer-link text-sm">
                {link.text}
              </a>
            ))}
          </div>
          <div className="footer-text text-sm">
            {content[currentLang].legal.copyright}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

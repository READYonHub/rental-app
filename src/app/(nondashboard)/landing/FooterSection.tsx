import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { LandingPageData as lpd } from "@/lib/constants";

const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4">
            <Link href="/" className="text-xl font-bold" scroll={false}>
              {lpd.footerSection.title}
            </Link>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-6">
              <li>
                <Link href="/about">{lpd.footerSection.nav.About}</Link>
              </li>
              <li>
                <Link href="/contact">{lpd.footerSection.nav.Contact}</Link>
              </li>
              <li>
                <Link href="/faq">{lpd.footerSection.nav.FAQ}</Link>
              </li>
              <li>
                <Link href="/terms">{lpd.footerSection.nav.Terms}</Link>
              </li>
              <li>
                <Link href="/privacy">{lpd.footerSection.nav.Privacy}</Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary-600">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Linkedin"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Youtube" className="hover:text-primary-600">
              <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 flex justify-center space-x-4">
          <span>© {lpd.footerSection.copiRight.name}. {lpd.footerSection.copiRight.rights}</span>
          <Link href="/privacy">{lpd.footerSection.copiRight.PrivacyPolicy}</Link>
          <Link href="/terms">{lpd.footerSection.copiRight.TermsofService}</Link>
          <Link href="/cookies">{lpd.footerSection.copiRight.CookiePolicy}</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
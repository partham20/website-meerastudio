import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-serif font-bold">{t.brand}</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.servicesHeading}</h3>
            <ul className="space-y-2 text-gray-300">
              {t.footer.serviceLinks.map((label, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-amber-400 transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contactHeading}</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-amber-400 mt-0.5 mr-3" />
                <span>+91 98426 97382</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amber-400 mt-0.5 mr-3" />
                <span>hello@meerastudio.co.in</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 mr-3" />
                <span className="whitespace-pre-line">{t.contact.addressText}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t.footer.copyright(currentYear)}
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">{t.footer.privacy}</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">{t.footer.terms}</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">{t.footer.cookies}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

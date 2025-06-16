import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-serif font-bold">Meera Studio</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Capturing life's beautiful moments with artistry, passion, and timeless elegance. 
              Creating memories that last a lifetime through professional photography.
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
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Wedding Photography</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Portrait Sessions</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Maternity & Newborn</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Corporate Events</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Special Occasions</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Destination Sessions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-amber-400 mt-0.5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amber-400 mt-0.5 mr-3" />
                <span>hello@meerastudio.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 mr-3" />
                <span>123 Photography Lane<br />Creative District, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Meera Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
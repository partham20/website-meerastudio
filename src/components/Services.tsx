import React from 'react';
import { Heart, Users, Briefcase, Baby, Sparkles, MapPin, Video, Film, PlayCircle, GraduationCap, Building2, LucideIcon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { ServiceText } from '../i18n/translations';

type Service = ServiceText & { icon: LucideIcon };

const photoIcons: LucideIcon[] = [Heart, Users, Baby, Briefcase, Sparkles, MapPin];
const videoIcons: LucideIcon[] = [Video, Film, PlayCircle, GraduationCap, Baby, Building2];

export default function Services() {
  const { t } = useLanguage();

  const photographyServices: Service[] = t.services.photography.map((s, i) => ({ ...s, icon: photoIcons[i] }));
  const videographyServices: Service[] = t.services.videography.map((s, i) => ({ ...s, icon: videoIcons[i] }));

  const renderCard = (service: Service, index: number) => {
    const IconComponent = service.icon;
    return (
      <div key={index} className="group bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amber-200">
        <div className="bg-amber-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
          <IconComponent className="h-8 w-8 text-black" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

        <div className="text-2xl font-bold text-amber-600 mb-4">{service.price}</div>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-gray-600 flex items-center">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>

        <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-200 font-semibold">
          {t.services.learnMore}
        </button>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            {t.services.photoHeading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.photoSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photographyServices.map(renderCard)}
        </div>

        <div className="text-center mt-24 mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            {t.services.videoHeading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.videoSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videographyServices.map(renderCard)}
        </div>
      </div>
    </section>
  );
}

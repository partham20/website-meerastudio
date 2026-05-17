import React from 'react';
import { Award, Users, Camera, Heart } from 'lucide-react';
import mathaiyan from '../assets/portfolio/mathaiyan.jpg';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Camera, value: '6000+', label: t.about.stats.sessions },
    { icon: Users, value: '1000+', label: t.about.stats.clients },
    { icon: Award, value: '30+', label: t.about.stats.experience },
    { icon: Heart, value: '99%', label: t.about.stats.satisfaction },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={mathaiyan}
              alt="Mathaiyan - Professional Photographer"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-400 text-black p-6 rounded-lg shadow-lg">
              <p className="font-serif text-lg font-bold">Mathaiyan</p>
              <p className="text-sm">{t.about.leadPhotographer}</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              {t.about.title}
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {t.about.para1}
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t.about.para2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <IconComponent className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

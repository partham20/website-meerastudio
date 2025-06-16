import React from 'react';
import { Award, Users, Camera, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Camera, value: '500+', label: 'Sessions Completed' },
    { icon: Users, value: '300+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Heart, value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="Meera - Professional Photographer"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-400 text-black p-6 rounded-lg shadow-lg">
              <p className="font-serif text-lg font-bold">Meera Sharma</p>
              <p className="text-sm">Lead Photographer</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Crafting Visual Stories That Last Forever
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              With over 5 years of experience in professional photography, I specialize in capturing the authentic emotions and intimate moments that make your story unique. My approach combines technical expertise with artistic vision to create timeless images.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From intimate portraits to grand celebrations, I believe every moment deserves to be preserved with care, creativity, and attention to detail. Let me help you create lasting memories that you'll treasure for generations.
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
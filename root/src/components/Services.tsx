import React from 'react';
import { Heart, Users, Briefcase, Baby, Sparkles, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capture your special day with romantic, timeless imagery that tells your love story.',
      price: 'Starting at $2,500',
      features: ['8-10 hours coverage', 'Engagement session', '500+ edited photos', 'Online gallery']
    },
    {
      icon: Users,
      title: 'Portrait Sessions',
      description: 'Professional headshots and family portraits that showcase your personality.',
      price: 'Starting at $350',
      features: ['1-2 hour session', '30+ edited photos', 'Multiple outfit changes', 'Print release']
    },
    {
      icon: Baby,
      title: 'Maternity & Newborn',
      description: 'Gentle, artistic photography celebrating new life and growing families.',
      price: 'Starting at $450',
      features: ['In-studio or outdoor', 'Props included', '40+ edited photos', 'Same-day previews']
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional event coverage for businesses, conferences, and corporate gatherings.',
      price: 'Starting at $800',
      features: ['Full event coverage', 'Same-day delivery', 'High-resolution files', 'Usage rights']
    },
    {
      icon: Sparkles,
      title: 'Special Occasions',
      description: 'Birthday parties, anniversaries, and milestone celebrations captured beautifully.',
      price: 'Starting at $500',
      features: ['3-4 hours coverage', '100+ edited photos', 'Group and candid shots', 'Online gallery']
    },
    {
      icon: MapPin,
      title: 'Destination Sessions',
      description: 'Travel photography for weddings, elopements, and vacation memories.',
      price: 'Custom pricing',
      features: ['Travel included', 'Multiple locations', 'Extended coverage', 'Custom packages']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Photography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional photography services tailored to capture your most precious moments with artistry and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
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
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
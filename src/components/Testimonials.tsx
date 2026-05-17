import React from 'react';
import { Star, Quote } from 'lucide-react';
import karthikPriya from '../assets/testimonials/karthik-priya.jpg';
import lakshmi from '../assets/testimonials/lakshmi.jpg';
import senthilKumar from '../assets/testimonials/senthil-kumar.jpg';
import divyaArun from '../assets/testimonials/divya-arun.jpg';
import anitha from '../assets/testimonials/anitha.jpg';
import rajeshMeena from '../assets/testimonials/rajesh-meena.jpg';
import { useLanguage } from '../i18n/LanguageContext';

const testimonialImages = [karthikPriya, lakshmi, senthilKumar, divyaArun, anitha, rajeshMeena];

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = t.testimonials.items.map((item, i) => ({
    ...item,
    image: testimonialImages[i],
    rating: 5,
  }));

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            {t.testimonials.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-300">
              <Quote className="h-8 w-8 text-amber-400 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & Michael Johnson',
      role: 'Wedding Clients',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Meera captured our wedding day perfectly! Her attention to detail and ability to make us feel comfortable resulted in the most beautiful photos we could have asked for. Every moment was preserved with such artistry and emotion.'
    },
    {
      name: 'Jennifer Chen',
      role: 'Portrait Client',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The family portrait session exceeded all expectations. Meera has a gift for capturing genuine smiles and natural interactions. Our photos are now treasured family heirlooms that we will cherish forever.'
    },
    {
      name: 'David Martinez',
      role: 'Corporate Client',
      image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Professional, punctual, and incredibly talented. Meera handled our corporate event photography with such expertise. The photos perfectly captured the energy and professionalism of our conference.'
    },
    {
      name: 'Amanda & Robert Smith',
      role: 'Maternity Clients',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Meera made our maternity shoot so special and comfortable. Her creative vision and gentle approach resulted in stunning photos that beautifully capture this precious time in our lives.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Portrait Client',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Amazing experience from start to finish! Meera has an incredible eye for composition and lighting. The headshots she took have opened so many doors for my career. Highly recommend!'
    },
    {
      name: 'Mark & Emma Wilson',
      role: 'Anniversary Clients',
      image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Celebrating our 25th anniversary with Meera was perfect. She captured our love story beautifully, creating timeless images that remind us why we fell in love all those years ago.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about their experience with Meera Studio.
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
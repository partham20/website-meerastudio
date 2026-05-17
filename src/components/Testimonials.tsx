import React from 'react';
import { Star, Quote } from 'lucide-react';
import karthikPriya from '../assets/testimonials/karthik-priya.jpg';
import lakshmi from '../assets/testimonials/lakshmi.jpg';
import senthilKumar from '../assets/testimonials/senthil-kumar.jpg';
import divyaArun from '../assets/testimonials/divya-arun.jpg';
import anitha from '../assets/testimonials/anitha.jpg';
import rajeshMeena from '../assets/testimonials/rajesh-meena.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Karthik & Priya',
      role: 'Wedding Clients, Bargur',
      image: karthikPriya,
      rating: 5,
      text: 'Mathaiyan sir and his team covered our wedding from the engagement to the reception. He knows every shot a Tamil wedding needs — the muhurtham, the family rituals, even the small moments with our grandparents. The album feels like our family story, not just photos.'
    },
    {
      name: 'Lakshmi',
      role: 'Family Portrait Client, Krishnagiri',
      image: lakshmi,
      rating: 5,
      text: 'We booked the Meera Studio team for a three-generation family portrait. My parents travelled in and we wanted something special for our hall. They were so patient with my amma and made my kids laugh in every frame. The photos are now framed at home and in the puja room.'
    },
    {
      name: 'Senthil Kumar',
      role: 'Corporate Client, Salem',
      image: senthilKumar,
      rating: 5,
      text: 'We booked Meera Studio for our company annual day in Salem. Edited photos were delivered the same week, all colour-corrected and ready for our LinkedIn posts and internal newsletter. The team was professional, on time, and the pricing was very reasonable for the quality we got.'
    },
    {
      name: 'Divya & Arun',
      role: 'Maternity Clients, Chennai',
      image: divyaArun,
      rating: 5,
      text: 'Mathaiyan travelled all the way to Chennai for our valaikappu and maternity shoot. I was nervous about being on camera but he made the whole session feel relaxed. The results were soft, natural, and very us. Already booked him again for the newborn shoot.'
    },
    {
      name: 'Anitha',
      role: 'Portrait Client, Tirupattur',
      image: anitha,
      rating: 5,
      text: 'I needed professional headshots for my college applications and a matrimony profile. They understood both contexts and gave me two completely different sets in one session. Friends could not believe these were the same person — that is how good the lighting and styling was.'
    },
    {
      name: 'Rajesh & Meena',
      role: 'Anniversary Clients, Dharmapuri',
      image: rajeshMeena,
      rating: 5,
      text: 'For our first anniversary, we wanted a small couple shoot — nothing too formal. Mathaiyan drove down to Dharmapuri, scouted a nice outdoor spot, and made us laugh through the whole session. The candid shots came out far better than the posed ones. Already planning to book him every year.'
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
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Send } from 'lucide-react';

// Get a free key at https://web3forms.com (takes ~1 minute, just enter your email)
const WEB3FORMS_ACCESS_KEY = '090b0052-d05c-4efd-8767-635b6ddba3b0';
const WHATSAPP_NUMBER = '919842697382'; // country code + number, no + or spaces

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${formData.name} — ${formData.service || 'Photography'}`,
          from_name: 'Meera Studio Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          preferred_date: formData.date,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.message || 'Submission failed');

      const whatsappText = [
        '*New Inquiry from Meera Studio Website*',
        '',
        `*Name:* ${formData.name}`,
        `*Email:* ${formData.email}`,
        formData.phone ? `*Phone:* ${formData.phone}` : '',
        `*Service:* ${formData.service}`,
        formData.date ? `*Preferred Date:* ${formData.date}` : '',
        '',
        '*Message:*',
        formData.message,
      ].filter(Boolean).join('\n');

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`,
        '_blank'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Get in touch to discuss your photography needs and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-amber-400 mt-1 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 9842697382</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-amber-400 mt-1 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">hello@meerastudio.co.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-amber-400 mt-1 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">325, BCL Complex, 1st Floor, Bus Stand Opposite<br />Bargur, Krishnagiri District, TN 635104</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-amber-400 mt-1 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Hours</p>
                  <p className="text-gray-600">
                    Monday - Saturday: 8:00 AM - 8:00 PM<br />
                     Sunday: 10:00 AM - 8:00 PM<br />
                   
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <p className="font-semibold text-gray-900 mb-4">Follow Us</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-amber-400 transition-colors duration-200">
                  <Instagram className="h-5 w-5 text-gray-700" />
                </a>
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-amber-400 transition-colors duration-200">
                  <Facebook className="h-5 w-5 text-gray-700" />
                </a>
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-amber-400 transition-colors duration-200">
                  <Twitter className="h-5 w-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                    placeholder="+919842697382"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="maternity">Maternity & Newborn</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="special">Special Occasions</option>
                    <option value="destination">Destination Sessions</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your photography needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-400 text-black py-4 px-6 rounded-lg font-semibold hover:bg-amber-300 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm">
                  Thank you! Your message has been sent. A WhatsApp window has also opened — tap Send there to reach us instantly.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                  Something went wrong. Please try again, or call us directly at +91 9842697382.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
import { BUSINESS_INFO, HOURS, SOCIAL_LINKS } from "../lib/constants";
import { MapPin, Instagram, Globe, Twitter, MessageSquare, Facebook, Linkedin } from "lucide-react";
import React from 'react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission, in real app would connect to an API
    alert("Thank you for your message. We will be in touch shortly!");
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram': return <Instagram className="h-4 w-4" />;
      case 'twitter': return <Twitter className="h-4 w-4" />;
      case 'facebook': return <Facebook className="h-4 w-4" />;
      case 'linkedin': return <Linkedin className="h-4 w-4" />;
      case 'whatsapp': return <MessageSquare className="h-4 w-4" />;
      case 'google': return <MapPin className="h-4 w-4" />;
      case 'yelp': return <Globe className="h-4 w-4" />;
      default: return <Globe className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-4">Get in touch</h2>
            <h1 className="text-5xl md:text-7xl font-serif italic tracking-tight text-stone-900 mb-8 leading-[0.9]">Let's create something beautiful together.</h1>
            <p className="text-lg leading-relaxed text-stone-600 mb-12 font-serif italic">
              We offer a free consultation for your interior design, decoration, or home staging needs. Let's discuss how we can elevate your lifestyle and peace of mind.
            </p>

            <div className="border-t border-stone-900/10 pt-10 mb-12">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-6">Service Area</h3>
              <p className="text-stone-900 font-serif italic text-lg leading-relaxed mb-1">Ohio, United States</p>
              <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">Serving clients within a 100-mile radius</p>
            </div>

            <div className="border-t border-stone-900/10 pt-10 mb-12">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-6">Business Hours</h3>
              <ul className="space-y-4">
                {HOURS.map(hour => (
                  <li key={hour.day} className="flex justify-between items-end border-b border-stone-900/10 pb-2 max-w-sm">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-stone-900">{hour.day}</span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-500">{hour.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone-900/10 pt-10">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map(link => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-stone-900/10 bg-white text-stone-500 hover:text-stone-900 hover:border-stone-900 transition-colors"
                    aria-label={link.name}
                  >
                    {renderIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          
          {/* Contact Form & Booking Widget */}
          <div className="lg:pt-20">
            <div className="bg-white p-10 lg:p-12 border border-stone-900/10 relative">
              <div className="absolute top-0 left-0 w-full h-[6px] bg-accent"></div>
              <h3 className="font-serif italic text-3xl text-stone-900 mb-8 border-b border-stone-900/10 pb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="first-name" className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">First name</label>
                    <input type="text" name="first-name" id="first-name" className="block w-full border-0 border-b border-stone-900/20 py-2 px-0 text-stone-900 placeholder:text-stone-300 focus:ring-0 focus:border-stone-900 sm:text-sm bg-transparent" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Last name</label>
                    <input type="text" name="last-name" id="last-name" className="block w-full border-0 border-b border-stone-900/20 py-2 px-0 text-stone-900 placeholder:text-stone-300 focus:ring-0 focus:border-stone-900 sm:text-sm bg-transparent" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Email address</label>
                  <input type="email" name="email" id="email" className="block w-full border-0 border-b border-stone-900/20 py-2 px-0 text-stone-900 placeholder:text-stone-300 focus:ring-0 focus:border-stone-900 sm:text-sm bg-transparent" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Service interested in</label>
                  <select id="service" name="service" className="block w-full border-0 border-b border-stone-900/20 py-2 px-0 text-stone-900 focus:ring-0 focus:border-stone-900 sm:text-sm bg-transparent">
                    <option>Interior Design</option>
                    <option>Interior Decoration</option>
                    <option>Home Staging</option>
                    <option>Flooring / Painting</option>
                    <option>Commercial Services</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Project Details</label>
                  <textarea name="message" id="message" rows={4} className="block w-full border-0 border-b border-stone-900/20 py-2 px-0 text-stone-900 placeholder:text-stone-300 focus:ring-0 focus:border-stone-900 sm:text-sm bg-transparent resize-none" />
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white text-[10px] uppercase tracking-[0.3em] font-bold py-5 transition-colors">
                    Send Message
                  </button>
                </div>
              </form>

              <div className="mt-12 pt-10 border-t border-stone-900/10">
                <div className="text-center">
                  <p className="text-xs text-stone-500 mb-6 font-serif italic">Prefer to schedule right away?</p>
                  <a 
                    href={BUSINESS_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-accent hover:bg-accent-hover text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold transition-colors text-center"
                  >
                    Open Google Calendar
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

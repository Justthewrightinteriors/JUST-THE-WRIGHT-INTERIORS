import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BUSINESS_INFO, IMAGES, SERVICES, TESTIMONIALS } from "../lib/constants";

export function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Content: Hero & Intro */}
      <div className="w-full lg:w-3/5 flex flex-col border-b lg:border-b-0 lg:border-r border-stone-900/10">
        
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-16 flex flex-col justify-center min-h-[60vh] lg:min-h-0 bg-stone-50">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.85] tracking-tighter text-stone-900">
              Luxury is <br/>
              <span className="italic text-accent">how home feels.</span>
            </h1>
            <p className="text-lg leading-relaxed text-stone-600 font-serif italic max-w-md">
              {BUSINESS_INFO.tagline}
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-6">
              <Link 
                to="/portfolio"
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900 hover:text-accent transition-colors flex items-center border-b border-stone-900 pb-1 w-max"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Image Grid / Portfolio Teaser */}
        <section className="p-6 lg:p-12 border-t border-stone-900/10">
          <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-96 overflow-hidden group mb-12 rounded-3xl shadow-sm">
            <img
              src={IMAGES.hero}
              alt="Luxury interior design living room"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-900/20 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-3xl font-serif italic text-white drop-shadow-md">Residential Sanctuary</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-6">Welcome Home</h2>
              <p className="text-sm leading-relaxed text-stone-600 mb-4 font-serif italic">
                Just the Wright Interiors was founded by owner and operator Jordan Daniel Wright. After serving Southwest Florida, we felt drawn back to Ohio—where life feels like a blessing every day you get to wake up and live it.
              </p>
              <Link to="/about" className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 border-b border-stone-900/20 hover:border-stone-900 inline-flex items-center pb-1 transition-colors">
                Meet Jordan D. Wright
              </Link>
            </div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md">
              <img 
                src={IMAGES.about} 
                alt="Modern minimalist aesthetic room" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="p-6 lg:p-12 border-t border-stone-900/10 bg-white">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-12 text-center">Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="flex flex-col">
                <p className="text-sm leading-relaxed text-stone-600 font-serif italic mb-6 flex-grow flex items-center">
                  {testimonial.text}
                </p>
                <div className="pt-4 border-t border-stone-900/10">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-stone-900">{testimonial.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-stone-500 mt-1">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Right Content: Services & CTA */}
      <div className="w-full lg:w-2/5 flex flex-col bg-stone-50">
        
        {/* Services List section */}
        <section className="p-6 lg:p-12">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-8 border-b border-stone-900/10 pb-4">Our Expertise</h3>
          <ul className="grid grid-cols-1 gap-y-4">
            {SERVICES.slice(0, 5).map((service, index) => (
              <li key={index} className="flex justify-between items-end border-b border-stone-900/10 pb-2 transition-colors hover:border-stone-900/30">
                <span className="text-xs font-semibold uppercase tracking-widest text-stone-900">{service.title}</span>
                <span className="text-[10px] italic text-stone-500 font-serif lowercase">Detail</span>
              </li>
            ))}
          </ul>
          <Link to="/services" className="inline-block mt-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 hover:text-stone-900 transition-colors">
            View all services &rarr;
          </Link>
        </section>

        {/* CTA Section */}
        <section className="bg-stone-100 text-stone-900 rounded-3xl p-8 lg:p-12 mx-6 lg:mx-12 mb-12 flex flex-col justify-center shadow-sm border border-stone-900/5">
          <div className="space-y-4 mb-10 text-center">
            <h4 className="text-3xl lg:text-4xl font-serif italic text-stone-900 leading-tight">Reserve your consultation</h4>
            <p className="text-[10px] text-stone-500 leading-relaxed uppercase tracking-[0.2em]">Guaranteed to meet expectations & leave you smiling.</p>
          </div>
          <a
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-5 bg-accent hover:bg-accent-hover text-white rounded-full text-center text-[10px] uppercase tracking-[0.3em] font-bold transition-colors shadow-sm"
          >
            Book Appointment
          </a>
        </section>
        
        {/* Social Links matching footer of right rail */}
        <section className="text-center p-6 lg:p-12 pt-0 mt-auto">
           <div className="flex justify-center gap-8 text-[10px] uppercase tracking-widest text-stone-500 font-bold border-t border-stone-900/10 pt-8">
             <a href={BUSINESS_INFO.socials?.instagram || "#"} className="hover:text-stone-900 transition-colors">Instagram</a>
             <a href={BUSINESS_INFO.socials?.facebook || "#"} className="hover:text-stone-900 transition-colors">Facebook</a>
             <a href={BUSINESS_INFO.socials?.linkedin || "#"} className="hover:text-stone-900 transition-colors">LinkedIn</a>
          </div>
        </section>

      </div>
    </div>
  );
}

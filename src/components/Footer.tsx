import { Link } from "react-router-dom";
import { BUSINESS_INFO, HOURS, SOCIAL_LINKS } from "../lib/constants";
import { Instagram, Twitter, Facebook, Linkedin, MapPin, Globe, MessageSquare } from "lucide-react";

export function Footer() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram': return <Instagram className="h-5 w-5" />;
      case 'twitter': return <Twitter className="h-5 w-5" />;
      case 'facebook': return <Facebook className="h-5 w-5" />;
      case 'linkedin': return <Linkedin className="h-5 w-5" />;
      case 'whatsapp': return <MessageSquare className="h-5 w-5" />;
      case 'google': return <MapPin className="h-5 w-5" />;
      case 'yelp': return <Globe className="h-5 w-5" />;
      default: return <Globe className="h-5 w-5" />;
    }
  };

  return (
    <footer className="bg-stone-100 border-t border-stone-900/10 py-16 text-stone-600">
      <div className="mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif italic text-2xl font-medium text-stone-900 mb-4 tracking-tight">Just the Wright Interiors</h3>
            <p className="text-sm leading-relaxed mb-6 font-serif italic text-stone-500">
              {BUSINESS_INFO.tagline}
            </p>
            <div className="flex space-x-4 flex-wrap gap-y-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-900 transition-colors"
                  aria-label={link.name}
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] mb-6">Quick Links</h4>
            <ul className="space-y-4 text-xs uppercase tracking-[0.1em] font-medium">
              <li><Link to="/" className="hover:text-stone-900 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-stone-900 transition-colors">About Jordan</Link></li>
              <li><Link to="/portfolio" className="hover:text-stone-900 transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-stone-900 transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-stone-900 transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-stone-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] mb-6">Business Hours</h4>
            <ul className="space-y-3 text-xs uppercase tracking-widest text-stone-500">
              {HOURS.map(hour => (
                <li key={hour.day} className="flex flex-col gap-1 border-b border-stone-900/5 pb-2">
                  <span className="font-semibold text-stone-900">{hour.day}</span>
                  <span className="text-[10px]">{hour.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em] mb-6">Connect</h4>
            <p className="text-sm mb-6 font-serif italic text-stone-500">Let's create something beautiful together.</p>
            <a 
              href={BUSINESS_INFO.bookingUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full py-4 bg-accent hover:bg-accent-hover text-white text-center text-[10px] uppercase tracking-[0.3em] font-bold transition-colors"
            >
              Book Consultation
            </a>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-900/10 text-[9px] uppercase tracking-[0.25em] font-bold text-stone-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}</p>
          <a href={BUSINESS_INFO.googleBusinessProfile} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors mt-4 md:mt-0 flex items-center">
            <MapPin className="h-3 w-3 mr-2" /> Ohio Based | Serving 100 Mile Radius
          </a>
        </div>
      </div>
    </footer>
  );
}

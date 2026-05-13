import { SERVICES, BUSINESS_INFO } from "../lib/constants";

export function Services() {
  return (
    <div className="bg-stone-50 min-h-screen px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20 border-b border-stone-900/10 pb-16">
          <h2 className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em] mb-4">What We Do</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter text-stone-900 mb-6">Our Provided Services</h1>
          <p className="text-lg leading-relaxed text-stone-600 font-serif italic">
            From comprehensive interior design and home staging to seamless flooring solutions and commercial projects, we guarantee a top-notch experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col border-t border-stone-900/10 pt-6"
            >
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400">0{index + 1}</span>
              </div>
              <h3 className="font-serif italic text-2xl text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-stone-100 border border-stone-900/5 rounded-3xl p-12 lg:p-16 text-center shadow-sm">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-serif italic text-stone-900 mb-6">Ready to transform your space?</h3>
            <p className="text-stone-500 mb-10 text-sm leading-relaxed uppercase tracking-widest font-bold">
              Let's discuss your vision and how we can bring it to life, completely free of charge. Start the conversation today.
            </p>
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 bg-accent hover:bg-accent-hover text-white rounded-full text-center text-[10px] uppercase tracking-[0.3em] font-bold transition-colors shadow-sm"
            >
              Book Free Consultation
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

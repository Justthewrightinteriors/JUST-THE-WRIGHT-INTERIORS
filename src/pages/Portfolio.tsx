import { IMAGES, BUSINESS_INFO } from "../lib/constants";

export function Portfolio() {
  return (
    <div className="bg-stone-50 min-h-screen px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20 border-b border-stone-900/10 pb-16">
          <h2 className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em] mb-4">Our Craft</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter text-stone-900 mb-6">Design Portfolio</h1>
          <p className="text-lg leading-relaxed text-stone-600 font-serif italic">
            A curated selection of our minimalist modern aesthetic. Every space is uniquely tailored to the client, elevating their lifestyle and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.portfolio.map((img, i) => (
             <div key={i} className="group relative overflow-hidden aspect-[3/4] bg-stone-200 border border-stone-900/10">
               <img 
                 src={img} 
                 alt={`Minimalist Modern Design Portfolio - Project ${i + 1}`} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out mix-blend-multiply opacity-90 hover:opacity-100" 
               />
               <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
               <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <span className="text-white font-serif italic text-xl drop-shadow-md">Project 0{i+1}</span>
                 <span className="text-[10px] uppercase tracking-widest text-white/80 font-bold border-b border-white/40 pb-1">View</span>
               </div>
             </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
            <a 
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-sm py-5 bg-stone-900 hover:bg-stone-800 text-white text-center text-[10px] uppercase tracking-[0.3em] font-bold transition-colors"
            >
              Start your own project
            </a>
        </div>
      </div>
    </div>
  );
}

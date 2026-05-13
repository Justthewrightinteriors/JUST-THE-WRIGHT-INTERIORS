import { IMAGES } from "../lib/constants";

export function About() {
  return (
    <div className="bg-stone-50 min-h-screen px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 border-b border-stone-900/10 pb-16">
          <h2 className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em] mb-4">Founder & Vision</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter text-stone-900 leading-[0.9]">About Just the Wright Interiors</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-8 text-lg leading-relaxed text-stone-600 font-serif italic">
            <p>
              Just the Wright Interiors was founded in 2021 by Jordan Daniel Wright, Owner and Operator of the design firm. The business originally served Port Charlotte, Punta Gorda, and other communities throughout Southwest Florida.
            </p>
            <p>
              Eventually, growing an inevitable intolerance to the extreme heat and humidity led Just the Wright Interiors back to Ohio. We realized something profound: life feels like a blessing every day you get to wake up and live it—where people not only look comfortable, but we also feel comfortable, because, well, that's how HOME feels, doesn't it?
            </p>
            <p>
              Not only are we interested in getting to know you on a more personal level, however, we would also like for you to become a loyal customer. We promise to deliver to you an absolutely superior level of luxury interior design for the most affordable price point anywhere within a 100-mile radius of your home or business—guaranteed.
            </p>
            <div className="border-t border-stone-900/10 pt-8 mt-8">
              <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-4 not-italic">Our Promise</h3>
              <p>
                We work with our clients throughout the entire process and will always strive to provide you with the very best possible service for the most affordable price. We deliver a top-notch experience with our customer service team and a truly unique, superior end-result that is quite literally guaranteed to meet your expectations and leave you completely satisfied and smiling.
              </p>
            </div>
          </div>
          
          <div className="relative lg:sticky top-32">
            <div className="shadow-lg relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-3xl border border-stone-900/5">
              <img 
                src={IMAGES.about} 
                alt="Jordan Wright - Just the Wright Interiors" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white text-stone-900 p-8 pt-10 pl-10 rounded-3xl shadow-xl border border-stone-900/5 hidden sm:block max-w-[280px]">
              <h4 className="font-serif italic text-2xl mb-2 text-stone-900">Jordan Wright</h4>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Owner & Operator, defining minimalist luxury in Ohio.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

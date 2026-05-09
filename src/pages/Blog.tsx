import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    title: "Minimalist Modern Aesthetic: Interior Design Trends for 2026",
    excerpt: "Discover the latest minimalist home decor ideas and how to cultivate a luxurious, serene environment in your Ohio living space.",
    date: "May 2, 2026",
    category: "Interior Design",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Home Staging Tips for Southwest Florida and Ohio Real Estate",
    excerpt: "Maximize your property's market value with these professional home staging techniques that appeal to today's luxury buyers.",
    date: "April 18, 2026",
    category: "Home Staging",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Affordable Interior Decorating: Achieving High-End Looks",
    excerpt: "You don't need a limitless budget for superior luxury. Learn how to strategically invest in statement pieces and use color theory.",
    date: "March 30, 2026",
    category: "Decorating",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&w=800&q=80"
  }
];

export function Blog() {
  return (
    <div className="bg-stone-50 min-h-screen px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20 border-b border-stone-900/10 pb-16">
          <h2 className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em] mb-4">Design Journal</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter text-stone-900 mb-6">Thoughts on Home</h1>
          <p className="text-lg leading-relaxed text-stone-600 font-serif italic">
            Insights, inspiration, and expert advice on interior design, home staging, and living beautifully from Jordan Wright.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, index) => (
            <article key={index} className="flex flex-col items-start border border-stone-900/10 overflow-hidden group">
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-stone-200">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 border border-white/20 bg-stone-900/40 backdrop-blur-md px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-white">
                  {post.category}
                </div>
              </div>
              <div className="p-8 pb-10 bg-white w-full flex-grow flex flex-col">
                <div className="flex items-center gap-x-4 text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-4">
                  <time dateTime={post.date}>
                    {post.date}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-3 text-2xl font-serif italic text-stone-900 leading-tight mb-4">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-stone-600 mb-8 flex-grow font-serif italic">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-x-2 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-900 border-b border-stone-900 pb-1 w-max opacity-80 group-hover:opacity-100 transition-opacity">
                  Read article &rarr;
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-[12px] left-[12px] right-[12px] z-50 transition-all duration-300 border-b border-stone-900/10",
        isScrolled ? "bg-stone-50/95 backdrop-blur-md py-4" : "bg-stone-50 py-8"
      )}
    >
      <div className="mx-auto w-full px-6 lg:px-12">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-stone-500 mb-1">
                Est. 2021
              </span>
              <span className="font-serif text-2xl tracking-tight font-medium italic">
                Just the Wright Interiors
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center p-2.5 text-stone-900"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-[11px] uppercase tracking-[0.2em] font-medium transition-opacity hover:opacity-50",
                  pathname === item.path ? "opacity-100 border-b border-stone-900 pb-1" : "opacity-70 text-stone-900"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-stone-50 px-6 py-6 border-[12px] border-white">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex flex-col" onClick={() => setIsOpen(false)}>
              <span className="font-serif text-xl font-bold tracking-tight text-stone-900">
                Just the Wright
              </span>
              <span className="font-sans text-[10px] tracking-widest text-stone-500 uppercase">
                Interiors
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-stone-700"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-stone-500/10">
              <div className="space-y-2 py-6">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-stone-900 hover:bg-stone-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

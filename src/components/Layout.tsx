import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 selection:bg-accent selection:text-white relative">
      <Navbar />
      <main className="flex-grow pt-[104px]">
        <Outlet />
      </main>
      <Footer />
      {/* Decorative Editorial Border Overlay */}
      <div className="fixed inset-0 border-[12px] border-white pointer-events-none z-[100]"></div>
    </div>
  );
}

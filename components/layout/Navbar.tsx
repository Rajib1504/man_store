"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-50 left-0 right-0 transition-all duration-500 ease-in-out px-4 md:px-8 top-4 md:top-6"
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500 ease-in-out rounded-full px-6 py-3 backdrop-blur-md border",
            isScrolled
              ? "max-w-4xl bg-white/90 border-black/5 shadow-sm"
              : "max-w-5xl bg-black/30 border-white/15 shadow-none"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-serif font-bold text-xl tracking-tight z-50 uppercase transition-colors duration-500",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Fashion Baruipur
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-500",
                    isScrolled
                      ? pathname === link.href ? "text-black" : "text-black/60 hover:text-black"
                      : pathname === link.href ? "text-white" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="https://wa.me/918100192501"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 flex items-center gap-2",
                isScrolled
                  ? "bg-black text-white hover:bg-black/80"
                  : "bg-white text-black hover:bg-white/90"
              )}
            >
              WhatsApp <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden z-50 p-2 transition-colors duration-500",
              isScrolled ? "text-black" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col gap-6 text-2xl font-serif mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "transition-colors",
                    pathname === link.href ? "text-black" : "text-black/60"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto mb-12">
              <Link
                href="https://wa.me/918100192501"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white w-full py-4 rounded-full text-center font-semibold text-lg flex items-center justify-center gap-2"
              >
                Chat on WhatsApp <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Our Brands", href: "/brands" },
  { label: "About", href: "/about" },
  { label: "Dealers", href: "/dealers" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Check initial size
    handleResize();
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
        scrolled || isMobileMenuOpen 
          ? "py-4 shadow-sm border-border bg-background/95 backdrop-blur-md" 
          : "py-6 bg-background/70 bg-blur"
      )}
    >
      <div className="container-base flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-heading tracking-tight text-foreground"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          NAVNIND
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={cn(
            "hidden md:flex items-center transition-all duration-500 ease-in-out",
            scrolled ? "gap-6 text-sm" : "gap-10 text-base"
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-secondary-text hover:text-foreground transition-colors duration-300 tracking-wide font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA and Mobile Toggle */}
        <div className="flex items-center gap-4">
          

          {/* Render the hamburger button ONLY if we are explicitly on a mobile screen */}
          {(!isMounted || isMobile) && (
            <button
              className="md:hidden p-2 text-foreground focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-background border-t border-border mt-4"
          >
            <div className="container-base py-6 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-foreground/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

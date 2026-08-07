"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { AnimatedHeading } from "@/components/ui/animated-heading";

const brands = [
  {
    id: "navnind",
    name: "Navnind",
    tagline: "Quality You Can Trust.",
    description: "Navnind is our flagship brand, offering the perfect balance of quality, design, and value. Made with premium-quality paper and attractive covers, it’s crafted to deliver a smooth writing experience at an economical price.",
    logo: "/images/logo/navnindlogo2.png?v=1",
    image: "/images/logo/navnindlogo2.png",
    reverse: false,
  },
  {
    id: "wisdom",
    name: "Wisdom",
    tagline: "Smart Choice. Smart Value.",
    description: "Wisdom is our pocket-friendly range, offering dependable quality at an affordable price. Built for everyday use.",
    logo: "/images/logo/wisdomlogo2.png?v=1",
    image: "/images/logo/wisdomlogo2.png",
    reverse: true,
  },
  {
    id: "pooja",
    name: "Pooja",
    tagline: "Where Quality Meets Elegance.",
    description: "Pooja is our premium range, featuring superior quality paper and refined finishing for a smoother writing experience. Designed for those who appreciate a touch of elegance in their everyday stationery.",
    logo: "/images/logo/poojalogo2.png?v=1",
    image: "/images/logo/poojalogo2.png",
    reverse: false,
  },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      {/* Hero Section */}
      <section className="container-base mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-6">
            The Collections
          </p>
          <AnimatedHeading
            text="House of Navnind"
            as="h1"
            className="text-5xl md:text-7xl font-bold font-heading text-foreground mb-8"
          />
          <p className="text-xl md:text-2xl text-secondary-text leading-relaxed">
            Three distinct brands, united by one uncompromising commitment to quality. Discover the perfect notebook for your journey.
          </p>
        </motion.div>
      </section>

      {/* Brands Showcase */}
      <section className="container-base flex flex-col gap-4 lg:gap-8">
        {brands.map((brand) => (
          <div 
            key={brand.id}
            className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${brand.reverse ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: brand.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-[400px] aspect-square sm:max-w-[420px] lg:max-w-[440px] shrink-0 relative rounded-3xl overflow-hidden bg-pure-white flex items-center justify-center p-8 lg:p-10 group mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              <img
                src={brand.image}
                alt={`${brand.name} Notebook`}
                className="w-full h-full object-contain drop-shadow-2xl z-0 transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: brand.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              <h2 className="text-xl font-bold text-accent-gold uppercase tracking-widest mb-4">
                {brand.name}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
                {brand.tagline}
              </h3>
              <p className="text-lg text-secondary-text leading-relaxed">
                {brand.description}
              </p>
            </motion.div>
          </div>
        ))}
      </section>
    </main>
  );
}



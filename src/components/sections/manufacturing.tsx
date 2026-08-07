"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function Manufacturing() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[120vh] w-full overflow-hidden flex items-center justify-center bg-foreground text-pure-white"
    >
      {/* Cinematic Parallax Background */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
      >
        <Image
          src="/images/Premium Notebooks/Product_3/front.jpg"
          alt="Manufacturing Excellence"
          fill
          className="object-cover opacity-40 brightness-75 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container-base relative z-10 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8">
          The Art of <br />
          <span className="italic text-accent-gold font-normal">Manufacturing</span>
        </h2>
        <p className="text-xl max-w-2xl text-pure-white/80 mb-20">
          Our state-of-the-art facilities combine traditional craftsmanship with precision engineering. Every notebook is a testament to our dedication to perfection.
        </p>

        {/* Animated Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl">
          <div className="flex flex-col items-center">
             <span className="text-5xl md:text-6xl font-bold font-numbers text-accent-gold mb-2">50K+</span>
             <span className="text-sm uppercase tracking-widest text-pure-white/70">Daily Production</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-5xl md:text-6xl font-bold font-numbers text-accent-gold mb-2">100%</span>
             <span className="text-sm uppercase tracking-widest text-pure-white/70">Quality Checked</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-5xl md:text-6xl font-bold font-numbers text-accent-gold mb-2">40+</span>
             <span className="text-sm uppercase tracking-widest text-pure-white/70">Years Heritage</span>
          </div>
        </div>
      </div>
    </section>
  );
}

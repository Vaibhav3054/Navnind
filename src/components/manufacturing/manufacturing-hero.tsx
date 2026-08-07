"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export function ManufacturingHero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-foreground min-h-[80vh] flex flex-col justify-center text-pure-white">
      {/* Noise / Film Grain Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container-base relative z-10">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
            <p className="text-sm font-bold text-pure-white uppercase tracking-widest">
              Live from the Factory Floor
            </p>
          </div>
          <AnimatedHeading
            text="The Anatomy of a Masterpiece."
            as="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 leading-tight"
          />
          <p className="text-xl md:text-2xl text-pure-white/70 max-w-2xl leading-relaxed font-light">
            Step inside our manufacturing facilities. Witness the precise engineering, the roar of the presses, and the silent dedication to perfect craftsmanship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

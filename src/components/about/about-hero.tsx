"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export function AboutHero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-pure-white min-h-[70vh] flex flex-col justify-center">
      {/* Subtle Paper Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      <div className="container-base relative z-10">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          <p className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-6">
            Our Heritage
          </p>
          <AnimatedHeading
            text="Crafting the Canvas for your Thoughts."
            as="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-foreground mb-8 leading-tight"
          />
          <p className="text-xl md:text-2xl text-secondary-text max-w-2xl leading-relaxed">
            For over three decades, NAVNIND has been the silent partner in boardrooms, classrooms, and studios worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

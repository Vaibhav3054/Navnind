"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function FounderQuote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-pure-white relative overflow-hidden" ref={ref}>
      {/* Paper texture overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      <div className="container-base relative z-10 flex items-center justify-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-4xl text-center"
        >
          <span className="text-8xl text-accent-gold/20 font-heading leading-none absolute -top-10 left-10 md:-left-10 select-none">
            &ldquo;
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground leading-relaxed italic mb-8 relative z-10">
            A notebook is more than bound paper. It is a sanctuary for ideas, a silent partner in your creative journey. We don't just manufacture stationery; we craft the foundation for your next great story.
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-[1px] bg-accent-gold mb-6" />
            <p className="text-xl font-semibold text-foreground uppercase tracking-widest">
              Founder
            </p>
            <p className="text-secondary-text text-sm uppercase tracking-widest mt-2">
              Uttam Industries
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

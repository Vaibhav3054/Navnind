"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function FounderMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-muted-beige relative overflow-hidden" ref={ref}>
      {/* Paper texture overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      <div className="container-base relative z-10 flex justify-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-3xl bg-pure-white p-12 md:p-20 rounded-3xl shadow-sm border border-border"
        >
          <p className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-12 text-center">
            A Message From The Founder
          </p>
          
          <div className="space-y-6 text-lg md:text-xl text-foreground font-heading leading-relaxed mb-16">
            <p>
              "When I established Uttam Industries in 1985, I did not just want to sell paper. I wanted to create companions for the mind.
            </p>
            <p>
              A notebook is a deeply personal object. It is the silent confidant to your grandest dreams and your quietest fears. It holds your equations, your sketches, your daily to-dos, and your poetry. It is a mirror of your intellect.
            </p>
            <p>
              At NAVNIND, we carry the weight of this responsibility in every book we bind. We do not compromise on quality because we know that the canvas must be worthy of the art. 
            </p>
            <p>
              Thank you for trusting us with your stories for the past 40 years. We look forward to being a part of your journey for decades to come."
            </p>
          </div>

          <div className="flex flex-col items-end border-t border-border pt-8">
            <h4 className="text-2xl font-heading font-semibold text-foreground mb-1">
              Founder
            </h4>
            <p className="text-secondary-text uppercase tracking-widest text-sm">
              Uttam Industries / NAVNIND
            </p>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

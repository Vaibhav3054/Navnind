"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { AnimatedHeading } from "@/components/ui/animated-heading";

function Counter({ from, to }: { from: number; to: number }) {
  // A simple counting animation effect for demonstration
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="inline-block"
    >
      {to}
    </motion.span>
  );
}

export function BrandIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-pure-white" ref={ref}>
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 35+ Years Counter */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="flex flex-col items-start"
          >
            <div className="relative">
              <h2 className="text-[120px] md:text-[180px] font-bold text-heading leading-none text-accent-gold/20 -ml-2">
                <Counter from={0} to={40} />+
              </h2>
              <div className="absolute inset-0 flex flex-col justify-center px-4 pointer-events-none">
                <AnimatedHeading
                  text="Years of Excellence"
                  as="h3"
                  className="text-4xl md:text-5xl font-bold text-heading text-foreground mb-4"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial text & timeline */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <p className="text-xl text-secondary-text leading-relaxed font-sans max-w-lg">
              For over three decades, Uttam Industries has engineered the finest quality stationery for the modern creator. Every NAVNIND product represents our commitment to precision, durability, and the timeless art of writing.
            </p>

            <div className="pt-8 border-t border-border flex items-center justify-between w-full max-w-lg">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-accent-gold mb-2" />
                <span className="text-xs font-bold text-numbers text-foreground uppercase tracking-widest">1985</span>
                <span className="text-[10px] text-secondary-text uppercase tracking-wider mt-1">Founded</span>
              </div>
              <div className="flex-1 h-[1px] bg-border mx-4" />
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-border mb-2 relative">
                  <div className="absolute inset-1 rounded-full bg-accent-gold/50" />
                </div>
                <span className="text-xs font-bold text-numbers text-foreground uppercase tracking-widest">1998</span>
                <span className="text-[10px] text-secondary-text uppercase tracking-wider mt-1">Expansion</span>
              </div>
              <div className="flex-1 h-[1px] bg-border mx-4" />
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-border mb-2 relative">
                   <div className="absolute inset-0.5 rounded-full bg-foreground" />
                </div>
                <span className="text-xs font-bold text-numbers text-foreground uppercase tracking-widest">2026</span>
                <span className="text-[10px] text-foreground font-semibold uppercase tracking-wider mt-1">Navnind</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

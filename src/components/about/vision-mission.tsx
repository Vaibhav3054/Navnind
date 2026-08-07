"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function VisionMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-pure-white" ref={ref}>
      <div className="container-base">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-24">
          
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="flex flex-col justify-center p-12 lg:p-16 rounded-3xl bg-muted-beige border border-border"
          >
            <p className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-6">Our Vision</p>
            <h3 className="text-3xl md:text-4xl font-heading text-foreground mb-6 leading-tight">
              To be the global benchmark for premium stationery.
            </h3>
            <p className="text-secondary-text leading-relaxed">
              We envision a world where the act of writing remains a sacred ritual, unaffected by the digital noise. NAVNIND strives to set the ultimate standard in quality, inspiring creators everywhere to document their legacy.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center p-12 lg:p-16 rounded-3xl bg-foreground text-pure-white border border-foreground"
          >
            <p className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-6">Our Mission</p>
            <h3 className="text-3xl md:text-4xl font-heading text-pure-white mb-6 leading-tight">
              Crafting tools that empower the mind.
            </h3>
            <p className="text-pure-white/80 leading-relaxed">
              We are dedicated to blending time-honored craftsmanship with modern innovation. Our mission is to sustainably manufacture notebooks that offer an unparalleled tactile experience, supporting education, business, and art.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

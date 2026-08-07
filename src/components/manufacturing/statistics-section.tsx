"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "50,000+", label: "Units Daily Capacity" },
  { value: "35", label: "Years of Experience" },
  { value: "100%", label: "Quality Inspected" },
  { value: "15+", label: "Global Markets" },
];

export function StatisticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-muted-beige border-y border-border" ref={ref}>
      <div className="container-base">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="text-5xl md:text-6xl font-bold font-numbers text-foreground mb-4">
                {stat.value}
              </div>
              <div className="w-12 h-px bg-accent-gold mb-4" />
              <div className="text-sm uppercase tracking-widest text-secondary-text font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

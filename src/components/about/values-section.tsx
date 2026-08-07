"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const values = [
  {
    number: "01",
    title: "Uncompromising Quality",
    description: "From paper selection to the final stitch, excellence is non-negotiable in every batch we produce.",
  },
  {
    number: "02",
    title: "Artisanal Craftsmanship",
    description: "We honor the tradition of bookbinding, marrying it with cutting-edge manufacturing technology.",
  },
  {
    number: "03",
    title: "Sustainable Practices",
    description: "Our responsibility extends beyond the desk. We are committed to ethical sourcing and eco-friendly production.",
  },
  {
    number: "04",
    title: "Empowering Minds",
    description: "We believe in the power of the written word to educate, organize, and inspire global change.",
  },
];

export function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-background border-y border-border" ref={ref}>
      <div className="container-base">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Core <span className="italic text-accent-gold font-normal">Values</span>
          </h2>
          <p className="text-xl text-secondary-text">
            The principles that have guided Uttam Industries and the NAVNIND brand for over 40 years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {values.map((value, idx) => (
            <motion.div
              key={value.number}
              variants={fadeUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ delay: idx * 0.1 }}
              className="group flex gap-6"
            >
              <div className="text-3xl font-numbers font-bold text-border group-hover:text-accent-gold transition-colors duration-500">
                {value.number}
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-text leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

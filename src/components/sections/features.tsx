"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Award, BookOpen, Layers, Factory, ShieldCheck, Handshake } from "lucide-react";

const features = [
  {
    title: "40+ Years Experience",
    description: "Decades of mastery in crafting notebooks that stand the test of time.",
    icon: Award,
  },
  {
    title: "Premium Paper",
    description: "Sourced globally to ensure the smoothest writing experience without bleed-through.",
    icon: BookOpen,
  },
  {
    title: "Durable Binding",
    description: "Engineered to lay flat and hold pages securely, from the first page to the last.",
    icon: Layers,
  },
  {
    title: "Precision Manufacturing",
    description: "State-of-the-art machinery ensuring every cut, fold, and stitch is flawless.",
    icon: Factory,
  },
  {
    title: "Quality Control",
    description: "Rigorous multi-stage inspections guarantee excellence in every batch.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Partnerships",
    description: "Building long-lasting relationships with dealers and distributors worldwide.",
    icon: Handshake,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-muted-beige relative overflow-hidden" ref={ref}>
      <div className="container-base">
        <div className="mb-20 md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-bold text-heading text-foreground mb-6">
            Why Choose NAVNIND
          </h2>
          <p className="text-xl text-secondary-text max-w-2xl">
            Our commitment to quality goes beyond the surface. We engineer every product with meticulous attention to detail.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-pure-white border border-border shadow-sm hover:shadow-md transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-full bg-muted-beige flex items-center justify-center mb-6 text-foreground group-hover:bg-foreground group-hover:text-pure-white transition-colors duration-500">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-heading tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-secondary-text leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

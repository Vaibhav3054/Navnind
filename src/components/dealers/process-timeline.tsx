"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Application",
    description: "Submit the dealer enquiry form below with your business details and expected volume.",
  },
  {
    number: "02",
    title: "Verification",
    description: "Our B2B team will review your application and conduct a brief background check within 48 hours.",
  },
  {
    number: "03",
    title: "Onboarding",
    description: "Upon approval, you'll receive your dedicated account manager, pricing tiers, and catalog access.",
  },
  {
    number: "04",
    title: "Dispatch",
    description: "Place your first wholesale order and receive priority shipping through our delivery network.",
  },
];

export function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-pure-white" ref={ref}>
      <div className="container-base">
        <div className="text-center mb-20">
          <motion.h2 
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6"
          >
            The Onboarding <span className="italic text-accent-gold font-normal">Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Horizontal connecting line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-border z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-pure-white border-2 border-accent-gold flex items-center justify-center mb-8 shadow-sm">
                <span className="text-3xl font-numbers font-bold text-foreground">{step.number}</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-secondary-text leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

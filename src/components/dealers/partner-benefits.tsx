"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { PackageOpen, TrendingUp, Truck, Headphones } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8 text-accent-gold" strokeWidth={1.5} />,
    title: "High Margin Potential",
    description: "Our premium positioning allows for healthy retail margins without compromising on the end-user value.",
  },
  {
    icon: <PackageOpen className="w-8 h-8 text-accent-gold" strokeWidth={1.5} />,
    title: "Massive Supply Capacity",
    description: "With automated German manufacturing lines, we fulfill high-volume institutional and distributor orders with ease.",
  },
  {
    icon: <Truck className="w-8 h-8 text-accent-gold" strokeWidth={1.5} />,
    title: "Robust Delivery Network",
    description: "Benefit from our established logistics network ensuring prompt, undamaged deliveries across regions.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-accent-gold" strokeWidth={1.5} />,
    title: "Dedicated B2B Support",
    description: "Every partner is assigned a dedicated account manager to handle orders, queries, and custom institutional requests.",
  },
];

export function PartnerBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-muted-beige" ref={ref}>
      <div className="container-base">
        <div className="text-center mb-20">
          <motion.h2 
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6"
          >
            Why Partner With Us?
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary-text max-w-2xl mx-auto"
          >
            A partnership with Uttam Industries is built on reliability, mutual growth, and a shared commitment to quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ delay: idx * 0.1 }}
              className="bg-pure-white p-8 rounded-3xl shadow-sm border border-border group hover:border-accent-gold transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted-beige flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-secondary-text leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

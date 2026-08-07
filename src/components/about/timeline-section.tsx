"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const milestones = [
  {
    year: "1985",
    title: "The Beginning",
    description: "Our journey in the notebook manufacturing industry began with a commitment to quality, craftsmanship, and trust. Built on strong values and decades of expertise, we laid the foundation for a legacy that continues to grow.",
  },
  {
    year: "1998",
    title: "Expansion",
    description: "As demand grew, we expanded our manufacturing capabilities and diversified our product range, strengthening our presence in the stationery industry and laying the groundwork for future growth.",
  },
  {
    year: "2010",
    title: "Commitment to Excellence",
    description: "We refined our manufacturing processes and implemented stricter quality control measures, ensuring every notebook delivered exceptional consistency, durability, and performance.",
  },
  {
    year: "2022",
    title: "Strengthening Our Network",
    description: "With decades of trust behind us, we expanded our dealer and distribution network, forging lasting partnerships and making our products accessible to customers across more regions.",
  },
  {
    year: "2023",
    title: "A Modern Transformation",
    description: "We invested in advanced automated machinery, significantly increasing production capacity, improving precision, and reinforcing our commitment to delivering superior quality at scale.",
  },
  {
    year: "2026",
    title: "A New Chapter",
    description: "Building on over 40 years of industry experience, we continue to evolve with a stronger brand identity, an expanded portfolio of notebook brands, and a vision to serve customers across India with uncompromising quality.",
  },
];

export function TimelineSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-pure-white relative" ref={containerRef}>
      <div className="container-base">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            The NAVNIND <span className="italic text-accent-gold font-normal">Journey</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-px bg-accent-gold -translate-x-1/2 origin-top"
          />

          <div className="space-y-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return <TimelineItem key={milestone.year} milestone={milestone} isEven={isEven} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ milestone, isEven }: { milestone: any; isEven: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative flex items-center md:justify-between flex-col md:flex-row" ref={ref}>
      {/* Node indicator */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-pure-white border-2 border-accent-gold -translate-x-1/2 z-10 shadow-sm" />

      {/* Left / Right Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:pl-12 md:ml-auto"}`}
      >
        <span className="text-4xl font-numbers font-bold text-accent-gold mb-2 block">
          {milestone.year}
        </span>
        <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
          {milestone.title}
        </h3>
        <p className="text-secondary-text leading-relaxed">
          {milestone.description}
        </p>
      </motion.div>
    </div>
  );
}

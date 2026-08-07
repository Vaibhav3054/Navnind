"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ShieldCheck } from "lucide-react";

export function QualityPromise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-pure-white" ref={ref}>
      <div className="container-base max-w-4xl text-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full bg-muted-beige flex items-center justify-center mb-10">
            <ShieldCheck className="w-10 h-10 text-accent-gold" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-8 leading-tight">
            The NAVNIND Guarantee.
          </h2>
          
          <p className="text-xl text-secondary-text leading-relaxed mb-12">
            Every notebook that leaves our factory floor has been touched, inspected, and approved by human hands. We blend automated precision with manual quality assurance to guarantee that your NAVNIND notebook is flawless. 
          </p>

          <div className="w-16 h-px bg-border" />
        </motion.div>
      </div>
    </section>
  );
}

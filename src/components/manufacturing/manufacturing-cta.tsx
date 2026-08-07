"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export function ManufacturingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-foreground text-pure-white relative overflow-hidden" ref={ref}>
      {/* Noise / Film Grain Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      <div className="container-base relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-2xl flex flex-col items-center"
        >
          <p className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-6">
            Partner With Us
          </p>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">
            Experience the <br />
            <span className="italic font-normal">Difference</span>
          </h2>
          <p className="text-xl text-pure-white/80 mb-12 leading-relaxed">
            Ready to elevate your brand with our premium notebooks? Our team is here to collaborate and bring your vision to life. Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" className="rounded-full px-10 bg-pure-white text-foreground hover:bg-pure-white/90">
              Get In Touch
            </Button>
            <Button href="/products" size="lg" variant="outline" className="rounded-full px-10 border-pure-white/20 text-black hover:bg-pure-white/10 hover:text-pure-white">
            
              View Catalog
              
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

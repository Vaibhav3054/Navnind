"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Leaf, Recycle, Droplets } from "lucide-react";

export function Sustainability() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-pure-white relative overflow-hidden" ref={ref}>
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Reveal */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden order-1 lg:order-1">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/images/img_abt/aboutimage4.jpg"
                alt="Eco-friendly notebooks"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="order-2 lg:order-2"
          >
            <p className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-6">
              Our Responsibility
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-8">
              Conscious <br />
              <span className="italic text-accent-gold font-normal">Creation</span>
            </h2>
            <p className="text-lg text-secondary-text leading-relaxed mb-12">
              The paper industry has a profound impact on our planet. We recognize this, which is why sustainability is woven into the very fabric of Uttam Industries. We are committed to leaving a lighter footprint.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-muted-beige flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-foreground mb-2">Responsible Sourcing</h4>
                  <p className="text-secondary-text text-sm leading-relaxed">We source paper from trusted mills committed to responsible forestry.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-muted-beige flex items-center justify-center shrink-0">
                  <Recycle className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-foreground mb-2">Efficient Manufacturing</h4>
                  <p className="text-secondary-text text-sm leading-relaxed">Modern machinery minimizes waste while ensuring precision and consistency.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-muted-beige flex items-center justify-center shrink-0">
                  <Droplets className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-foreground mb-2">Built to Last</h4>
                  <p className="text-secondary-text text-sm leading-relaxed">Durable notebooks designed for everyday performance and long-term use.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-muted-beige relative overflow-hidden" ref={ref}>
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-8">
              40+ Years of <br />
              <span className="italic text-accent-gold font-normal">Excellence</span>
            </h2>
            <div className="space-y-6 text-lg text-secondary-text leading-relaxed">
              <p>
                What began as a modest endeavor to provide high-quality stationery to local schools has blossomed into a global legacy. Under the stewardship of Uttam Industries, the NAVNIND brand was born out of a simple belief: that every great idea deserves a worthy canvas.
              </p>
              <p>
                Over the past 40+ years, we have continuously refined our craft. From selecting the finest pulps to perfecting the binding processes that ensure our notebooks lie flat, every decade has been a milestone in our pursuit of perfection.
              </p>
              <p>
                Today, millions of students, artists, and professionals rely on our products to capture their most important thoughts, sketches, and plans.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
              <div>
                <p className="text-4xl font-numbers font-bold text-foreground">1985</p>
                <p className="text-sm uppercase tracking-widest text-secondary-text mt-1">Founded</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-4xl font-numbers font-bold text-foreground">30M+</p>
                <p className="text-sm uppercase tracking-widest text-secondary-text mt-1">Books Crafted</p>
              </div>
            </div>
          </motion.div>

          {/* Image Reveal */}
          <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden w-full max-w-md mx-auto lg:max-w-none">
            <motion.div
              initial={{ y: 0 }}
              animate={isInView ? { y: "-100%" } : { y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-10 bg-muted-beige"
            />
            <Image
              src="/images/Big Royal Notebooks/Product_3/front.webp"
              alt="NAVNIND Heritage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

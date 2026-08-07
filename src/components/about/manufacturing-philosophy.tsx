"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export function ManufacturingPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-foreground text-pure-white relative overflow-hidden"
    >
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Parallax Image */}
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden order-2 lg:order-1">
             <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
               <Image
                 src="/images/img_abt/aboutimage3.jpg"
                 alt="Thick premium paper stack"
                 fill
                 className="object-cover opacity-80"
                 sizes="(max-width: 1024px) 100vw, 50vw"
               />
             </motion.div>
             <div className="absolute inset-0 bg-foreground/20 mix-blend-multiply" />
          </div>

          {/* Content */}
          <motion.div
            ref={textRef}
            variants={fadeUp}
            initial="initial"
            animate={isTextInView ? "animate" : "initial"}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-6">
              The Philosophy
            </p>
            <AnimatedHeading
              text="Precision in every Thread & Fiber"
              as="h2"
              className="text-4xl md:text-5xl font-bold font-heading mb-8"
            />
            <div className="space-y-6 text-pure-white/80 leading-relaxed text-lg">
              <p>
                At Uttam Industries, manufacturing is not merely a process—it is an obsession. We view every notebook as a piece of architectural engineering.
              </p>
              <p>
                Our philosophy centers around the concept of 'Invisible Perfection'. When you use a NAVNIND notebook, you shouldn't notice the binding, the cut, or the ruling. You should only experience the seamless flow of your pen across the page.
              </p>
              <p>
                To achieve this, we source our pulps from sustainable forests, maintaining a strict GSM tolerance. Our binding machines are calibrated to micro-millimeters, ensuring the spine flexes just right, allowing the book to lay completely flat.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

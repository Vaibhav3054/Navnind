"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const FLOATING_NOTEBOOKS = [
  {
    src: "/images/A4/176_Pages/Product_2/incline.webp",
    alt: "A4 Notebook",
    className: "absolute -left-[10%] md:-left-[5%] top-[5%] md:top-[10%] w-[200px] md:w-[400px] h-auto opacity-20 md:opacity-40 scale-75 md:scale-90",
    yOffset: [0, -30, 0],
    duration: 8,
  },
  {
    src: "/images/Big Royal Notebooks/Product_2/incline.webp",
    alt: "Big Royal Notebook",
    className: "absolute -right-[15%] md:right-[5%] top-[15%] md:top-[20%] w-[200px] md:w-[350px] h-auto opacity-15 md:opacity-30 scale-75 md:scale-75",
    yOffset: [0, 40, 0],
    duration: 10,
  },
  {
    src: "/images/Premium Notebooks/Product_3/incline.jpg",
    alt: "Premium Notebook",
    className: "absolute left-1/2 -translate-x-1/2 bottom-[0%] md:bottom-[-10%] h-[80px] md:h-[120px] w-auto opacity-[0.05] md:opacity-10",
    yOffset: [0, -5, 0],
    duration: 10,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-background pt-24 md:pt-32 pb-12">
      {/* Paper texture overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      {/* Sunlight Gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

      {/* Floating Notebooks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {FLOATING_NOTEBOOKS.map((notebook, idx) => (
          <motion.div
            key={idx}
            className={cn(notebook.className, "will-change-transform")}
            animate={{ y: notebook.yOffset }}
            transition={{
              duration: notebook.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={notebook.src}
              alt={notebook.alt}
              width={600}
              height={800}
              className={cn(
                idx === 2 ? "w-auto h-full" : "w-full h-auto",
                "object-contain transform -rotate-12"
              )}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container-base relative z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="text-6xl md:text-8xl font-bold text-heading leading-[1.1] text-foreground mb-8"
        >
          Where Every Page Begins a Story.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-secondary-text max-w-2xl mb-12 leading-relaxed"
        >
          Premium notebooks crafted for students, professionals and creators.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Button href="/products" size="lg" className="rounded-full w-full sm:w-auto">
            Explore Products
          </Button>
          <Button href="/contact" size="lg" variant="outline" className="rounded-full w-full sm:w-auto border-border">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image, { ImageProps } from "next/image";

export function RevealImage({ className = "", alt, ...props }: ImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.1, filter: "blur(4px)", opacity: 0 }}
        animate={isInView ? { scale: 1, filter: "blur(0px)", opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full relative"
      >
        <Image alt={alt} className="object-cover" fill {...props} />
      </motion.div>
      
      {/* Reveal Overlay Mask */}
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: "-100%" } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-muted-beige z-10"
      />
    </div>
  );
}

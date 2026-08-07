"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface ParallaxImageProps extends ImageProps {
  parallaxOffset?: number;
}

export function ParallaxImage({ parallaxOffset = 50, className = "", alt, ...props }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Very subtle parallax to avoid distraction and layout shifts
  const y = useTransform(scrollYProgress, [0, 1], [-parallaxOffset, parallaxOffset]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image alt={alt} className="object-cover" fill {...props} />
      </motion.div>
    </div>
  );
}

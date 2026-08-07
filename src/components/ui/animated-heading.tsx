"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
}

export function AnimatedHeading({ text, className = "", as: Component = "h2", delay = 0 }: AnimatedHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Split text into words, then words into characters for precise staggering
  const words = text.split(" ").map(word => word.split(""));
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Component className={className} ref={ref}>
      <motion.span
        style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.map((char, charIndex) => (
              <motion.span
                variants={child}
                key={charIndex}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {/* Add space after word unless it's the last word */}
            {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

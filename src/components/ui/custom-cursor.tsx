"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Attach listeners to interactive elements
    const interactiveSelectors = "a, button, input, select, textarea, [data-interactive]";
    const attachHoverListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    attachHoverListeners();

    // Create a MutationObserver to listen for newly added elements
    const observer = new MutationObserver((mutations) => {
      let shouldAttach = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldAttach = true;
          break;
        }
      }
      if (shouldAttach) attachHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      observer.disconnect();
    };
  }, [isVisible]);

  // Hide default cursor on devices that support hover
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      document.body.style.cursor = "none";
      const style = document.createElement("style");
      style.innerHTML = `* { cursor: none !important; }`;
      document.head.appendChild(style);
      return () => {
        document.body.style.cursor = "";
        document.head.removeChild(style);
      };
    }
  }, []);

  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) {
    return null; // Don't render on touch devices
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-accent-gold mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovered ? 24 : 8),
        y: mousePosition.y - (isHovered ? 24 : 8),
        width: isHovered ? 48 : 16,
        height: isHovered ? 48 : 16,
        opacity: isVisible ? (isHovered ? 0.5 : 1) : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}

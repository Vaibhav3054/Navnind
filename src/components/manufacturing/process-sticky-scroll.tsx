"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processes = [
  {
    id: "selection",
    title: "Paper Selection",
    description: "Every batch begins with rigorous GSM testing. We select only the finest virgin and recycled pulps that pass our strict opacity and smoothness thresholds.",
    image: "/images/Big Royal Notebooks/Product_3/front.webp",
  },
  {
    id: "printing",
    title: "Precision Printing",
    description: "Our German offset presses lay down perfectly registered ruling. Utilizing soy-based inks, we ensure crisp, non-distracting lines that fade into the background of your thoughts.",
    image: "/images/Premium Notebooks/Product_2/front.webp",
  },
  {
    id: "binding",
    title: "Architectural Binding",
    description: "Whether it is Section Sewing, Perfect Binding, or Wire-O, our machines are calibrated to micro-millimeters to guarantee a lay-flat experience.",
    image: "/images/Spiral Notebooks/Product_1/front.webp",
  },
  {
    id: "trimming",
    title: "Guillotine Trimming",
    description: "The final cut. High-carbon steel blades trim the bound books to their exact dimensions, resulting in the flawless, smooth edges NAVNIND is known for.",
    image: "/images/Premium Notebooks/Product_1/front.webp",
  },
];

export function ProcessStickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Pin the left column while the right column scrolls
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftColRef.current,
        pinSpacing: false,
      });

      // Animate images based on which text step is in the viewport
      const steps = gsap.utils.toArray<HTMLElement>(".process-step");
      const images = gsap.utils.toArray<HTMLElement>(".process-image");

      steps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              // Fade out all images
              gsap.to(images, { opacity: 0, duration: 0.5, ease: "power2.inOut" });
              // Fade in the current image
              gsap.to(images[i], { opacity: 1, duration: 0.5, ease: "power2.inOut", scale: 1.05 });
            } else {
              // Reset scale when not active
              gsap.to(images[i], { scale: 1, duration: 0.5 });
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="bg-background relative text-foreground pb-32"
    >
      <div className="container-base flex flex-col lg:flex-row relative">
        
        {/* Left Pinned Column: Images */}
        <div 
          ref={leftColRef}
          className="lg:w-1/2 h-screen flex items-center justify-center p-6 lg:p-12 z-10"
        >
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-muted-beige border border-border shadow-2xl">
            {processes.map((process, i) => (
              <div 
                key={process.id}
                className={`process-image absolute inset-0 w-full h-full ${i === 0 ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
              >
                <Image
                  src={process.image}
                  alt={process.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-background/10 mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Scrolling Column: Text */}
        <div 
          ref={rightColRef}
          className="lg:w-1/2 py-[50vh] px-6 lg:pl-20 z-20 flex flex-col gap-[70vh]"
        >
          {processes.map((process, i) => (
            <div 
              key={process.id}
              className="process-step flex flex-col justify-center min-h-[30vh]"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl font-numbers font-bold text-accent-gold">
                  0{i + 1}
                </span>
                <div className="h-px w-12 bg-accent-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8">
                {process.title}
              </h2>
              <p className="text-xl text-secondary-text leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

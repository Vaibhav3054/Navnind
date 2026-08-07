"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages = [
  {
    src: "/images/Practical Notebooks/Product_2/side.webp",
    alt: "Inspection process",
    title: "Optical Inspection",
  },
  {
    src: "/images/Hardbound Notebooks/Product_1/side.webp",    
    alt: "Stacking",
    title: "Batch Stacking",
  },
  {
    src: "/images/Premium Notebooks/Product_3/side.jpg",
    alt: "Packaging",
    title: "Automated Packaging",
  },
  {
    src: "/images/Practical Notebooks/Product_3/side.webp",
    alt: "Quality check",
    title: "Final QA",
  },
];

export function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const scrollWrapper = scrollWrapperRef.current;
      
      if (!container || !scrollWrapper) return;

      // Calculate the total scroll distance based on the wrapper width
      const getScrollAmount = () => -(scrollWrapper.scrollWidth - window.innerWidth);

      const tween = gsap.to(scrollWrapper, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-pure-white py-24 overflow-hidden h-screen flex flex-col justify-center">
      <div className="container-base mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
          The Assembly <span className="italic text-accent-gold font-normal">Line</span>
        </h2>
      </div>

      <div ref={scrollWrapperRef} className="flex gap-8 px-6 md:px-12 w-max">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="relative w-[70vw] md:w-[40vw] lg:w-[30vw] aspect-[4/3] rounded-2xl overflow-hidden group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 70vw, 30vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-pure-white">
              <h3 className="text-xl font-heading font-semibold">{img.title}</h3>
            </div>
          </div>
        ))}
        {/* Empty padding element at the end for smooth scrolling completion */}
        <div className="w-[10vw]" />
      </div>
    </section>
  );
}

"use client";


import { FlipBook } from '@/components/flipbook';
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATALOG_PAGES = [
  {
    title: "NAVNIND Heritage",
    subtitle: "The art of everyday notebooks",
    text: "Explore our premium notebook collection designed to capture your ideas with premium paper and timeless style.",
  },
  {
    title: "Fine Paper",
    subtitle: "Smooth pages, matte covers",
    text: "Each page is selected for ideal ink flow and a luxurious writing feel, from first draft to final note.",
  },
  {
    title: "Binding Craft",
    subtitle: "Durable & flat lay",
    text: "Our notebooks open effortlessly and stay flat so your writing experience remains seamless on every spread.",
  },
  {
    title: "Notebook Stories",
    subtitle: "Designed for creators",
    text: "From students to professionals, NAVNIND notebooks celebrate ideas, sketches, and every sentence in between.",
  },
];

const COVER_PAGE = {
  title: "NAVNIND Catalog",
  subtitle: "Flip through our story",
  text: "Turn the pages to discover premium notebook designs, paper finishes, and the craftsmanship behind every book.",
};

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [pageIndex, setPageIndex] = useState(0);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev" | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const leftPage = pageIndex === 0 ? COVER_PAGE : CATALOG_PAGES[pageIndex - 1];
  const rightPage = CATALOG_PAGES[pageIndex];
  const nextPage = CATALOG_PAGES[Math.min(pageIndex + 1, CATALOG_PAGES.length - 1)];
  const prevPage = pageIndex > 0 ? CATALOG_PAGES[pageIndex - 1] : COVER_PAGE;

  const handleNext = () => {
    if (isFlipping || pageIndex >= CATALOG_PAGES.length - 1) return;
    setFlipDirection("next");
    setIsFlipping(true);
  };

  const handlePrev = () => {
    if (isFlipping || pageIndex <= 0) return;
    setFlipDirection("prev");
    setIsFlipping(true);
  };

  const handleFlipComplete = () => {
    if (!flipDirection) return;
    setPageIndex((prev) => (flipDirection === "next" ? prev + 1 : prev - 1));
    setFlipDirection(null);
    setIsFlipping(false);
  };

  return (
    <section className="py-32 bg-muted-beige relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pure-white/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-base relative z-10">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid items-center gap-16 lg:grid-cols-[1fr_860px]"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6">
              Browse Our <span className="italic text-accent-gold font-normal">Interactive Flipbook</span>
            </h2>
            <p className="text-xl text-secondary-text mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Experience a catalog that mimics a real book. Turn each page and preview NAVNIND’s premium notebooks with a tactile, 3D feel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button href="/products" size="lg" className="rounded-full px-10">
                View Full Catalog
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="rounded-full px-10">
                Talk to Sales
              </Button>
            </div>
          </div>

          <div className="mx-auto lg:mx-0 w-full max-w-full lg:max-w-[860px] overflow-hidden">
            <FlipBook />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

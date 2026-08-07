"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGM0VGRTgiLz48L3N2Zz4=";

export function ImageGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Main Image with Hover Zoom */}
      <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl bg-muted-beige overflow-hidden border border-border group cursor-crosshair">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Product image ${currentIndex + 1}`}
              fill
              priority
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="object-contain transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "relative h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-xl overflow-hidden border transition-all duration-300",
                currentIndex === idx
                  ? "border-accent-gold ring-1 ring-accent-gold scale-105"
                  : "border-transparent opacity-60 hover:opacity-100 hover:border-border"
              )}
            >
              <Image
                src={image}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-contain"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

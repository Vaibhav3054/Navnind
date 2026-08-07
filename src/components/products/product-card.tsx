"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/data/products";

// A simple solid color blur placeholder data URI for next/image
const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGM0VGRTgiLz48L3N2Zz4=";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative flex flex-col"
    >
      <Link href={`/products/${product.slug}`} className="block overflow-hidden rounded-2xl bg-muted-beige mb-6 relative aspect-[4/5] border border-border shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500">
        <Image
          src={product.mainImage}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Reveal Quick Specs */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 text-pure-white">
          <p className="text-sm font-medium tracking-wide">{product.specs.sizes}</p>
          <p className="text-xs text-pure-white/80 mt-1">{product.specs.paperQuality}</p>
        </div>
      </Link>
      
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-widest text-secondary-text font-bold">
            {product.category}
          </span>
          <ArrowRight className="w-4 h-4 text-border group-hover:text-accent-gold transition-colors" />
        </div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground group-hover:text-accent-gold transition-colors line-clamp-1">
            {product.title}
          </h3>
        </Link>
        <p className="mt-3 text-secondary-text text-sm line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}

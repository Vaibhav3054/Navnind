"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const categories = [
  {
    name: "A4 Notebooks",
    image: "/images/A4/224_Pages/Product_3/front.webp",
    href: "/products/a4",
  },
  {
    name: "Premium Collection",
    image: "/images/Premium Notebooks/Product_1/front.webp",
    href: "/products/premium",
  },
  {
    name: "Royal Series",
    image: "/images/Royal Notebooks/front.jpg",
    href: "/products/royal",
  },
  {
    name: "Big Royal",
    image: "/images/Big Royal Notebooks/Product_1/front.webp",
    href: "/products/big-royal",
  },
  {
    name: "Sketchbooks",
    image: "/images/Sketchbooks/Product_1/front.png", // Fallback image
    href: "/products/sketchbooks",
  },
  {
    name: "Practical Notebooks",
    image: "/images/Practical Notebooks/Product_1/front.webp", // Fallback image
    href: "/products/practical",
  },
  {
    name: "Registers",
    image: "/images/Hardbound Notebooks/Product_1/front.webp", // Fallback image
    href: "/products/registers",
  },
  {
    name: "Spiral Bound",
    image: "/images/Spiral Notebooks/Product_1/front.webp", // Fallback image
    href: "/products/spiral",
  },
];

export function ProductsPreview() {
  return (
    <section className="py-32 bg-pure-white">
      <div className="container-base">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-heading text-foreground mb-6">
              Collections
            </h2>
            <p className="text-xl text-secondary-text">
              Discover our extensive range of premium notebooks, designed for every need and crafted with uncompromising quality.
            </p>
          </div>
          <Link 
            href="/products" 
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-accent-gold transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href="/products" className="group block">
                <div className="relative aspect-[4/5] rounded-2xl bg-muted-beige overflow-hidden mb-6">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-accent-gold transition-colors">
                    {category.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-border group-hover:text-accent-gold transition-colors transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

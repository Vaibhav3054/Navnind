"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Category, Product } from "@/lib/data/products";
import { ProductCard } from "@/components/products/product-card";

const CATEGORIES: ("All" | Category)[] = [
  "All",
  "A4",
  "Premium",
  "Royal",
  "Big Royal",
  "Registers",
  "Spiral",
  "Sketchbook",
  "Practical"
];

export function ProductsClient({ initialProducts }: { initialProducts: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-pure-white pb-32">
      {/* Hero Block */}
      <div className="bg-background pt-32 pb-20 px-6 border-b border-border">
        <div className="container-base">
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-foreground mb-6">
            Our <span className="italic text-accent-gold font-normal">Collections</span>
          </h1>
          <p className="text-xl text-secondary-text max-w-2xl">
            Explore our meticulously crafted stationery designed for the purest writing experience.
          </p>
        </div>
      </div>

      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-[88px] z-40 bg-pure-white/80 backdrop-blur-md border-b border-border py-4">
        <div className="container-base flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-pure-white"
                    : "bg-background text-secondary-text hover:bg-muted-beige hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Animated Search */}
          <motion.div 
            animate={{ width: isSearchFocused ? 300 : 200 }}
            className="relative flex items-center"
          >
            <Search className="absolute left-3 w-4 h-4 text-secondary-text" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full bg-background border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-gold transition-colors"
            />
          </motion.div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container-base pt-16">
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-2xl font-heading text-foreground mb-2">No products found</h3>
              <p className="text-secondary-text">Try adjusting your search or filter criteria.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-6 underline text-accent-gold"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

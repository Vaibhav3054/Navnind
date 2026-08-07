"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the Minimum Order Quantity (MOQ)?",
    answer: "Our standard MOQ for wholesale pricing starts at 500 units per sku. However, for specialized institutional orders, we can discuss tailored quantities.",
  },
  {
    question: "Do you offer custom branding for institutions?",
    answer: "Yes. For orders exceeding 2,000 units, we offer custom logo embossing and branded belly bands for schools and corporate clients.",
  },
  {
    question: "What are your standard shipping times?",
    answer: "Domestic wholesale orders are typically dispatched within 3-5 business days. International shipping times vary between 14-21 days depending on the region.",
  },
  {
    question: "Are there different pricing tiers?",
    answer: "Yes, we operate on a tiered pricing model. Discounts scale predictably based on the volume of your order. Your dedicated account manager will provide the full rate card upon approval.",
  },
];

export function DealerFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-muted-beige border-t border-border" ref={ref}>
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
              Frequently Asked <span className="italic text-accent-gold font-normal">Questions</span>
            </h2>
            <p className="text-xl text-secondary-text mb-8">
              Everything you need to know about partnering with NAVNIND.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-pure-white rounded-2xl overflow-hidden border border-border"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-heading font-semibold text-foreground text-lg pr-8">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-accent-gold">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-secondary-text leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

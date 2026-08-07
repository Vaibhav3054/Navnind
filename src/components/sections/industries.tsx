"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { GraduationCap, Briefcase, Building2, Store, Library, NotebookPen } from "lucide-react";

const industries = [
  {
    name: "Schools",
    description: "Durable and reliable notebooks engineered for the daily rigors of student life.",
    icon: GraduationCap,
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Coaching Centers",
    description: "Tailored solutions for intensive learning environments, supporting focused study and note-taking.",
    icon: NotebookPen,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    name: "Colleges",
    description: "Premium academic stationery designed for higher education and extensive note-taking.",
    icon: Library,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    name: "Retail",
    description: "Eye-catching designs with superior shelf appeal for modern retail environments.",
    icon: Store,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    name: "Corporate",
    description: "Sophisticated aesthetics offering a professional statement in any boardroom.",
    icon: Briefcase,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    name: "Institutions",
    description: "Bulk supply capabilities with uncompromising quality control standards.",
    icon: Building2,
    colSpan: "md:col-span-2 lg:col-span-1",
  },
];

export function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-background border-t border-border" ref={ref}>
      <div className="container-base">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-heading text-foreground mb-6">
            Serving Every Sector
          </h2>
          <p className="text-xl text-secondary-text">
            From classrooms to boardrooms, NAVNIND delivers excellence across diverse industries with tailored notebook solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={fadeUp}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ delay: index * 0.1 }}
                className={`relative group p-8 rounded-2xl border border-border bg-pure-white flex flex-col justify-end overflow-hidden ${industry.colSpan}`}
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-muted-beige rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 ease-out group-hover:scale-150 opacity-50" />
                
                <div className="relative z-10 flex flex-col items-start h-full justify-between">
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground group-hover:text-accent-gold transition-colors duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-secondary-text text-sm max-w-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

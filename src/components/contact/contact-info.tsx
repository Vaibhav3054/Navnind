"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedHeading } from "@/components/ui/animated-heading";

export function ContactInfo() {
  return (
    <div className="flex flex-col h-full justify-between gap-12">
      <motion.div
        variants={fadeUp}
        initial="initial"
        animate="animate"
      >
        <p className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-4">
          Get In Touch
        </p>
        <AnimatedHeading
          text="Let's Start a Conversation."
          as="h1"
          className="text-5xl md:text-6xl font-bold font-heading text-foreground mb-6 leading-tight"
        />
        <p className="text-lg text-secondary-text max-w-md leading-relaxed">
          Whether you're looking to partner with us, require institutional pricing, or just want to say hello, our team is ready to assist you.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1 }}
        className="space-y-8"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-muted-beige flex items-center justify-center shrink-0 mt-1">
            <MapPin className="w-5 h-5 text-accent-gold" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Headquarters</h4>
            <p className="text-secondary-text leading-relaxed">
              Uttam Industries<br />
              102, Semra Rd, Govindpura Industrial Area<br />
              Bhopal, Madhya Pradesh 462023
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-muted-beige flex items-center justify-center shrink-0 mt-1">
            <Phone className="w-5 h-5 text-accent-gold" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Phone</h4>
            <p className="text-secondary-text font-numbers">
              +91 91713 63600<br />
              +91 98270 54667<br />
              +91 98931 06811
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-muted-beige flex items-center justify-center shrink-0 mt-1">
            <Mail className="w-5 h-5 text-accent-gold" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Email</h4>
            <p className="text-secondary-text">
              uttamindustriesbhopal@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-muted-beige flex items-center justify-center shrink-0 mt-1">
            <Clock className="w-5 h-5 text-accent-gold" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Business Hours</h4>
            <p className="text-secondary-text">
              Monday - Saturday<br />
              9:00 AM - 6:00 PM (IST)
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        className="pt-8 border-t border-border"
      >
        {/* WhatsApp CTA */}
        <Button
          size="lg"
          href="https://wa.me/919171363600"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#25D366] hover:bg-[#20b858] text-pure-white w-full sm:w-auto shadow-md"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Chat on WhatsApp
        </Button>
      </motion.div>
      
      {/* Google Maps location */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
        className="w-full h-48 rounded-2xl border border-border relative overflow-hidden"
      >
        <iframe
          title="Uttam Industries location"
          src="https://www.google.com/maps?q=Uttam+Industries%2C+102%2C+Semra+Rd%2C+Govindpura+Industrial+Area%2C+Bhopal%2C+Madhya+Pradesh+462023&output=embed"
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

    </div>
  );
}

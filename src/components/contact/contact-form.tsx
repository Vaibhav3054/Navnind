"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type FormInputs = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    }
  });

  // Watch values to handle floating label state
  const watchAllFields = watch();






const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper for floating label class
  const getFloatingLabelClass = (fieldValue: string, error?: any) => {
    const base = "absolute left-0 transition-all duration-300 pointer-events-none px-4";
    const active = fieldValue 
      ? "top-2 text-xs text-secondary-text opacity-70" 
      : "top-4 text-sm text-secondary-text";
    const err = error ? "text-red-500" : "";
    return `${base} ${active} ${err}`;
  };

  return (
    <div className="h-full flex items-center">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-pure-white p-8 md:p-12 rounded-3xl border border-border shadow-2xl"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Full Name */}
              <div className="relative bg-muted-beige rounded-xl group focus-within:ring-2 focus-within:ring-accent-gold/50 transition-shadow">
                <label className={getFloatingLabelClass(watchAllFields.fullName, errors.fullName)}>
                  Full Name *
                </label>
                <input
                  {...register("fullName", { required: "Name is required" })}
                  className="w-full pt-6 pb-2 px-4 bg-transparent border-none focus:outline-none text-foreground font-medium"
                />
              </div>
              {errors.fullName && <span className="text-red-500 text-xs pl-4">{errors.fullName.message}</span>}

              {/* Email */}
              <div className="relative bg-muted-beige rounded-xl group focus-within:ring-2 focus-within:ring-accent-gold/50 transition-shadow">
                <label className={getFloatingLabelClass(watchAllFields.email, errors.email)}>
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full pt-6 pb-2 px-4 bg-transparent border-none focus:outline-none text-foreground font-medium"
                />
              </div>
              {errors.email && <span className="text-red-500 text-xs pl-4">{errors.email.message}</span>}

              {/* Subject */}
              <div className="relative bg-muted-beige rounded-xl group focus-within:ring-2 focus-within:ring-accent-gold/50 transition-shadow">
                <label className={getFloatingLabelClass(watchAllFields.subject, errors.subject)}>
                  Subject *
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full pt-6 pb-2 px-4 bg-transparent border-none focus:outline-none text-foreground font-medium"
                />
              </div>
              {errors.subject && <span className="text-red-500 text-xs pl-4">{errors.subject.message}</span>}

              {/* Message */}
              <div className="relative bg-muted-beige rounded-xl group focus-within:ring-2 focus-within:ring-accent-gold/50 transition-shadow h-40">
                <label className={getFloatingLabelClass(watchAllFields.message, errors.message)}>
                  Message *
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full h-full pt-7 pb-4 px-4 bg-transparent border-none focus:outline-none text-foreground font-medium resize-none"
                />
              </div>
              {errors.message && <span className="text-red-500 text-xs pl-4">{errors.message.message}</span>}

              {/* Submit */}
              <div className="pt-4 flex justify-end">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="rounded-full px-8 bg-foreground hover:bg-foreground/90 text-pure-white transition-all duration-300 shadow-md group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full bg-foreground text-pure-white p-12 md:p-16 rounded-3xl shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Background Texture */}
            <div 
              className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
              className="w-20 h-20 rounded-full bg-accent-gold/20 flex items-center justify-center mb-8 relative z-10"
            >
              <CheckCircle2 className="w-10 h-10 text-accent-gold" />
            </motion.div>
            <motion.h3 
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10"
            >
              Message Sent
            </motion.h3>
            <motion.p 
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1 }}
              className="text-pure-white/80 max-w-sm leading-relaxed relative z-10"
            >
              Thank you for reaching out. A member of our team will review your message and reply shortly.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

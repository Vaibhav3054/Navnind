"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormInputs = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
};

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Partner Enquiry",
          ...data,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-pure-white relative overflow-hidden">
      <div className="container-base max-w-4xl">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-muted-beige p-8 md:p-12 rounded-3xl border border-border shadow-sm"
            >
              <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Partner Enquiry
                </h2>
                <p className="text-secondary-text">
                  Fill out the form below and our B2B team will get back to you within 48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Company Name *</label>
                    <input
                      {...register("companyName", { required: "Company name is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-pure-white focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-shadow"
                      placeholder="e.g. Rahul Stationary"
                    />
                    {errors.companyName && <span className="text-red-500 text-xs mt-1 block">{errors.companyName.message}</span>}
                  </div>

                  {/* Contact Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Contact Name *</label>
                    <input
                      {...register("contactName", { required: "Contact name is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-pure-white focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-shadow"
                      placeholder="Vinay Sharma"
                    />
                    {errors.contactName && <span className="text-red-500 text-xs mt-1 block">{errors.contactName.message}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Work Email *</label>
                    <input
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-pure-white focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-shadow"
                      placeholder="rahulstationary@gmail.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-pure-white focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-shadow"
                      placeholder="+91 91713 63600"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                  </div>
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Business Type *</label>
                  <select
                    {...register("businessType", { required: "Please select a business type" })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-pure-white focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-shadow"
                  >
                    <option value="">Select your business type</option>
                    <option value="retailer">Retailer / Stationer</option>
                    <option value="wholesaler">Wholesaler / Distributor</option>
                    <option value="institution">Institution / School</option>
                    <option value="corporate">Corporate / Gifting</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && <span className="text-red-500 text-xs mt-1 block">{errors.businessType.message}</span>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Additional Information</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-pure-white focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-shadow resize-none"
                    placeholder="Tell us about your estimated volume or specific requirements..."
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 flex justify-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 rounded-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Submit Application"
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
              className="bg-foreground text-pure-white p-12 md:p-20 rounded-3xl border border-foreground shadow-2xl flex flex-col items-center justify-center text-center min-h-[500px]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                className="w-24 h-24 rounded-full bg-accent-gold/20 flex items-center justify-center mb-8"
              >
                <CheckCircle2 className="w-12 h-12 text-accent-gold" />
              </motion.div>
              <motion.h3 
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="text-3xl md:text-5xl font-heading font-bold mb-4"
              >
                Application Received.
              </motion.h3>
              <motion.p 
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.1 }}
                className="text-lg text-pure-white/80 max-w-lg leading-relaxed"
              >
                Thank you for your interest in partnering with NAVNIND. Your dedicated account manager is reviewing your details and will be in touch shortly.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

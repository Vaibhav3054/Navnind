export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us for inquiries, support, or partnership opportunities.",
};

import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="bg-pure-white min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="container-base relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          
          {/* Left Column: Info */}
          <div className="order-1 lg:order-1">
            <ContactInfo />
          </div>

          {/* Right Column: Form */}
          <div className="order-2 lg:order-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}


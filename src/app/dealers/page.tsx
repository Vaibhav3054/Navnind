import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Dealer",
  description: "Join the Uttam Industries family and become an authorized dealer.",
};

import { DealerHero } from "@/components/dealers/dealer-hero";
import { PartnerBenefits } from "@/components/dealers/partner-benefits";
import { ProcessTimeline } from "@/components/dealers/process-timeline";
import { DealerFAQ } from "@/components/dealers/dealer-faq";
import { EnquiryForm } from "@/components/dealers/enquiry-form";

export default function DealersPage() {
  return (
    <div className="bg-background min-h-screen">
      <DealerHero />
      <PartnerBenefits />
      <ProcessTimeline />
      <DealerFAQ />
      <EnquiryForm />
    </div>
  );
}


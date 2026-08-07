import { Metadata } from "next";

export const metadata = {
  title: "About Us",
  description: "Learn about the heritage, sustainable practices, and premium craftsmanship of Navnind and Uttam Industries.",
};

import { AboutHero } from "@/components/about/about-hero";
import { StorySection } from "@/components/about/story-section";
import { VisionMission } from "@/components/about/vision-mission";
import { ValuesSection } from "@/components/about/values-section";
import { TimelineSection } from "@/components/about/timeline-section";
import { ManufacturingPhilosophy } from "@/components/about/manufacturing-philosophy";
import { Sustainability } from "@/components/about/sustainability";
import { FounderMessage } from "@/components/about/founder-message";

export default function AboutPage() {
  return (
    <div className="bg-pure-white">
      <AboutHero />
      <StorySection />
      <VisionMission />
      <ValuesSection />
      <TimelineSection />
      <ManufacturingPhilosophy />
      <Sustainability />
      <FounderMessage />
    </div>
  );
}

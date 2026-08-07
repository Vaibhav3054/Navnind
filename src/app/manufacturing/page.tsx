import { ManufacturingHero } from "@/components/manufacturing/manufacturing-hero";
import { ProcessStickyScroll } from "@/components/manufacturing/process-sticky-scroll";
import { HorizontalGallery } from "@/components/manufacturing/horizontal-gallery";
import { StatisticsSection } from "@/components/manufacturing/statistics-section";
import { QualityPromise } from "@/components/manufacturing/quality-promise";
import { ManufacturingCTA } from "@/components/manufacturing/manufacturing-cta";

export default function ManufacturingPage() {
  return (
    <div className="bg-background min-h-screen">
      <ManufacturingHero />
      <ProcessStickyScroll />
      <HorizontalGallery />
      <StatisticsSection />
      <QualityPromise />
      <ManufacturingCTA />
    </div>
  );
}

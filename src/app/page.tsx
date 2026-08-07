import { Hero } from "@/components/sections/hero";
import { BrandIntro } from "@/components/sections/brand-intro";
import { Features } from "@/components/sections/features";
import { Manufacturing } from "@/components/sections/manufacturing";
import { ProductsPreview } from "@/components/sections/products-preview";
import { Industries } from "@/components/sections/industries";
import { FounderQuote } from "@/components/sections/founder-quote";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <Features />
      <Manufacturing />
      <ProductsPreview />
      <Industries />
      <FounderQuote />
      <CTASection />
    </>
  );
}

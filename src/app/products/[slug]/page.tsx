import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, PRODUCTS } from "@/lib/data/products";
import { ImageGallery } from "@/components/products/image-gallery";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

// Generate static params for SSG
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `/products/${product.slug}`,
      images: [
        {
          url: product.mainImage,
          width: 800,
          height: 600,
          alt: product.title,
        }
      ]
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allImages = [product.mainImage, ...product.gallery];
  const relatedProducts = getRelatedProducts(product.category, product.slug);

  return (
    <div className="min-h-screen bg-pure-white pb-32">
      {/* Top Navigation */}
      <div className="border-b border-border bg-background pt-32 pb-6 px-6">
        <div className="container-base">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>
          <div className="flex items-center gap-2 text-sm text-secondary-text">
            <span>Products</span>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="text-foreground font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="container-base pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Gallery */}
          <div>
            <div className="sticky top-[120px]">
              <ImageGallery images={allImages} />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <span className="text-sm font-bold text-accent-gold tracking-widest uppercase mb-4">
              {product.category} Collection
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6">
              {product.title}
            </h1>
            <p className="text-xl text-secondary-text leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="border-t border-border pt-10 mb-10">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Specifications
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {product.specs.subjects && (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted-beige/50">
                    <Check className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.subjects.split(",").map((item, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-pure-white border border-black/5 rounded-md text-xs font-medium text-secondary-text shadow-sm">
                            {item.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {product.specs.rulingType && (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted-beige/50">
                    <Check className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Ruling Type</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.rulingType.split(",").map((item, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-pure-white border border-black/5 rounded-md text-xs font-medium text-secondary-text shadow-sm">
                            {item.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {product.specs.pages && (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted-beige/50">
                    <Check className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Pages</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.pages.split(",").map((item, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-pure-white border border-black/5 rounded-md text-xs font-medium text-secondary-text shadow-sm">
                            {item.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {product.specs.mrp && (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted-beige/50">
                    <Check className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">MRP</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.mrp.split(",").map((item, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-pure-white border border-black/5 rounded-md text-xs font-medium text-secondary-text shadow-sm">
                            {item.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted-beige/50">
                  <Check className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Paper Quality</h4>
                    <p className="text-secondary-text text-sm">{product.specs.paperQuality}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted-beige/50">
                  <Check className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Binding</h4>
                    <p className="text-secondary-text text-sm">{product.specs.binding}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted-beige/50">
                  <Check className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Sizes Available</h4>
                    <p className="text-secondary-text text-sm">{product.specs.sizes}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted-beige/50">
                  <Check className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Best Applications</h4>
                    <p className="text-secondary-text text-sm">{product.specs.applications}</p>
                  </div>
                </div>
                {product.specs.cover && (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted-beige/50">
                    <Check className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Cover</h4>
                      <p className="text-secondary-text text-sm">{product.specs.cover}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Dealer CTA */}
            <div className="bg-foreground text-pure-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">Interested in our products?</h3>
                <p className="text-pure-white/80 text-sm">Contact us to learn more about our offerings.</p>
              </div>
              <Button variant="outline" className="shrink-0 border-pure-white/20 text-foreground hover:bg-pure-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-16 border-t border-border">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                Related in {product.category}
              </h2>
              <Link href="/products" className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-accent-gold transition-colors">
                View All
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

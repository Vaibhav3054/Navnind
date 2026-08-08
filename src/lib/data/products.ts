import productsData from './products.json';

export type Category = "A4" | "Premium" | "Royal" | "Big Royal" | "Registers" | "Spiral" | "Sketchbook" | "Practical" ;

export interface ProductSpecs {
  paperQuality: string;
  binding: string;
  sizes: string;
  applications: string;
  rulingType?: string;
  pages?: string;
  mrp?: string;
  cover?: string;
  subjects?: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: Category;
  description: string;
  mainImage: string;
  gallery: string[];
  specs: ProductSpecs;
}

export async function getAllProducts(): Promise<Product[]> {
  return productsData as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find(p => p.slug === slug);
}

export async function getRelatedProducts(category: string, currentSlug: string): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);
}

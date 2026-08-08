import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

const contentDir = path.join(process.cwd(), 'src/content/products');

export async function getAllProducts(): Promise<Product[]> {
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir);
  
  const products: Product[] = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      return {
        id: file.replace('.md', ''),
        slug: file.replace('.md', ''),
        title: data.title || '',
        category: data.category as Category,
        description: content || data.description || '',
        mainImage: data.mainImage || '',
        gallery: data.gallery ? data.gallery.map((g: any) => g.image || g) : [],
        specs: data.specs || {},
      };
    });
    
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find(p => p.slug === slug);
}

export async function getRelatedProducts(category: string, currentSlug: string): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);
}

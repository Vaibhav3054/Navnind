import { getAllProducts } from "@/lib/data/products";
import { ProductsClient } from "./products-client";

export default async function ProductsPage() {
  const products = await getAllProducts();
  
  return <ProductsClient initialProducts={products} />;
}


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore our meticulously crafted stationery designed for the purest writing experience.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

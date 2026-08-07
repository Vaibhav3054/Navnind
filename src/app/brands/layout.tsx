import { Metadata } from "next";

export const metadata: Metadata = {
  title: "House of Brands",
  description: "Discover our diverse range of brands: Navnind, Wisdom, and Pooja.",
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

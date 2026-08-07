





// src/components/flipbook/catalog-data.ts

export interface CatalogPage {
  id: string;
  type:
    | "cover"
    | "inside-cover"
    | "product"
    | "about"
    | "contact"
    | "back-cover";

  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  href?: string;
  features?: string[];
  pageNumber?: number;
  logo?: string;
}

export const catalogPages: CatalogPage[] = [
  // ---------------- COVER ----------------

  {
    id: "cover",
    type: "cover",
    title: "NAVNIND",
    subtitle: "Product Catalogue",
    description: "Premium Stationery Collection",
    image: "/images/Big Royal Notebooks/Product_3/front.webp",
  },



  // ---------------- PRODUCTS ----------------

  {
    id: "a4",
    type: "product",
    pageNumber: 1,
    title: "A4 Notebooks",
    subtitle: "School • College • Office",
    description:
      "Premium A4 notebooks available in multiple page counts and rulings for everyday writing.",
    image: "/images/3d catalog/a4.png",
    href: "/products/a4",
    features: [
      "Size: A4 (210 x 297 mm)",
      "Paper: 56 GSM",
      "Premium Paper",
      "Durable Binding",
    ],
  },

  {
    id: "premium",
    type: "product",
    pageNumber: 2,
    title: "Premium Collection",
    subtitle: "Luxury Notebook Series",
    description:
      "Elegant notebooks with premium paper and modern cover designs.",
    image: "/images/3d catalog/premium.png",
    href: "/products/premium",
    features: [
      "Size: 20.5cm x 25.5cm",
      "Paper: 56 GSM",
      "Executive Design",
      "Long Lasting",
    ],
  },

  {
    id: "royal",
    type: "product",
    pageNumber: 3,
    title: "Royal Series",
    subtitle: "Classic Collection",
    description:
      "Traditional notebooks designed for schools and institutions.",
    image: "/images/3d catalog/royal.png",
    href: "/products/royal",
    features: [
      "Size: 17.5cm x 23cm",
      "Paper: 56 GSM",
      "Quality Paper",
      "Value Range",
    ],
  },

  {
    id: "big-royal",
    type: "product",
    pageNumber: 4,
    title: "Big Royal",
    subtitle: "Large Format Notebooks",
    description:
      "Extra writing space with superior paper quality and durable covers.",
    image: "/images/3d catalog/bigroyal.png",
    href: "/products/big-royal",
    features: [
      "Size: 18cm x 24cm",
      "Paper: 56 GSM",
      "Smooth Writing",
      "Long Life",
    ],
  },

  {
    id: "sketchbook",
    type: "product",
    pageNumber: 5,
    title: "Sketchbooks",
    subtitle: "Creative Collection",
    description:
      "Perfect for sketching, drawing and creative artwork.",
    image: "/images/3d catalog/sketchbook.png",
    href: "/products/sketchbooks",
    features: [
      "Size: Multiple Sizes",
      "Paper: 130 GSM Cartridge",
      "Smooth Texture",
      "Creative Use",
    ],
  },

  // {
  //   id: "eco",
  //   type: "product",
  //   pageNumber: 6,
  //   title: "Eco Series",
  //   subtitle: "Environment Friendly",
  //   description:
  //     "Manufactured with responsibly sourced materials for sustainable writing.",
  //   image: "/images/3d catalog/eco.png",
  //   href: "/products/eco",
  //   features: [
  //     "Eco Friendly",
  //     "Recyclable",
  //     "Premium Paper",
  //     "Strong Binding",
  //   ],
  // },

  {
    id: "registers",
    type: "product",
    pageNumber: 6,
    title: "Registers",
    subtitle: "Office & Business",
    description:
      "Professional registers for schools, offices and institutions.",
    image: "/images/3d catalog/register.png",
    href: "/products/registers",
    features: [
      "Size: 21cm x 33.5cm",
      "Paper: 57 GSM",
      "Professional Finish",
      "Long Lasting",
    ],
  },

  {
    id: "spiral",
    type: "product",
    pageNumber: 7,
    title: "Spiral Bound",
    subtitle: "Easy Flip Collection",
    description:
      "Modern spiral notebooks for students and professionals.",
    image: "/images/3d catalog/spiral.png",
    href: "/products/spiral",
    features: [
      "Size: A4",
      "Paper: 57 GSM",
      "Premium Cover",
      "Smooth Writing",
    ],
  },

  {
    id: "practical",
    type: "product",
    pageNumber: 8,
    title: "Practical Notebooks",
    subtitle: "Functional & Durable",
    description:
      "Notebooks designed for practical use in schools and offices.",
    image: "/images/3d catalog/practical.png",
    href: "/products/practical",
    features: [
      "Size: 21.5cm x 26.5cm",
      "Paper: 70 GSM",
      "Quality Paper",
      "Affordable Price",
    ],
  },


];





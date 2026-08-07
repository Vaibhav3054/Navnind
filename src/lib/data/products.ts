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

export const PRODUCTS: Product[] = [
  // A4
  {
    id: "a4-176-p1",
    slug: "a4-176-pages-exercise-book",
    title: "A4 Exercise Book",
    category: "A4",
    description: "Premium A4 exercise book with 176 pages, perfect for students and extensive note-taking.",
    mainImage: "/images/A4/176_Pages/Product_1/navnind_exercise_book.webp",
    gallery: [
      "/images/A4/176_Pages/Product_1/exercise_book_catalog_photo.webp",
      "/images/A4/176_Pages/Product_1/notebook_45_degree.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong soft bound",
      sizes: "A4 (210 x 297 mm)",
      applications: "School Assignments, College Notes, Professional Journaling.",
      rulingType: "Single Line, Plain, One Side",
      pages: "44, 88, 112, 136, 176, 224, 296, 344, 392",
      mrp: "₹30, ₹50, ₹60, ₹70, ₹90, ₹110, ₹170, ₹180, ₹210"
    }
  },
  {
    id: "a4-176-p2",
    slug: "a4-176-pages-exercise-book",
    title: "A4 Exercise Book",
    category: "A4",
    description: "Premium A4 exercise book with 176 pages, perfect for students and extensive note-taking.",
    mainImage: "/images/A4/176_Pages/Product_2/front.webp",
    gallery: [
      "/images/A4/176_Pages/Product_2/back.webp",
      "/images/A4/176_Pages/Product_2/side.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong soft bound",
      sizes: "A4 (210 x 297 mm)",
      applications: "School assignments, college notes, professional journaling.",
      rulingType: "Single line, Plain, One side",
      pages: "44, 88, 112, 136, 176, 224, 296, 344, 392",
      mrp: "₹30, ₹50, ₹60, ₹70, ₹90, ₹110, ₹170, ₹180, ₹210"
    }
  },
  {
    id: "a4-224-p1",
    slug: "a4-224-pages-books-coffee-1",
    title: "A4 Books & Coffee Edition",
    category: "A4",
    description: "A cozy 'Books & Coffee' themed cover enclosing 224 pages of the smoothest writing paper.",
    mainImage: "/images/A4/224_Pages/Product_1/front.webp",
    gallery: [
      
      "/images/A4/224_Pages/Product_1/back.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong soft bound",
      sizes: "A4 (210 x 297 mm)",
      applications: "Creative writing, art journaling, heavy note-taking.",
      rulingType: "Single line, Plain, One side",
      pages: "44, 88, 112, 136, 176, 224, 296, 344, 392",
      mrp: "₹30, ₹50, ₹60, ₹70, ₹90, ₹110, ₹170, ₹180, ₹210"
    }
  },
  {
    id: "a4-224-p2",
    slug: "a4-224-pages-peacock-2",
    title: "A4 Peacock Edition",
    category: "A4",
    description: "Vibrant peacock cover design enclosing 224 pages of the smoothest writing paper.",
    mainImage: "/images/A4/224_Pages/Product_2/front.webp",
    gallery: [
   
      "/images/A4/224_Pages/Product_2/side.webp",
      "/images/A4/224_Pages/Product_2/back.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong soft bound",
      sizes: "A4 (210 x 297 mm)",
      applications: "Creative writing, art journaling, heavy note-taking.",
      rulingType: "Single line, Plain, One side",
      pages: "44, 88, 112, 136, 176, 224, 296, 344, 392",
      mrp: "₹30, ₹50, ₹60, ₹70, ₹90, ₹110, ₹170, ₹180, ₹210"
    }
  },
  {
    id: "a4-224-p3",
    slug: "a4-224-pages-art-piece-3",
    title: "A4 Art Piece Edition",
    category: "A4",
    description: "A beautiful artistic cover design enclosing 224 pages of the smoothest writing paper.",
    mainImage: "/images/A4/224_Pages/Product_3/front.webp",
    gallery: [
   
      "/images/A4/224_Pages/Product_3/back.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong soft bound",
      sizes: "A4 (210 x 297 mm)",
      applications: "Creative writing, art journaling, heavy note-taking.",
      rulingType: "Single line, Plain, One side",
      pages: "44, 88, 112, 136, 176, 224, 296, 344, 392",
      mrp: "₹30, ₹50, ₹60, ₹70, ₹90, ₹110, ₹170, ₹180, ₹210"
    }
  },
  {
    id: "a4-224-p4-5-6",
    slug: "a4-224-pages-premium-edition-1",
    title: "A4 Premium Edition",
    category: "A4",
    description: "Vibrant premium cover design enclosing 224 pages of the smoothest writing paper.",
    mainImage: "/images/A4/224_Pages/a4combined.jpeg",
    gallery: [
   
      "/images/A4/224_Pages/Product_4/front.png",
      "/images/A4/224_Pages/Product_4/back.png",
      "/images/A4/224_Pages/Product_5/front.png",
      "/images/A4/224_Pages/Product_5/back.png",
      "/images/A4/224_Pages/Product_6/front.png",
      "/images/A4/224_Pages/Product_6/back.png",

    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong soft bound",
      sizes: "A4 (210 x 297 mm)",
      applications: "Creative writing, art journaling, heavy note-taking.",
      rulingType: "Single line, Plain, One side",
      pages: "44, 88, 112, 136, 176, 224, 296, 344, 392",
      mrp: "₹30, ₹50, ₹60, ₹70, ₹90, ₹110, ₹170, ₹180, ₹210"
    }
  },
  // {
  //   id: "a4-224-p5",
  //   slug: "a4-224-pages-premium-edition-2",
  //   title: "A4 Premium Edition",
  //   category: "A4",
  //   description: "Vibrant premium cover design enclosing 224 pages of the smoothest writing paper.",
  //   mainImage: "/images/A4/224_Pages/Product_5/front.png",
  //   gallery: [
   
  //     "/images/A4/224_Pages/Product_5/back.png"
  //   ],
  //   specs: {
  //     paperQuality: "56 GSM",
  //     binding: "Strong soft bound",
  //     sizes: "A4 (210 x 297 mm)",
  //     applications: "Creative writing, art journaling, heavy note-taking.",
  //     rulingType: "Single line, Plain, One side",
  //     pages: "44, 88, 112, 136, 176, 224, 296, 344, 392",
  //     mrp: "₹30, ₹50, ₹60, ₹70, ₹90, ₹110, ₹170, ₹180, ₹210"
  //   }
  // },
  // {
  //   id: "a4-224-p6",
  //   slug: "a4-224-pages-premium-edition-3",
  //   title: "A4 Premium Edition",
  //   category: "A4",
  //   description: "Vibrant premium cover design enclosing 224 pages of the smoothest writing paper.",
  //   mainImage: "/images/A4/224_Pages/Product_6/front.png",
  //   gallery: [
   
  //     "/images/A4/224_Pages/Product_6/back.png"
  //   ],
  //   specs: {
  //     paperQuality: "56 GSM",
  //     binding: "Strong soft bound",
  //     sizes: "A4 (210 x 297 mm)",
  //     applications: "Creative writing, art journaling, heavy note-taking.",
  //     rulingType: "Single line, Plain, One side",
  //     pages: "44, 88, 112, 136, 176, 224, 296, 344, 392",
  //     mrp: "₹30, ₹50, ₹60, ₹70, ₹90, ₹110, ₹170, ₹180, ₹210"
  //   }
  // },
  
  // Premium
  {
    id: "premium-p1",
    slug: "premium-squeeze-the-day",
    title: "Premium 'Squeeze The Day' Notebook",
    category: "Premium",
    description: "A fun, vibrant premium notebook to brighten up your desk and inspire your daily thoughts.",
    mainImage: "/images/Premium Notebooks/Product_1/front.webp",
    gallery: [
      "/images/Premium Notebooks/Product_1/side.webp",
      "/images/Premium Notebooks/Product_1/back.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "20.5cm x 25.5cm",
      applications: "Executive use, gifting, personal diaries.",
      rulingType: "Single line, 4 line, oneside, square, arithmetic, 3 in one, two line, big square, 5 line, 4line oneside",
      pages: "96, 132, 172, 200",
      mrp: "₹50, ₹60, ₹90, ₹100",
      cover: "High quality cover"
    }
  },
  {
    id: "premium-p2",
    slug: "premium-squeeze-the-day",
    title: "Premium 'Squeeze The Day' Notebook",
    category: "Premium",
    description: "A fun, vibrant premium notebook to brighten up your desk and inspire your daily thoughts.",
    mainImage: "/images/Premium Notebooks/Product_2/front.webp",
    gallery: [
   
      "/images/Premium Notebooks/Product_2/back.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "20.5cm x 25.5cm",
      applications: "Executive use, gifting, personal diaries.",
      rulingType: "Single line, 4 line, oneside, square, arithmetic, 3 in one, two line, big square, 5 line, 4line oneside",
      pages: "96, 132, 172, 200",
      mrp: "₹50, ₹60, ₹90, ₹100",
      cover: "High quality cover"
    }
  },
  {
    id: "premium-p3",
    slug: "premium-lifestyle-journal",
    title: "Premium Lifestyle Journal",
    category: "Premium",
    description: "Elegant and sophisticated, designed for the modern professional.",
    mainImage: "/images/Premium Notebooks/Product_3/front.jpg",
    gallery: [
   
      "/images/Premium Notebooks/Product_3/back.jpg",
      "/images/Premium Notebooks/Product_3/side.jpg"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "20.5cm x 25.5cm",
      applications: "Bullet journaling, executive meetings, creative planning.",
      rulingType: "Single line, 4 line, oneside, square, arithmetic, 3 in one, two line, big square, 5 line, 4line oneside",
      pages: "96, 132, 172, 200",
      mrp: "₹50, ₹60, ₹90, ₹100",
      cover: "High quality cover"
    }
  },
  {
    id: "premium-p4",
    slug: "premium-travel-journal",
    title: "Premium Travel Journal",
    category: "Premium",
    description: "Elegant and sophisticated, designed for the modern professional.",
    mainImage: "/images/Premium Notebooks/Product_4/front.png",
    gallery: [
   
      "/images/Premium Notebooks/Product_4/back.png",
      
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "20.5cm x 25.5cm",
      applications: "Bullet journaling, executive meetings, creative planning.",
      rulingType: "Single line, 4 line, oneside, square, arithmetic, 3 in one, two line, big square, 5 line, 4line oneside",
      pages: "96, 132, 172, 200",
      mrp: "₹50, ₹60, ₹90, ₹100",
      cover: "High quality cover"
    }
  },
  {
    id: "premium-p5",
    slug: "premium-step-to-the-top-journal",
    title: "Premium Step to the Top Journal",
    category: "Premium",
    description: "Elegant and sophisticated, designed for the modern professional.",
    mainImage: "/images/Premium Notebooks/Product_5/front.png",
    gallery: [
   
      "/images/Premium Notebooks/Product_5/back.png",
      
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "20.5cm x 25.5cm",
      applications: "Bullet journaling, executive meetings, creative planning.",
      rulingType: "Single line, 4 line, oneside, square, arithmetic, 3 in one, two line, big square, 5 line, 4line oneside",
      pages: "96, 132, 172, 200",
      mrp: "₹50, ₹60, ₹90, ₹100",
      cover: "High quality cover"
    }
  },
  {
    id: "premium-p6",
    slug: "premium-happy-mind-journal",
    title: "Premium Happy Mind Journal",
    category: "Premium",
    description: "Elegant and sophisticated, designed for the modern professional.",
    mainImage: "/images/Premium Notebooks/Product_6/front.png",
    gallery: [
   
      "/images/Premium Notebooks/Product_6/back.png",
      
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "20.5cm x 25.5cm",
      applications: "Bullet journaling, executive meetings, creative planning.",
      rulingType: "Single line, 4 line, oneside, square, arithmetic, 3 in one, two line, big square, 5 line, 4line oneside",
      pages: "96, 132, 172, 200",
      mrp: "₹50, ₹60, ₹90, ₹100",
      cover: "High quality cover"
    }
  },

  // Royal
  {
    id: "royal-p1",
    slug: "royal-orange-split",
    title: "Royal Orange Split Notebook",
    category: "Royal",
    description: "A bold statement piece featuring a striking split-color design.",
    mainImage: "/images/Royal Notebooks/front.jpg",
    gallery: [
   
      "/images/Royal Notebooks/back.jpg"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "17.5cm x 23cm",
      applications: "Daily notes, corporate giveaways, student use.",
      rulingType: "Single Line, 4 Line, Oneside, Square, 3 in One, Two Line",
      pages: "160",
      mrp: "₹60",
      cover: "High quality cover"
    }
  },

  // Big Royal
  {
    id: "big-royal-p1",
    slug: "big-royal-ancient-wisdom",
    title: "Big Royal 'Ancient Wisdom'",
    category: "Big Royal",
    description: "Expansive pages with intricate cover art inspired by ancient motifs.",
    mainImage: "/images/Big Royal Notebooks/Product_1/front.webp",
    gallery: [
      "/images/Big Royal Notebooks/Product_1/side.webp",
      "/images/Big Royal Notebooks/Product_1/back.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "18cm x 24cm",
      applications: "Ledgers, extensive record keeping, architectural sketches.",
      rulingType: "Single Line, 4 Line, Oneside, Square, Arithmetic, 3 in One, Two Line, 4 Line Oneside",
      pages: "56, 112, 172",
      mrp: "₹30, ₹45, ₹60",
      cover: "High quality cover"
    }
  },
  {
    id: "big-royal-p2",
    slug: "big-royal-p2",
    title: "Big Royal 'Ancient Wisdom'",
    category: "Big Royal",
    description: "Expansive pages with intricate cover art inspired by ancient motifs.",
    mainImage: "/images/Big Royal Notebooks/Product_2/front.webp",
    gallery: [
      "/images/Big Royal Notebooks/Product_2/side.webp",
      "/images/Big Royal Notebooks/Product_2/back.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "18cm x 24cm",
      applications: "Ledgers, extensive record keeping, architectural sketches.",
      rulingType: "Single Line, 4 Line, Oneside, Square, Arithmetic, 3 in One, Two Line, 4 Line Oneside",
      pages: "56, 112, 172",
      mrp: "₹30, ₹45, ₹60",
      cover: "High quality cover"
    }
  },
  {
    id: "big-royal-moroccan",
    slug: "big-royal-moroccan",
    title: "Big Royal Moroccan Series",
    category: "Big Royal",
    description: "Beautiful Moroccan tile patterns on a grand scale notebook.",
    mainImage: "/images/Big Royal Notebooks/Product_3/front.webp",
    gallery: [
      "/images/Big Royal Notebooks/Product_3/incline.webp",
      "/images/Big Royal Notebooks/Product_3/back.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "18cm x 24cm",
      applications: "Art portfolios, desk planners, engineering notes.",
      rulingType: "Single Line, 4 Line, Oneside, Square, Arithmetic, 3 in One, Two Line, 4 Line Oneside",
      pages: "56, 112, 172",
      mrp: "₹30, ₹45, ₹60",
      cover: "High quality cover"
    }
  },
  {
    id: "big-royal-p4",
    slug: "big-royal-ancient-wisdom",
    title: "Big Royal 'Ancient Wisdom'",
    category: "Big Royal",
    description: "Expansive pages with intricate cover art inspired by ancient motifs.",
    mainImage: "/images/Big Royal Notebooks/Product_4/front.webp",
    gallery: [
      "/images/Big Royal Notebooks/Product_4/side.webp",
      "/images/Big Royal Notebooks/Product_4/back.webp"
    ],
    specs: {
      paperQuality: "56 GSM",
      binding: "Strong binding",
      sizes: "18cm x 24cm",
      applications: "Ledgers, extensive record keeping, architectural sketches.",
      rulingType: "Single Line, 4 Line, Oneside, Square, Arithmetic, 3 in One, Two Line, 4 Line Oneside",
      pages: "56, 112, 172",
      mrp: "₹30, ₹45, ₹60",
      cover: "High quality cover"
    }
  },



  // Registers (Mapped from A4 224 Product 1)
  {
    id: "hardbound-register-p1",
    slug: "hardbound-register-classic",
    title: "Classic Hardbound Register",
    category: "Registers",
    description: "Built to last. Ideal for permanent records and daily accounts.",
    mainImage: "/images/Hardbound Notebooks/Product_1/front.webp",
    gallery: [
      "/images/Hardbound Notebooks/Product_1/back.webp",
      "/images/Hardbound Notebooks/Product_1/side.webp"
    ],
    specs: {
      paperQuality: "57 GSM",
      binding: "Hardbound Strong Binding",
      sizes: "21cm x 33.5cm",
      applications: "Accounting, visitor logs, official records.",
      rulingType: "Single Line",
      pages: "72, 144, 216, 288, 360, 576",
      mrp: "₹90, ₹120, ₹150, ₹200, ₹230, ₹280, ₹370",
      cover: "Hardbound Strong Cover"
    }
  },
  {
    id: "hardbound-register-p2",
    slug: "hardbound-register-classic",
    title: "Classic Hardbound Register",
    category: "Registers",
    description: "Built to last. Ideal for permanent records and daily accounts.",
    mainImage: "/images/Hardbound Notebooks/Product_2/front.webp",
    gallery: [
      "/images/Hardbound Notebooks/Product_2/back.webp"
    ],
    specs: {
      paperQuality: "57 GSM",
      binding: "Hardbound Strong Binding",
      sizes: "21cm x 33.5cm",
      applications: "Accounting, visitor logs, official records.",
      rulingType: "Single Line",
      pages: "72, 144, 216, 288, 360, 576",
      mrp: "₹90, ₹120, ₹150, ₹200, ₹230, ₹280, ₹370",
      cover: "Hardbound Strong Cover"
    }
  },

  // Sketchbook
  {
    id: "sketchbook-p1",
    slug: "sketchbook-pro-drawing",
    title: "Pro Drawing Sketchbook",
    category: "Sketchbook",
    description: "Heavyweight paper that takes pencil, ink, and light wash beautifully.",
    mainImage: "/images/Sketchbooks/Product_1/front.png",
    gallery: [
   
      "/images/Sketchbooks/Product_1/back.jpg"
    ],
    specs: {
      paperQuality: "130gsm Cartridge Paper",
      binding: "Soft bound",
      sizes: "A3 & A4",
      applications: "Pencil sketching, ink drawing, light watercolors.",
      pages: "44",
      mrp: "₹60"
    }
  },
  {
    id: "sketchbook-p2",
    slug: "sketchbook-lotus-edition",
    title: "Lotus Edition Sketchbook",
    category: "Sketchbook",
    description: "Premium sketchbook with an inspiring floral cover, perfect for creatives.",
    mainImage: "/images/Sketchbooks/Product_2/front.png",
    gallery: [
          
      "/images/Sketchbooks/Product_2/back.jpg"
    ],
    specs: {
      paperQuality: "130gsm Cartridge Paper",
      binding: "Soft bound",
      sizes: "Square & A5",
      applications: "Doodling, daily sketches, mixed media.",
      pages: "44",
      mrp: "₹60"
    }
  },

  // Spiral
  {
    id: "Spiral-p1",
    slug: "Spiral-Bound-Notebooks",
    title: "Spiral Notebooks",
    category: "Spiral",
    description: "A practical spiral-bound notebook with smooth pages for everyday writing, planning, and organized note-taking.",
    mainImage: "/images/Spiral Notebooks/Product_1/front.webp",
    gallery: [
      
      "/images/Spiral Notebooks/Product_1/back.webp"
    ],
    specs: {
      paperQuality: "57 GSM",
      binding: "Spiral binding",
      sizes: "A4",
      applications: "School notes, office work, journaling, and daily planning.",
      rulingType: "Single line, plain",
      pages: "200, 300, 400, 500",
      mrp: "₹130, ₹180, ₹230, ₹280"
    }
  },
  {
    id: "Spiral-p2",
    slug: "Spiral-Bound-Notebooks",
    title: "Spiral Notebooks",
    category: "Spiral",
    description: "A practical spiral-bound notebook with smooth pages for everyday writing, planning, and organized note-taking.",
    mainImage: "/images/Spiral Notebooks/Product_2/front.webp",
    gallery: [
     
      "/images/Spiral Notebooks/Product_2/back.webp"
    ],
    specs: {
      paperQuality: "57 GSM",
      binding: "Spiral binding",
      sizes: "A4",
      applications: "School notes, office work, journaling, and daily planning.",
      rulingType: "Single line, plain",
      pages: "200, 300, 400, 500",
      mrp: "₹130, ₹180, ₹230, ₹280"
    }
  },
  {
    id: "Spiral-p3",
    slug: "Spiral-Bound-Notebooks",
    title: "Spiral Notebooks",
    category: "Spiral",
    description: "A practical spiral-bound notebook with smooth pages for everyday writing, planning, and organized note-taking.",
    mainImage: "/images/Spiral Notebooks/Product_3/front.webp",
    gallery: [
    
      "/images/Spiral Notebooks/Product_3/back.webp"
    ],
    specs: {
      paperQuality: "57 GSM",
      binding: "Spiral binding",
      sizes: "A4",
      applications: "School notes, office work, journaling, and daily planning.",
      rulingType: "Single line, plain",
      pages: "200, 300, 400, 500",
      mrp: "₹130, ₹180, ₹230, ₹280"
    }
  },

  // Practical
  {
    id: "Practical-p1",
    slug: "Practical-Notebooks",
    title: "Practical Notebooks",
    category: "Practical",
    description: "A practical notebook with smooth pages for everyday writing, planning, and organized note-taking.",
    mainImage: "/images/Practical Notebooks/Product_1/front.webp",
    gallery: [
    
      "/images/Practical Notebooks/Product_1/back.webp",
      "/images/Practical Notebooks/Product_1/p2.png",
      "/images/Practical Notebooks/Product_1/p2back.png"
    ],
    specs: {
      paperQuality: "70 GSM",
      binding: "Hardbound Binding",
      sizes: "21.5 X 26.5 cm",
      applications: "School notes, office work, journaling, and daily planning.",
      pages: "100",
      mrp: "₹80",
      cover: "Attractive Covers",
      subjects: "Chemistry, Biology, Physics, General"
    }
  },
  {
    id: "Practical-p2",
    slug: "Practical-Notebooks",
    title: "Practical Notebooks",
    category: "Practical",
    description: "A practical notebook with smooth pages for everyday writing, planning, and organized note-taking.",
    mainImage: "/images/Practical Notebooks/Product_2/front.webp",
    gallery: [
    
      "/images/Practical Notebooks/Product_2/back.webp",
      "/images/Practical Notebooks/Product_2/p2front.png",
      "/images/Practical Notebooks/Product_2/p2back.png"
    ],
    specs: {
      paperQuality: "70 GSM",
      binding: "Hardbound Binding",
      sizes: "21.5 X 26.5 cm",
      applications: "School notes, office work, journaling, and daily planning.",
      pages: "100",
      mrp: "₹80",
      cover: "Attractive Covers",
      subjects: "Chemistry, Biology, Physics, General"
    }
  },
  {
    id: "Practical-p3",
    slug: "Practical-Notebooks",
    title: "Practical Notebooks",
    category: "Practical",
    description: "A practical notebook with smooth pages for everyday writing, planning, and organized note-taking.",
    mainImage: "/images/Practical Notebooks/Product_3/front.webp",
    gallery: [
    
      "/images/Practical Notebooks/Product_3/back.webp",
      "/images/Practical Notebooks/Product_3/p2front.webp",
      "/images/Practical Notebooks/Product_3/p2back.png"
    ],
    specs: {
      paperQuality: "70 GSM",
      binding: "Hardbound Binding",
      sizes: "21.5 X 26.5 cm",
      applications: "School notes, office work, journaling, and daily planning.",
      pages: "100",
      mrp: "₹80",
      cover: "Attractive Covers",
      subjects: "Chemistry, Biology, Physics, General"
    }
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getRelatedProducts(category: Category, currentSlug: string): Product[] {
  return PRODUCTS.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);
}


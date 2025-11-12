export type Product = {
  id: number;
  slug?: string;
  name: string;
  price: string; 
  image: string;
  category?: string;
  bestSeller?: boolean;
  images?: string[];
  rating?: number;
  reviewsCount?: number;
  tones?: { name: string; hex: `#${string}` }[];
  details?: {
    description?: string;
    specs?: string;
    ingredients?: string;
    howTo?: string;
  };
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "anik-bonita-lip-gloss",
    name: "ANIK BONITA LIP GLOSS",
    price: "$25.00",
    image: "/Rectangle%2095.png",
    category: "lips",
    bestSeller: true,
    images: [
      "/Rectangle%2095.png",
      "/Rectangle%2098.png",
      "/Rectangle%20102.png",
      "/Rectangle%2096.png",
    ],
    rating: 5,
    reviewsCount: 502,
    tones: [
      { name: "Crystal", hex: "#FFFFFF" },
      { name: "Nude Rose", hex: "#E8C8C6" },
      { name: "Petal Pink", hex: "#E9B7BE" },
      { name: "Berry", hex: "#B31A38" },
    ],
    details: {
      description:
        "Gloss de alto brillo y textura ligera (no pegajoso). Realza el color natural con efecto juicy.",
      specs:
        "Contenido 4.5 ml · Acabado brillante · Aroma suave vainilla · Vegano · Cruelty-free.",
      ingredients:
        "Hydrogenated Polyisobutene, Diisostearyl Malate, Silica Dimethyl Silylate, Flavor, Tocopheryl Acetate, +/- CI 16035, CI 77491.",
      howTo:
        "Aplica en labio desnudo o sobre labial. Para volumen, concentra al centro.",
    },
  },
  {
    id: 2,
    slug: "trendy-chocolate-eyeshadows",
    name: "Trendy Chocolate Eyeshadows 1unit",
    price: "$30.00",
    image: "/trendy-chocolate.png",
    category: "eyes",
    bestSeller: true,
    rating: 5,
  },
];

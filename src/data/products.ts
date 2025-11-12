export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  category?: string;
  bestSeller?: boolean;
  rating?: number;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Trendy Chocolate eyeshadows 1unit",
    price: "$30.00",
    image: "/trendy-chocolate.png",
    category: "eyes",
    bestSeller: true,
    rating: 5,
  },
];

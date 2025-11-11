export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  bestSeller?: boolean;
  rating?: number;
};

export const PRODUCTS: Product[] = [
  {
    id: "t-001",
    name: "Trendy Chocolate eyeshadows 1unit",
    price: 30,
    image: "/trendy-chocolate.png", // usa el nombre real de la imagen en /public
    bestSeller: true,
    rating: 5,
  },
];

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
    id: "1",
    name: "Trendy Chocolate eyeshadows 1unit",
    price: 30.0,
    image: "/img/trendy-chocolate.png", // guarda tu imagen en /public/img/
    bestSeller: true,
    rating: 5,
  },
];

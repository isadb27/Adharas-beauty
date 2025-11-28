export interface Product {
  id: number | string;
  name: string;
  price: string;
  slug: string;
  image: string;
  category?: string;
  images?: string[];
}

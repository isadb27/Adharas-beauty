export interface Product {
  id: string;
  created_at?: string;

  name: string;
  description: string | null;

  price: string | number;

  main_imagen_url: string | null;

  
  image?: string;     
  images?: string[];

  seller_id: string | null;
  category_id: string | null;

  slug: string | null;

  is_active?: boolean | null;
  stock?: number | null;
}

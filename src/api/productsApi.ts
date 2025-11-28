import { supabase } from "../lib/supabaseClient";
import type { Product } from "../types/Product";

function makeSlugFromName(name?: string) {
  if (!name) return "";
  return name
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (slug),
      product_images (image_url)
    `);

  if (error) {
    console.error("Error fetching products", error);
    return [];
  }

  return (data || []).map((p: any) => ({
    id: p.id,
    name: p.name,
    price: p.price !== undefined ? String(p.price) : "",
    image: p.main_imagen_url || p.image || "",
    slug: p.slug ?? makeSlugFromName(p.name),
    category: p.categories?.slug ?? "",
    images: p.product_images?.map((img: any) => img.image_url) || [],
  }));
}

export async function fetchProductsByCategory(
  categorySlug: string
): Promise<Product[]> {

  const { data: categoryData, error: categoryError } = await supabase
    .from("categories")
    .select("id, slug")
    .eq("slug", categorySlug)
    .maybeSingle();

  if (categoryError || !categoryData) {
    console.error("Category not found", categoryError);
    return [];
  }

  const categoryId = categoryData.id;


  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (slug),
      product_images (image_url)
    `)
    .eq("category_id", categoryId);

  if (error) {
    console.error("Error fetching products by category", error);
    return [];
  }

  return (data || []).map((p: any) => ({
    id: p.id,
    name: p.name,
    price: p.price !== undefined ? String(p.price) : "",
    image: p.main_imagen_url || "",
    slug: p.slug ?? makeSlugFromName(p.name),
    category: p.categories?.slug ?? "",
    images: p.product_images?.map((img: any) => img.image_url) || [],
  }));
}

export async function fetchProductBySlug(
  slug: string
): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (slug),
      product_images (image_url)
    `)
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) {
    console.error("Error fetching product by slug", error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    price: data.price !== undefined ? String(data.price) : "",
    image: data.main_imagen_url || "",
    slug: data.slug ?? makeSlugFromName(data.name),
    category: data.categories?.slug ?? "",
    images: data.product_images?.map((img: any) => img.image_url) || [],
  };
}

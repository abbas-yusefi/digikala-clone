type Product = {
  product_id: number;
  title: string;
  description: string;
  price: number;
  discount: number | null;
  brand_id: number;
  category_id: number;
};

type Image = {
  product_id: number;
  product_image_id: number;
  image_url: string;
};

type Brand = {
  brand_id: number;
  name: string;
  slug: string;
};

type Cart = {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  added_at: number;
  updated_at: number;
};

type RecentSearches = {
  id: number;
  search_term: string;
  searched_at: number;
  user_id: number;
};

type WithImage<T> = T & { image_url: string };

type CategorySlugs =
  | "mobile"
  | "laptop"
  | "headphones"
  | "smartwatch"
  | "tablet";

type FilteredBrands = {
  brand_brand_id: number;
  brand_name: string;
  slug: string;
  product_count: number;
};

type ProductCard = Omit<Product, "category_id" | "brand_id" | "descripiton">;

type Response = {
  success: boolean;
  rowCount: number | null;
};

export type {
  Product,
  Image,
  Brand,
  Cart,
  RecentSearches,
  WithImage,
  CategorySlugs,
  FilteredBrands,
  ProductCard,
  Response,
};

export type Product = {
  product_id: number;
  title: string;
  description: string;
  price: number;
  discount: number | null;
  brand_id: number;
  category_id: number;
};

export type Image = {
  product_id: number;
  product_image_id: number;
  image_url: string;
};

export type Cart = {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  added_at: number;
  updated_at: number;
};

export type WithImage<T> = T & { image_url: string };

export type ProductCard = Omit<
  Product,
  "category_id" | "brand_id" | "descripiton"
>;

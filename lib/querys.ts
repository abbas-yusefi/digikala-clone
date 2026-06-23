import pool from "./db";
import { Params } from "./types/params";

export type GetProductById = {
  product_id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
};

export type GetImageById = {
  product_image_id: number;
  image_url: string;
};
export type GetProductByCategory = {
  product_id: number;
  title: string;
  price: number;
  discount: number;
  image_url: string;
};

const firstHomePageDiscount = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { rows } = await pool.query(`
SELECT DISTINCT ON(product.product_id)
product.product_id,
title,
description,
price,
discount,
image_url
FROM product
INNER JOIN product_image
ON product.product_id = product_image.product_id
WHERE discount > 0
ORDER BY product.product_id 
LIMIT 15
        `);
  return rows;
};
const secondHomePageDiscount = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { rows } = await pool.query(`
SELECT DISTINCT ON(product.product_id)
product.product_id,
title,
description,
price,
discount,
image_url
FROM product
INNER JOIN product_image
ON product.product_id = product_image.product_id
WHERE discount > 0
ORDER BY product.product_id DESC
LIMIT 14
        `);
  return rows;
};

const getAllProductImages = async () => {
  const { rows } = await pool.query(`
        SELECT DISTINCT ON (product_id) product_id, image_url
        FROM product_image
        ORDER BY product_id, product_image_id
      `);
  return rows;
};

const getProductById = async (id: number) => {
  const { rows } = await pool.query(
    `
          SELECT 
          DISTINCT ON(p.product_id)
         p.product_id,
          title,
          description,
          price,
          discount,
          image_url
          FROM product p
          INNER JOIN product_image i
          ON p.product_id = i.product_id
          WHERE p.product_id = $1
          `,
    [id],
  );
  return rows;
};

const getImageById = async (id: number) => {
  const { rows } = await pool.query(
    `
 SELECT product_image_id,image_url FROM product_image WHERE product_id = $1`,
    [id],
  );
  return rows;
};

const getProductByCategory = async (id: number) => {
  const { rows } = await pool.query(
    `
        SELECT DISTINCT ON (p.product_id)
      p.product_id,
      p.title,
      p.price,
      p.discount,
      i.image_url
    FROM product p  
    INNER JOIN product_image i ON p.product_id = i.product_id
    WHERE p.category_id = $1
    ORDER BY p.product_id, i.product_image_id
    `,
    [id],
  );
  return rows;
};
const getDiscountedProductByCategory = async (id: number) => {
  const { rows } = await pool.query(
    `
        SELECT DISTINCT ON (p.product_id)
      p.product_id,
      p.title,
      p.price,
      p.discount,
      i.image_url
    FROM product p  
    INNER JOIN product_image i ON p.product_id = i.product_id
    WHERE p.category_id = $1 AND p.discount > 0
    ORDER BY p.product_id, i.product_image_id
    `,
    [id],
  );
  return rows;
};

const getAllCartProducts = async (email: string) => {
  const { rows } = await pool.query(
    `
SELECT 
DISTINCT ON(p.product_id)
c.id,
i.image_url,
p.product_id,
p.title,
p.price,
p.discount,
c.quantity
FROM cart c
INNER JOIN product p
ON p.product_id = c.product_id
INNER JOIN "user" u
ON u.user_id = c.user_id
INNER JOIN product_image i
ON i.product_id = c.product_id
WHERE u.email = $1
    `,
    [email.toLowerCase()],
  );

  return rows;
};

const deleteProductFromCart = async (cartId: number) => {
  await pool.query(
    `
    DELETE FROM cart
    WHERE id = $1
    `,
    [cartId],
  );
};
const addProductToCart = async (
  productId: string,
  userId: string,
  quantity: string,
) => {
  const { rows } = await pool.query(
    `
    INSERT INTO cart(product_id,user_id,quantity)
    VALUES($1,$2,$3)
    `,
    [productId, userId, quantity ? quantity : 1],
  );
  return rows;
};

const getProductsTitle = async () => {
  const { rows } = await pool.query(`SELECT title FROM product`);
  return rows;
};

const getProductsByTitle = async (title: string) => {
  const { rows } = await pool.query(
    `SELECT * FROM product 
     JOIN brand ON brand.brand_id = product.brand_id
     WHERE to_tsvector(title || ' ' || brand.name || ' ' || brand.slug) @@ to_tsquery($1)

     `,
    [title.split(" ").join(" & ")],
  );
  return rows;
};

const addRecentlySearched = async (searchedTerm: string, userId: string) => {
  await pool.query(
    `
    INSERT INTO recent_searches(search_term,user_id)
    VALUES($1,$2)
    `,
    [searchedTerm, userId],
  );
};

const getRecentlySearched = async (userId: string) => {
  const { rows } = await pool.query(
    `
    SELECT search_term,id FROM recent_searches
    WHERE user_id = $1
    LIMIT 10
    `,
    [userId],
  );
  return rows;
};

const deleteOldSearches = async () => {
  await pool.query(`
    DELETE FROM recent_searches 
WHERE searched_at < NOW() - INTERVAL '30 days';
    `);
};

const deleteAllRecentSearches = async (userId: string) => {
  await pool.query(
    `
    DELETE FROM recent_searches
    WHERE user_id = $1
    `,
    [userId],
  );
};

const getBrandNames = async () => {
  const { rows } = await pool.query(`
    SELECT brand_id,name,slug FROM brand
    `);
  return rows;
};

const getFilteredProducts = async (params: Params) => {
  const conditions: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;
  let orderBy = "ORDER BY p.product_id ASC";
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  if (params.q) {
    conditions.push(
      `to_tsvector(p.title || ' ' || p.description || ' ' || b.name || ' ' || b.slug || c.slug ||' ' || c.name) @@ plainto_tsquery($${paramIndex})`,
    );
    values.push(params.q);
    paramIndex++;
  }

  if (params.category) {
    conditions.push(`c.slug = $${paramIndex}`);
    values.push(params.category);
    paramIndex++;
  }

  if (params.brand) {
    conditions.push(`b.slug = $${paramIndex}`);
    values.push(params.brand);
    paramIndex++;
  }
  if (params.cursor) {
    if (params.dir === "prev") {
      conditions.push(`p.product_id < $${paramIndex}`);
      orderBy = "ORDER BY p.product_id DESC";
    } else {
      conditions.push(`p.product_id > $${paramIndex}`);
      orderBy = "ORDER BY p.product_id ASC";
    }
    values.push(Number(params.cursor));
    paramIndex++;
  }

  if (params.discount) {
    conditions.push(`p.discount > 0`);
  }

  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

  const query = `
    SELECT DISTINCT ON(p.product_id) p.*, m.image_url FROM product p
    LEFT JOIN category c ON p.category_id = c.category_id
    LEFT JOIN brand b ON p.brand_id = b.brand_id
    INNER JOIN product_image m ON p.product_id = m.product_id
 AND m.ctid = (
    SELECT MIN(ctid) FROM product_image WHERE product_id = p.product_id
  )
    ${whereClause}
    ${orderBy}
    LIMIT 8
  `;

  const { rows } = await pool.query(query, values);

  let products = rows;
  if (params.dir === "prev") {
    products = [...rows].reverse(); // or products.reverse()
  }

  return products;
};

const getFilteredProductsLength = async (params: Params) => {
  const conditions: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  if (params.q) {
    conditions.push(
      `to_tsvector(p.title || ' ' || p.description || ' ' || b.name || ' ' || b.slug || c.slug ||' ' || c.name) @@ plainto_tsquery($${paramIndex})`,
    );
    values.push(params.q);
    paramIndex++;
  }

  if (params.category) {
    conditions.push(`c.slug = $${paramIndex}`);
    values.push(params.category);
    paramIndex++;
  }

  if (params.brand) {
    conditions.push(`b.slug = $${paramIndex}`);
    values.push(params.brand);
    paramIndex++;
  }

  if (params.discount) {
    conditions.push(`p.discount > 0`);
  }

  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

  const query = `
    SELECT DISTINCT ON(p.product_id) p.*, m.image_url FROM product p
    LEFT JOIN category c ON p.category_id = c.category_id
    LEFT JOIN brand b ON p.brand_id = b.brand_id
    INNER JOIN product_image m ON p.product_id = m.product_id
    ${whereClause}
    ORDER BY p.product_id ASC
  `;

  const { rows } = await pool.query(query, values);
  return rows;
};

export {
  firstHomePageDiscount,
  secondHomePageDiscount,
  getAllProductImages,
  getProductById,
  getImageById,
  getProductByCategory,
  getDiscountedProductByCategory,
  getAllCartProducts,
  deleteProductFromCart,
  addProductToCart,
  getProductsTitle,
  getProductsByTitle,
  addRecentlySearched,
  getRecentlySearched,
  deleteOldSearches,
  deleteAllRecentSearches,
  getBrandNames,
  getFilteredProducts,
  getFilteredProductsLength,
};

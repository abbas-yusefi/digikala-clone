import pool from "./db";

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
  // await new Promise((resolve) => setTimeout(resolve, 3000));
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
         product_id,
          title,
          description,
          price,
          discount
          FROM product
          WHERE product_id = $1
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
c.id,
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
WHERE u.email = $1
    `,
    [email.toLowerCase()],
  );

  return rows;
};

const deleteProductFromCart = async (cartId: number) => {
  const { rows } = await pool.query(
    `
    DELETE FROM cart
    WHERE id = $1
    `,
    [cartId],
  );
};
const addProductToCart = async (productId, userId, quantity) => {
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
};

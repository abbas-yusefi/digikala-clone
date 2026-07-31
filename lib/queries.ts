import { unstable_cache } from "next/cache";
import pool from "./db";
import { Params } from "./types/params";
import {
  Cart,
  FilteredBrands,
  Image,
  Product,
  ProductCard,
  RecentSearches,
  Response,
  WithImage,
} from "./types/product";

const getHomeDiscountProducts = unstable_cache(
  async (changeSet?: boolean): Promise<WithImage<ProductCard>[]> => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const changeProductSet = changeSet
      ? "ORDER BY p.product_id DESC LIMIT 14"
      : "ORDER BY p.product_id LIMIT 15";

    const { rows } = await pool.query(`
SELECT DISTINCT ON(p.product_id)
p.product_id,
p.title,
p.price,
p.discount,
i.image_url
FROM product p
INNER JOIN product_image i
ON p.product_id = i.product_id
WHERE p.discount > 0
${changeProductSet}
        `);
    return rows;
  },
  ["home-discount-products"],
  { revalidate: 3600 },
);

const getProduct = unstable_cache(
  async (id: string | number): Promise<WithImage<Product>[]> => {
    const { rows } = await pool.query(
      `
          SELECT 
          DISTINCT ON(p.product_id)
         p.product_id,
          title,
          description,
          price,
          discount,
          image_url,
          category_id,
          brand_id
          FROM product p
          INNER JOIN product_image i
          ON p.product_id = i.product_id
          WHERE p.product_id = $1
          `,
      [id],
    );
    return rows;
  },
  ["product"],
  { revalidate: 60 },
);

const getImage = unstable_cache(
  async (id: string | number): Promise<Omit<Image, "product_id">[]> => {
    const { rows } = await pool.query(
      `
 SELECT product_image_id,image_url FROM product_image WHERE product_id = $1`,
      [id],
    );
    return rows;
  },
  ["product-image"],
  { revalidate: 60 },
);

const getAllCartProducts = async (
  email: string,
): Promise<WithImage<Pick<Cart, "id" | "quantity"> & ProductCard>[]> => {
  const { rows } = await pool.query(
    `
SELECT 
DISTINCT ON(p.product_id)
c.id,
c.quantity,
i.image_url,
p.product_id,
p.title,
p.price,
p.discount
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

const deleteProductFromCart = async (
  product_id: number | string,
  user_id: string | number,
): Promise<Response> => {
  const result = await pool.query(
    `
    DELETE FROM cart
    WHERE product_id = $1 AND user_id = $2
    `,
    [product_id, user_id],
  );
  return {
    success: result.rowCount === 1,
    rowCount: result.rowCount,
  };
};

const addProductToCart = async (
  productId: string | number,
  userId: string | number,
  quantity: string | number,
): Promise<Response> => {
  const result = await pool.query(
    `
    INSERT INTO cart(product_id,user_id,quantity)
    VALUES($1,$2,$3)
    `,
    [productId, userId, quantity ? quantity : 1],
  );

  return {
    success: result.rowCount === 1,
    rowCount: result.rowCount,
  };
};

const addRecentlySearched = async (
  searchedTerm: string,
  userId: string,
): Promise<void> => {
  await pool.query(
    `
    INSERT INTO recent_searches(search_term,user_id)
    VALUES($1,$2)
    `,
    [searchedTerm, userId],
  );
};

const getRecentlySearched = async (
  userId: string,
): Promise<Pick<RecentSearches, "id" | "search_term">[]> => {
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

const deleteOldSearches = async (): Promise<void> => {
  await pool.query(`
    DELETE FROM recent_searches 
WHERE searched_at < NOW() - INTERVAL '30 days';
    `);
};

const deleteAllRecentSearches = async (userId: string): Promise<void> => {
  await pool.query(
    `
    DELETE FROM recent_searches
    WHERE user_id = $1
    `,
    [userId],
  );
};

const getFilteredProducts = unstable_cache(
  async (
    params: Params["params"],
    limit?: number,
  ): Promise<WithImage<ProductCard>[]> => {
    const conditions: string[] = [];
    const values: (string | number)[] = [];
    let paramIndex = 1;
    let orderBy = "ORDER BY p.product_id ASC";
    const productsLimit = limit && limit > 0 ? `LIMIT ${limit}` : "";
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    if (params.q) {
      conditions.push(
        `to_tsvector('simple', 
      COALESCE(p.title, '') || ' ' || 
      COALESCE(p.description, '') || ' ' || 
      COALESCE(b.name, '') || ' ' || 
      COALESCE(b.slug, '') || ' ' || 
      COALESCE(c.name, '') || ' ' || 
      COALESCE(c.slug, '')
    ) @@ websearch_to_tsquery('simple', $${paramIndex})`,
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
    SELECT
    DISTINCT ON(p.product_id)
    p.title,
    p.product_id,
    p.price,
    p.discount,
    i.image_url
    FROM product p
    LEFT JOIN category c ON p.category_id = c.category_id
    LEFT JOIN brand b ON p.brand_id = b.brand_id
    INNER JOIN product_image i ON p.product_id = i.product_id
 AND i.ctid = (
    SELECT MIN(ctid) FROM product_image WHERE product_id = p.product_id
  )
    ${whereClause}
    ${orderBy}
    ${productsLimit}
  `;

    const { rows } = await pool.query(query, values);

    let products = rows;
    if (params.dir === "prev") {
      products = [...rows].reverse(); // or products.reverse()
    }

    return products;
  },
  ["filtered-products"],
  { revalidate: 60 },
);

const getFilteredBrandsPerCategory = unstable_cache(
  async (category_id: string | number): Promise<FilteredBrands[]> => {
    const { rows } = await pool.query(
      `SELECT 
    b.brand_id AS brand_brand_id,
    b.name AS brand_name,
    b.slug AS slug,
    COUNT(p.product_id) AS product_count
FROM product p
JOIN brand b ON p.brand_id = b.brand_id
WHERE p.category_id = $1
GROUP BY b.brand_id, b.name
HAVING COUNT(p.product_id) >= 3
ORDER BY b.name;`,
      [category_id],
    );
    return rows;
  },
  ["filtered-category-brands"],
  { revalidate: 86400 },
);

const itemExistsInCart = async (
  product_id: number | string,
  user_id: undefined | string,
): Promise<boolean> => {
  const { rows } = await pool.query(
    `SELECT * FROM cart WHERE product_id = $1 AND user_id = $2`,
    [product_id, user_id],
  );
  if (rows.length > 0) return true;
  return false;
};

const itemQuantity = async (
  user_id: string | number,
  product_id: string | number,
): Promise<Pick<Cart, "quantity">[]> => {
  const { rows } = await pool.query(
    `SELECT quantity FROM cart WHERE user_id = $1 AND product_id = $2`,
    [user_id, product_id],
  );
  return rows;
};

const incrementProductQuantity = async (
  product_id: string | number,
  user_id: string | number,
): Promise<Response> => {
  const result = await pool.query(
    `
    UPDATE cart set quantity = quantity + 1 WHERE product_id = $1 AND user_id = $2
    `,
    [product_id, user_id],
  );

  return {
    success: result.rowCount === 1,
    rowCount: result.rowCount,
  };
};

const decrementProductQuantity = async (
  product_id: string | number,
  user_id: string | number,
): Promise<Response> => {
  const result = await pool.query(
    `
    UPDATE cart set quantity = quantity - 1 WHERE product_id = $1 AND user_id = $2
    `,
    [product_id, user_id],
  );

  return {
    success: result.rowCount === 1,
    rowCount: result.rowCount,
  };
};

export {
  getHomeDiscountProducts,
  getProduct,
  getImage,
  getAllCartProducts,
  deleteProductFromCart,
  addProductToCart,
  addRecentlySearched,
  getRecentlySearched,
  deleteOldSearches,
  deleteAllRecentSearches,
  getFilteredProducts,
  getFilteredBrandsPerCategory,
  itemExistsInCart,
  itemQuantity,
  incrementProductQuantity,
  decrementProductQuantity,
};

"use server";

import pool from "../db";

const createNewProduct = async (formData: FormData) => {
  try {
    const title = formData.get("title");
    const description = formData.get("description");
    const price = formData.get("price");
    const discount = formData.get("discount") || 0;
    const category_id = formData.get("category_id");
    const brand_id = formData.get("brand_id");

    await pool.query(
      `INSERT INTO product(title,description,price,discount,category_id,parent_id) VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6)`,
      [title, description, price, discount, category_id, brand_id],
    );
  } catch (err) {
    console.log(err);
  }
};

const createNewCategory = async (formData: FormData) => {
  try {
    const name = formData.get("name");
    const slug = formData.get("slug");
    const parent_id = formData.get("parent_id") || null;

    await pool.query(
      `INSERT INTO category(name,slug,parnet_id) VALUES($1, $2, $3)`,
      [name, slug, parent_id],
    );
  } catch (err) {
    console.log(err);
  }
};

const createNewBrand = async (formData: FormData) => {
  try {
    const name = formData.get("name");
    const slug = formData.get("slug");

    await pool.query(`INSERT INTO brand(name,slug) VALUES($1, $2)`, [
      name,
      slug,
    ]);
  } catch (err) {
    console.log(err);
  }
};

const createNewImage = async (formData: FormData) => {
  try {
    const image_url = formData.get("image_url");
    const product_id = formData.get("product_id");
    console.log(image_url, product_id);
    await pool.query(
      `INSERT INTO product_image(image_url,product_id) VALUES($1, $2)`,
      [image_url, product_id],
    );
  } catch (err) {
    console.log(err);
  }
};

export { createNewProduct, createNewCategory, createNewBrand, createNewImage };

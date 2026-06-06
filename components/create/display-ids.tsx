import pool from "@/lib/db";

const DisplayIds = async () => {
  const { rows: categoryRows } = await pool.query(`
        SELECT category_id,name,parent_id FROM category
        `);

  const { rows: brandRows } = await pool.query(`
        SELECT brand_id,name FROM brand
        `);
  const { rows: imageRows } = await pool.query(`
        SELECT product_id,COUNT(*) as images FROM product_image GROUP BY product_id ORDER BY product_id
        `);
  const { rows: productRows } = await pool.query(`
            SELECT product_id,title,price FROM product
        `);
  return (
    <div className="mt-20">
      <h2>IDs</h2>
      <div className="flex flex-col gap-10 items-end">
        <div>
          {productRows.map((row) => (
            <div key={row.product_id}>
              {row.product_id} - {row.title} - {row.price}
            </div>
          ))}
        </div>
        <div>
          {categoryRows.map((row) => (
            <div key={row.category_id}>
              {row.category_id} - {row.name} - {row.parent_id}
            </div>
          ))}
        </div>
        <div>
          {brandRows.map((row) => (
            <div key={row.brand_id}>
              {row.brand_id} - {row.name}
            </div>
          ))}
        </div>
        <div>
          {imageRows.map((row) => (
            <div key={row.product_id}>
              {row.images} images - product id {row.product_id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayIds;

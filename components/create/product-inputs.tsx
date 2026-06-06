import {
  createNewProduct,
  createNewCategory,
  createNewBrand,
  createNewImage,
} from "@/lib/actions/create-product";

const ProductInputs = () => {
  return (
    <form action={createNewProduct}>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="description" placeholder="description" />
      <input type="text" name="price" placeholder="price" />
      <input type="text" name="discount" placeholder="discount" />
      <input type="text" name="category_id" placeholder="category_id" />
      <input type="text" name="parent_id" placeholder="parent_id" />
      <button>submit</button>
    </form>
  );
};

const CategoryInputs = () => {
  return (
    <form action={createNewCategory}>
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="parent_id" placeholder="parent_id" />
      <button>submit</button>
    </form>
  );
};
const BrandInputs = () => {
  return (
    <form action={createNewBrand}>
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="slug" placeholder="slug" />
      <button>submit</button>
    </form>
  );
};
const ImageInputs = () => {
  return (
    <form action={createNewImage}>
      <input type="text" name="image_url" placeholder="image_url" />
      <input type="text" name="product_id" placeholder="product_id" />
      <button>submit</button>
    </form>
  );
};

export { ProductInputs, CategoryInputs, BrandInputs, ImageInputs };

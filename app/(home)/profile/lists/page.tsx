import { auth } from "@/auth";
import ProductCard from "@/components/search/product-card";
import { getAllFavorites } from "@/lib/queries";

const page = async () => {
  const session = await auth();
  const products = await getAllFavorites(session?.user.id);
  return (
    <div>
      <h2>lists</h2>
      <div className="min-[425px]:grid min-[425px]:grid-cols-2 min-[1280px]:grid-cols-3 min-[1440px]:grid-cols-4">
        {products.map((product) => (
          <ProductCard data={product} key={product.product_id} />
        ))}
      </div>
    </div>
  );
};

export default page;

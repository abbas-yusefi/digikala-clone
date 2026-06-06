import ProductCard from "@/components/ui/product-card";
import Image from "next/image";
import { getProductById, getImageById } from "@/lib/querys";
import AddToCart from "./add-to-cart";
import { auth } from "@/auth";

const page = async ({ params }: { params: Promise<{ product: string }> }) => {
  const { product } = await params;
  const productRow = await getProductById(product);
  const imageRow = await getImageById(product);
  const session = await auth();
  const userId = session?.user?.id;
  return (
    <>
      {imageRow.map((image) => (
        <Image
          key={image.product_image_id}
          alt={productRow[0].title}
          src={image.image_url}
          height={70}
          width={70}
        />
      ))}
      <ProductCard
        product={productRow[0]}
        key={`product-${productRow[0].product_id}`}
      />
      <AddToCart
        productId={productRow[0].product_id}
        userId={userId}
        quantity={2}
      />
    </>
  );
};

export default page;

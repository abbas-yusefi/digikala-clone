import ProductCard from "@/components/ui/product-card";
import Image from "next/image";
import { getProduct, getImage } from "@/lib/querys";
import AddToCart from "./add-to-cart";
import { auth } from "@/auth";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }): Promise<Metadata> {
//   const { id } = await params;
//   const productRow = await getProduct(id);
//   const imagesRow = await getImageById(id);

//   const productData = productRow[0];

//   if (!product) {
//     return {
//       title: "محصول یافت نشد",
//     };
//   }

//   return {
//     title: productData.title,

//     description: productData
//   }

// }

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const productRow = await getProduct(id);
  const imageRow = await getImage(id);

  if (!productRow || productRow.length === 0) {
    notFound();
  }

  console.log(productRow[0]);

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

import ProductCard from "@/components/ui/product-card";
import Image from "next/image";
import { getProduct, getImage } from "@/lib/querys";
import AddToCart from "./add-to-cart";
import { auth } from "@/auth";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const productRow = await getProduct(id);
  const ImageRow = await getImage(id);

  const productData = productRow[0];
  const productImage = ImageRow[0].image_url;

  if (!productRow || productRow.length === 0) {
    return {
      title: "محصول یافت نشد",
      robots: { index: false },
    };
  }

  return {
    title: productData.title,
    description: productData.description,

    openGraph: {
      title: productData.title,
      description: productData.description,
      type: "website",
      images: productImage ? [{ url: `${productImage}` }] : [],
    },

    twitter: {
      card: "summary_large_image",
      title: productData.title,
      description: productData.description,
      images: productImage ? [{ url: `${productImage}` }] : [],
    },
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const productRow = await getProduct(id);
  const imageRow = await getImage(id);

  if (!productRow || productRow.length === 0) {
    notFound();
  }

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
        product_id={productRow[0].product_id}
        user_id={userId && userId}
        quantity={2}
      />
    </>
  );
};

export default page;

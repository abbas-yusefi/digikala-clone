import Image from "next/image";
import { getProduct, getImage } from "@/lib/querys";
import AddToCart from "./add-to-cart";
import { auth } from "@/auth";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculateDiscountedPrice } from "@/lib/utils/discount";
import DiscountPercentage from "@/components/ui/discount-percentage";

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

  const productData = productRow[0];
  const productImage = imageRow[0];

  const isDiscounted = productData?.discount && productData.discount > 0;
  const discountedPrice = calculateDiscountedPrice(
    productData.price,
    productData.discount,
  );

  if (!productRow || productRow.length === 0) {
    notFound();
  }

  const session = await auth();
  const userId = session?.user?.id;
  return (
    <>
      <script
        type="application/Id+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: productData.title,
            description: productData.description,
            image: productImage || [],
            sku: productData.product_id.toString(),
            offers: {
              "@type": "Offer",
              price: productData.price.toString(),
              priceCurrency: "IRR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <article className="bg-surface-primary">
        <Image
          key={productImage.product_image_id}
          alt={productData.title}
          src={productImage.image_url}
          height={70}
          width={70}
        />
        <AddToCart
          product_id={productData.product_id}
          user_id={userId && userId}
          quantity={2}
        />

        <div className="fixed bottom-0 right-0 w-full h-20 border border-black/15 px-3">
          <div className="flex justify-between items-center h-full w-full">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[0.7rem] text-text-secondary line-through">
                  {isDiscounted && productData.price.toLocaleString()}
                </span>
                <DiscountPercentage
                  className="text-xs"
                  discount={productData.discount}
                />
              </div>
              <span
                className="text-balance max-[425px]:text-xs font-bold"
                style={{ direction: "rtl" }}
              >
                {isDiscounted
                  ? discountedPrice.toLocaleString()
                  : productData.price.toLocaleString()}{" "}
                تومان
              </span>
            </div>
            <button className="w-[47%] py-4 rounded-lg bg-brand-secondary cursor-pointer text-white font-semibold text-sm">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default page;

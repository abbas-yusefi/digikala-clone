import Image from "next/image";
import { getProduct, getImage } from "@/lib/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import AddToCartSection from "@/components/product/add-to-cart-section";
import ProductHeader from "@/components/product/product-header";

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

  if (!productRow || productRow.length === 0) {
    notFound();
  }

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
      <main>
        <ProductHeader />
        <article className="bg-surface-primary">
          <Image
            key={productImage.product_image_id}
            alt={productData.title}
            src={productImage.image_url}
            height={70}
            width={70}
          />
          <AddToCartSection data={productData} />
        </article>
      </main>
    </>
  );
};

export default page;

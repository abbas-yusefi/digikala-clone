import Image from "next/image";
import Link from "next/link";

type Product = {
  product_id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image_url: string;
};

const ProductCard = async ({ product }: { product: Product }) => {
  const discountedPrice =
    Math.round(
      (product.price - product.price * (product.discount / 100)) / 10000,
    ) * 10000;

  return (
    <>
      <Link href={`/product/${product.product_id}`} className="flex">
        <article className="flex flex-col justify-center bg-green-200">
          <div>
            {product.image_url && (
              <Image
                alt={product.title}
                src={product.image_url}
                width={50}
                height={50}
              />
            )}
          </div>
          <div>
            <h3 className="text-xs line-clamp-1 w-fit">{product.title}</h3>
            <span className="block">{discountedPrice}</span>
            <span>{product.price}</span>
          </div>
        </article>
      </Link>
    </>
  );
};

export default ProductCard;

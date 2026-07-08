import { getImage, getProduct } from "@/lib/querys";
import { calculateDiscountedPrice } from "@/lib/utils/discount";
import Image from "next/image";

const TopProduct = async ({ id }: { id: number }) => {
  const singleProductData = await getProduct(id);
  const product = singleProductData[0];
  const { discount, price, title } = product;

  const singleImageData = await getImage(id);
  const image = singleImageData[0];
  const { image_url } = image;

  const discountedPrice = calculateDiscountedPrice(price, discount);
  return (
    <div className="mt-40 w-full flex justify-center items-center flex-col">
      <div className="">
        <Image
          src={image_url}
          alt="عکس گوشی سامسونگ s24"
          height={200}
          width={200}
        />
      </div>
      <div>
        <span>{title}</span>
        <div className="flex justify-between">
          <span>{title}</span>
          <span>{discountedPrice}</span>
        </div>
        <div>
          <button>submit</button>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;

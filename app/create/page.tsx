export const dynamic = "force-dynamic";

import DisplayIds from "@/components/create/display-ids";
import {
  ProductInputs,
  CategoryInputs,
  BrandInputs,
  ImageInputs,
} from "@/components/create/product-inputs";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2>product</h2>
        <ProductInputs />
      </div>
      <div>
        <h2>category</h2>
        <CategoryInputs />
      </div>
      <div>
        <h2>brand</h2>
        <BrandInputs />
      </div>
      <div>
        <h2>image</h2>
        <ImageInputs />
      </div>
      <DisplayIds />
    </div>
  );
};

export default page;

import React from "react";
import HorizontalNav from "../shared/horizontal-nav";
import circleData from "@/public/productcircle";
import ProductCircle from "./product-circle";

const ProductCWrapper = () => {
  return (
    <HorizontalNav className="lg:justify-center pb-2">
      {circleData.map((data) => (
        <ProductCircle key={data.textFirstLine} data={data} />
      ))}
    </HorizontalNav>
  );
};

export default ProductCWrapper;

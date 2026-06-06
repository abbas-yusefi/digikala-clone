import React from "react";
import HorizantalNav from "../shared/horizantal-nav";
import circleData from "@/public/productcircle";
import ProductCircle from "./product-circle";

const ProductCWrapper = () => {
  return (
    <HorizantalNav>
      {circleData.map((data) => (
        <ProductCircle key={data} data={data} />
      ))}
    </HorizantalNav>
  );
};

export default ProductCWrapper;

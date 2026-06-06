import React from "react";
import HorizantalNav from "../shared/horizantal-nav";
import { brandImages } from "@/public/brands";
import BrandCard from "./brand-card";

const Brands = () => {
  return (
    <HorizantalNav className="gap-5 my-5 px-5">
      {brandImages.map((brand) => (
        <BrandCard key={brand.alt} data={brand} />
      ))}
    </HorizantalNav>
  );
};

export default Brands;

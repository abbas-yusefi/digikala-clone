import HorizantalNav from "@/components/shared/horizantal-nav";
import ProCard from "./product-card";

const DisplayProducts = async ({ sectionName, Data }) => {
  return (
    <section>
      <div className="h-10 w-full flex justify-between items-center bg-green-200">
        <button>more...</button>
        <h2>{sectionName}</h2>
      </div>
      <HorizantalNav>
        {Data.map((data) => (
          <ProCard product={data} key={data.product_id} />
        ))}
      </HorizantalNav>
    </section>
  );
};

export default DisplayProducts;

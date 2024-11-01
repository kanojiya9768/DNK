import { FeaturedProducts } from "../../../../../json/featuredProducts";
import { FeaturedCard } from "../cards/FeaturedCard";

export const FeaturedSection = () => {
  return (
    <div className="my-20 w-[86%] m-auto">
      {/* //heading  */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[40px] font-semibold">Featured Products</h1>
        <div className="w-[150px] border-b-2 border-blue-500 my-5"></div>
      </div>

      {/* //products  */}
      <div className="grid grid-cols-5 gap-6 mt-8">
        {FeaturedProducts?.map((product, index) => {
          return (
            <FeaturedCard
              key={index}
              ProductName={product?.productName}
              image={product?.image}
              categoryName={product?.categoryName}
              actualPrice={product?.actualPrice}
              discountedPrice={product?.discountedPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

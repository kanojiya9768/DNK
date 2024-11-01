import { ConvertToCurrecy } from "@/utils/helperFn";
import Image from "next/image";
import { Content } from "../../elements/Content";

export const FeaturedCard = ({
  image,
  ProductName,
  categoryName,
  actualPrice,
  discountedPrice,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="product-image"
        className="w-[250px] h-[250px] object-cover drop-shadow-sm shadow-sm"
      />
      <div>
        <Content
          text={ProductName}
          className={"truncate font-medium capitalize"}
        />
        <div>
          <Content text={categoryName} className={"text-sm text-gray-500"} />
          <div className="flex gap-2">
            <Content
              text={ConvertToCurrecy(actualPrice, "USD")}
              className={"line-through text-gray-500"}
            />
            <Content text={ConvertToCurrecy(discountedPrice, "USD")} />
          </div>
        </div>
      </div>
    </div>
  );
};

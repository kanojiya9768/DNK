import { Content } from "@/app/components/elements/Content";
import { FIndMoreButton } from "@/app/components/elements/FIndMoreButton";
import { ShopNowButton } from "@/app/components/elements/ShopNowButton";

export const DiscountBanner = () => {
  return (
    <div className="h-[450px] w-[88%] m-auto bg-DiscountBanner bg-top flex items-center pl-40	bg-no-repeat  bg-fixed bg-cover relative mb-20">
      <div className="absolute inset-0 bg-primary-color opacity-30"></div>
      <div className="flex flex-col gap-6 absolute inset-0 pt-24 pl-24">
        <div className="flex gap-2 flex-col">
          <Content
            text={"Limited Time Offer"}
            className={"font-semibold text-white text-[18px]"}
          />
          <Content
            text={"Special Edition"}
            className={"text-[45px] font-semibold text-white"}
          />
          <Content
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
            className={"text-white w-[600px]"}
          />
          <Content
            text={"Buy This T-shirt At 20% Discount, Use Code OFF20"}
            className={"text-[18px] text-white font-semibold w-[600px]"}
          />
        </div>
        <div className="flex gap-4">
          <ShopNowButton />
          <FIndMoreButton />
        </div>
      </div>
    </div>
  );
};

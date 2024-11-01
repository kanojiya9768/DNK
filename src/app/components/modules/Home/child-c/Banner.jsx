import { FIndMoreButton } from "@/app/components/elements/FIndMoreButton";
import { ShopNowButton } from "@/app/components/elements/ShopNowButton";
import { Content } from "../../../elements/Content";

export const Banner = () => {
  return (
    <div className="h-[90dvh] w-full bg-MainBanner bg-top flex items-center pl-40	bg-no-repeat  bg-fixed bg-cover relative">
      <div className="absolute inset-0 bg-primary-color opacity-50"></div>
      <div className="flex flex-col gap-6 absolute inset-0 pt-36 pl-40">
        <div className="flex gap-2 flex-col leading-[70px]">
          <Content
            text={"Raining Offers For"}
            className={"text-[66px] font-semibold text-white"}
          />
          <Content
            text={"Hot Summer!"}
            className={"text-[66px] font-semibold text-white"}
          />
        </div>
        <Content
          text={"25% Off On All Products"}
          className={"text-[26px] font-semibold text-white"}
        />
        <div className="flex gap-4">
          <ShopNowButton />
          <FIndMoreButton />
        </div>
      </div>
    </div>
  );
};

import { FeaturedSection } from "../../constant/Featured/FeaturedSection";
import { Content } from "../../elements/Content";
import { Banner } from "./child-c/Banner";
import { DiscountBanner } from "./child-c/DiscountBanner";
import { FacilitySection } from "./child-c/FacilitySection";
import { Latest } from "./child-c/Latest";
import { PartnerSection } from "./child-c/PartnerSection";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <PartnerSection />
      <Latest />
      <div className="bg-grey-color shadow-sm pt-4 pb-20">
        <FeaturedSection />
        <DiscountBanner />
        <FacilitySection />
      </div>
      <div className="py-14 pl-24 border-[1px]">
        <Content
          text={
            "SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS."
          }
          className={
            "text-[30px] font-semibold hover:text-blue-600 transition-all duration-200 cursor-pointer"
          }
        />
      </div>
    </div>
  );
};

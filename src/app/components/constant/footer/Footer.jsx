import Image from "next/image";
import { Button } from "../../elements/Button";
import { Content } from "../../elements/Content";
import { Input } from "../../elements/Input";

export const Footer = () => {
  const categories = [
    {
      heading: "For Her",
      categories: [
        "Women Jeans",
        "Tops and Shirts",
        "Heels and Flats",
        "Women Jackets",
        "Women Accessories",
      ],
    },
    {
      heading: "For Him",
      categories: [
        "Men Jeans",
        "Men Shirts",
        "Men Shoes",
        "Men Jackets",
        "Men Accessories",
      ],
    },
  ];

  return (
    <div className="border-b-[1px]">
      <div className="w-[82%] m-auto py-10 flex justify-between items-start">
        {/* //first logo and heading  */}
        <div className="space-y-2">
          <Image
            src={"/images/footer-logo.png"}
            width={1000}
            height={1000}
            alt="footer-logo"
            className="w-[90px] h-[30px]"
          />
          <Content
            text={"The best look anytime, anywhere."}
            className={"text-[18px] font-semibold"}
          />
        </div>

        {/* //categories  */}
        <div className="flex gap-20">
          {/* //for her  */}
          <div className="space-y-3">
            <Content text={categories[0]?.heading} className={"text-[22px]"} />
            <div className="space-y-1">
              {categories[0]?.categories?.map((category, index) => {
                return <Content key={index} text={category} className={"text-gray-500"} />;
              })}
            </div>
          </div>

          {/* //for him  */}
          <div className="space-y-3">
            <Content text={categories[1]?.heading} className={"text-[22px]"} />
            <div className="space-y-1">
              {categories[1]?.categories?.map((category, index) => {
                return <Content key={index} text={category} className={"text-gray-500"} />;
              })}
            </div>
          </div>
        </div>

        {/* //subscribe  */}
        <div className="space-y-3">
          <Content text={"Subscribe"} className={"text-[22px]"} />
          <div className="space-y-3">
            <Input
              className={
                "p-2 w-[250px] placeholder:text-gray-500 border-[1px] outline-none"
              }
              placeholder="Your email address..."
            />
            <Button
              btnText={"SUBSCRIBE"}
              className={"text-white !bg-blue-color text-[18px] !p-3 !px-10"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

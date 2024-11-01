import Image from "next/image";
import { Content } from "../../elements/Content";
import { ShopNowButton } from "../../elements/ShopNowButton";

const LatestCard = () => {
  const CardData = [
    {
      Heading: "20% Off On Tank Tops",
      imageSrc: "/images/latestimg3.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      btnText: "SHOP NOW",
      onclick: () => console.log("btn clicked"),
    },
    {
      Heading: "Latest Eyewear For You",
      imageSrc: "/images/latestimg2.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      btnText: "SHOP NOW",
      onclick: () => console.log("btn clicked"),
    },
    {
      Heading: "Let's Lorem Suit Up!",
      imageSrc: "/images/latestimg1.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
      btnText: "CHECK OUT",
      onclick: () => console.log("btn clicked"),
    },
  ];

  return (
    <div className="w-3/4 m-auto">
      <div className="mb-20 flex justify-between gap-10">
        {CardData?.map((Data, index) => {
          return (
            <div className="relative w-full" key={index}>
              <Image
                src={Data?.imageSrc}
                width={1000}
                height={1000}
                className="h-[400px] object-cover object-left"
                alt="images"
              />

              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute bottom-10 left-6 flex flex-col gap-6">
                <div>
                  <Content
                    text={Data?.Heading}
                    className={"text-[26px] font-semibold text-white"}
                  />
                  <Content text={Data?.desc} className={"text-white"} />
                </div>
                <ShopNowButton className={"px-6"} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestCard;

"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Slidersettings } from "../../../../../json/sliderSetting";

export const Partener = () => {
  const logos = [
    "/images/partener-logo-three.png",
    "/images/partener-logo-one.png",
    "/images/partener-logo-two.png",
    "/images/partener-logo-one.png",
    "/images/partener-logo-three.png",
    "/images/partener-logo-two.png",
  ];

  return (
    <div className="w-3/4 m-auto">
      <div className="my-20">
        <Slider {...Slidersettings}>
          {logos?.map((src, index) => {
            return (
              <div key={index} className="w-18 h-[25px]">
                <Image
                  width={1000}
                  height={1000}
                  src={src}
                  alt="Partner-Logos"
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

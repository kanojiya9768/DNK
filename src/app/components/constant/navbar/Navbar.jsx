import { Content } from "@/app/components/elements/Content";
import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

export const Navbar = () => {
  const Routes = [
    {
      Name: "About",
      Route: "/about",
    },
    {
      Name: "Contact Us",
      Route: "/contact-us",
    },
    {
      Name: "FAQ's",
      Route: "/contact-us",
    },
    {
      Name: "My Cart",
      Route: "/cart",
      icon: FiShoppingBag,
    },
    {
      Name: "My Profile",
      Route: "/profile",
      icon: VscAccount,
    },
  ];

  return (
    <div className="bg-primary-color w-full h-24 flex justify-between items-center px-8">
      <div className="w-[140px] h-[46px]">
        <Image
          src={"/images/desktop-logo.png"}
          width={1000}
          height={1000}
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* //routes  */}
      <div className="flex gap-8 font-lato text-white uppercase font-semibold">
        {Routes?.map((route, index) => {
          return (
            <div className="flex items-center cursor-pointer" key={index}>
              {!route.icon && (
                <Content className={"text-sm"} text={route?.Name} />
              )}
              {route?.icon ? (
                route.Name == "My Cart" ? (
                  <div className="w-max h-max relative">
                    <route.icon className="text-xl" />
                    <div className="bg-white text-black grid place-items-center rounded-full px-[6px] absolute -top-3 -right-4 text-sm">
                      <p>0</p>
                    </div>
                  </div>
                ) : (
                  <route.icon className="text-xl" />
                )
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

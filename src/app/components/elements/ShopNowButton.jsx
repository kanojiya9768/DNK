import { Button } from "./Button";

export const ShopNowButton = ({className}) => {
  return (
    <Button
      btnText={"SHOP NOW"}
      className={
        `py-[13px] w-32 grid place-items-center hover:bg-black hover:text-white transition-all duration-300 border-none ${className}`
      }
    />
  );
};

import { Button } from "./Button";

export const FIndMoreButton = () => {
  return (
    <Button
      btnText={"FIND MORE"}
      className={
        "py-[13px] text-white !bg-transparent w-32 grid place-items-center hover:!bg-white hover:!text-black transition-all duration-300"
      }
    />
  );
};

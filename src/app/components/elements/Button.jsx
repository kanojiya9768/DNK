export const Button = ({ btnText, className }) => {
  return (
    <div
      className={`border-[1px] w-max p-2 bg-white text-black cursor-pointer text-sm font-semibold font-lato ${className}`}
    >
      {btnText}
    </div>
  );
};

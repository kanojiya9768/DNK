export const Input = ({ type = "text", className, ...props }) => {
  return <input type={type} {...props} className={className} />;
};

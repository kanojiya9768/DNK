export const ConvertToCurrecy = (number,currencyCode) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode || "INR",
  }).format(number);
};

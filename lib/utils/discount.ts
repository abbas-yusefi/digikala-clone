export const calculateDiscountedPrice = (
  price: number,
  discount: number | null,
  rounded: boolean = true,
) => {
  if (discount !== null && (discount < 0 || discount > 100)) {
    throw new Error(
      `Discount must be between 0 and 100 or null, Received ${discount}`,
    );
  }

  if (price <= 0) {
    throw new Error(`expected price to be more than 0, Recieved ${price}`);
  }

  if (!discount) {
    if (rounded) {
      return Math.round(price / 10000) * 10000;
    }
    return price;
  }

  const discountedPrice = price - price * (discount / 100);
  if (rounded) {
    return Math.round(discountedPrice / 10000) * 10000;
  }

  return discountedPrice;
};

export const getTotalPrice = (price: number, discount: number): number => {
  const totalPrice = Math.round(price + price * (discount / 100));

  return totalPrice;
};

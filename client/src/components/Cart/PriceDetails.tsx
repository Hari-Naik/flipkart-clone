import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { getTotalPrice } from "../../libs/getTotalPrice";

const PriceDetails = () => {
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  const cart = useAppSelector(state => state.cart.cart);

  useEffect(() => {
    let orderPrice = 0;
    let orderTotal = 0;
    cart.forEach(item => {
      if (item.quantity) {
        orderPrice +=
          item.quantity * getTotalPrice(item.price, item.discountPercentage);
        orderTotal += item.quantity * item.price;
      }
    });

    setPrice(orderPrice);
    setTotal(orderTotal);
  }, [cart]);

  return (
    <div className="w-[98%] md:w-[30%] h-max bg-white shadow-sm py-2 mt-4 md:mt-0">
      <h2 className="text-base text-[#878787] font-semibold mb-2 pl-4">
        PRICE DETAILS
      </h2>
      <hr />
      <div className="flex flex-col space-y-4 w-[92%] mx-auto border-b boder-[#c2c2c2] py-4 text-[15px]">
        <div className="w-full flex items-center justify-between">
          <p>Price ({cart.length} items)</p>
          <p className="tracking-wide">${price}</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p>Discount</p>
          <p className="text-[#00890b] tracking-wide">-${price - total}</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p>Delivey Charges</p>
          <p className="text-[#00890b]">Free</p>
        </div>
      </div>
      <div className="w-[92%] flex justify-between mx-auto border-b boder-[#c2c2c2] py-4">
        <h2 className="text-base font-semibold">Total Amount</h2>
        <p className="text-base font-semibold tracking-wide">${total}</p>
      </div>
      <p className="px-4 py-2 text-[15px] text-[#00890b] font-semibold">
        You will save ${price - total} on this order
      </p>
    </div>
  );
};

export default PriceDetails;

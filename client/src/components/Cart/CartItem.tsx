import React from "react";
import { productType } from "../../Types";
import CartButtons from "./CartButtons";

import { getTotalPrice } from "../../libs/getTotalPrice";

interface CartItemType {
  product: productType;
  handleRemoveFromCart: (itemId: number, title: string) => void;
}

const CartItem: React.FC<CartItemType> = ({
  product,
  handleRemoveFromCart,
}) => {
  return (
    <li className="flex space-x-6 border-b border-[#efefef] pl-10 pb-4 mt-4">
      <div>
        <img
          className=" h-[112px] w-[120px]"
          src={product.thumbnail}
          alt={product.title}
        />
        <CartButtons id={product.id} quantity={product?.quantity} />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-base text-[#212121]">{product.title}</h1>
        <p className="text-sm text-[#878787]">Seller:SuperComNet</p>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-[#878787] line-through">
            $
            {product.quantity &&
              product.quantity *
                getTotalPrice(product.price, product.discountPercentage)}
          </p>
          <p className="text-lg text-[#212121] font-semibold">
            ${product.quantity && product.quantity * product.price}
          </p>
          <p className="text-sm text-[#008400] font-semibold">
            {Math.round(product.discountPercentage)}% Off
          </p>
        </div>

        <div className="flex space-x-6 mt-5">
          <button className="border-none bg-transparent text-base font-semibold text-[#212121] hover:text-[#2847f0] ">
            SAVE FOR LATER
          </button>
          <button
            onClick={() => handleRemoveFromCart(product.id, product.title)}
            className="border-none bg-transparent text-base font-semibold text-[#212121] hover:text-[#2847f0] ">
            REMOVE
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

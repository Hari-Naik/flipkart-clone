import React from "react";
import { productType } from "../../Types";
import { getTotalPrice } from "../../libs/getTotalPrice";
import { Help, LocationOn, StarRate } from "@mui/icons-material";
import Offers from "./Offers";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

interface PropType {
  product: productType;
}

const ProductInfo: React.FC<PropType> = ({ product }) => {
  return (
    <div className="flex flex-col gap-2">
      <Breadcrumbs />
      <h2 className="text-[18px] text-[#212121]">{product?.title}</h2>
      <div className="flex space-x-3 items-center">
        <p className="text-[28px] text-[#212121] font-semibold">
          ${product?.price}
        </p>

        <p className="text-[#c2c2c2] line-through">
          ${getTotalPrice(product?.price, product?.discountPercentage)}
        </p>
        <p className="text-[#26a541] font-semibold">
          {Math.round(product?.discountPercentage)}% off
        </p>
      </div>

      <div className="flex items-center justify-end w-max pl-2 bg-[#26a541] text-white text-sm rounded-full">
        <p className="font-semibold">{product?.rating}</p>
        <StarRate className="!h-3 -ml-1" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-base text-[#212121] font-semibold">
          Available offers
        </h2>
        <Offers title="Flat ₹500 off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹10,000 to ₹14,999" />

        <Offers title="Flat ₹1,500 off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999" />
        <Offers title="Flat ₹2,000 off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999" />
        <Offers title="5% Unlimited Cashback on Flipkart Axis Bank Credit Card" />
        <p className="text-[12px] text-[#2874f0] font-semibold ml-2 cursor-pointer">
          +14 more offers
        </p>
        <div className="flex items-center space-x-10 mt-2">
          <h2 className="text-sm text-[#828282] font-medium">Delivery</h2>
          <div>
            <div className="w-max border-b-2 border-[#2874f0]">
              <LocationOn className="!h-4 text-[#878787]" />
              <input
                className="text-sm font-semibold pl-2 outline-none border-none"
                type="text"
                placeholder="Enter Delivery pincode"
              />
              <button className="text-sm text-[#2874f0] font-semibold cursor-pointer">
                Check
              </button>
            </div>
            <div className="flex items-center gap-2 divide-x-2 mt-2">
              <p className="text-sm font-semibold">
                Delivery by 15 Jan, Monday
              </p>
              <p className="text-sm text-green-800 font-semibold pl-2">
                Free <span className="text-[#878787] line-through">₹40</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-14 mt-2 ">
          <h2 className="text-sm text-[#878787] font-semibold">Seller</h2>
          <div>
            <h2 className="text-sm text-[#2874f0] font-semibold">
              SuperComNet
            </h2>
            <ul className="mt-2">
              <li className="flex items-center text-sm text-[#212121] mb-2">
                10 Days Return Policy
                <Help className="!h-3 text-[#878787] cursor-pointer" />
              </li>
              <li className="flex items-center text-sm text-[#212121]">
                GST Invoice Available
                <Help className="!h-3 text-[#878787] cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>

        {/* supercoin */}
        <div className="mt-2">
          <img
            className="h-20"
            src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"
            alt="super coin"
          />
        </div>

        {/* description */}
        <div className="flex items-start space-x-6 mt-2">
          <h2 className="text-sm text-[#878787] font-semibold">Description</h2>
          <p className="text-sm text-[#212121] font-sans">
            {product?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

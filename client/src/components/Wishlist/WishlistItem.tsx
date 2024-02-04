import { Delete, Star } from "@mui/icons-material";
import React from "react";
import { productType } from "../../Types";
import { getTotalPrice } from "../../libs/getTotalPrice";
import { IconButton } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { removeFromWishlist } from "../../features/wishlistSlice";
import { Link } from "react-router-dom";
import { successToast } from "../../libs/utils";

type Props = {
  item: productType;
};

const WishlistItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const removeProductFromWishlist = () => {
    dispatch(removeFromWishlist(item.id));
    successToast("Removed from your Wishlist");
  };
  return (
    <div className="flex gap-4 w-full h-[134px] border-t border-gray-300 px-6 py-4">
      <div className="w-[85px] h-[100px]">
        <img src={item.thumbnail} alt={item.title} className="w-full h-full" />
      </div>
      <div className="relative h-[100px] flex-1">
        <Link
          to={`/products/${item.id}`}
          className="text-[15px] text-[#212121] hover:text-[#2874f1]">
          {item.title}
        </Link>
        <div className="w-[40px] h-[20px] bg-[#388e3c] flex items-center justify-center gap-[2px] text-white font-semibold rounded-sm">
          <span className="text-xs">{item.rating}</span>
          <Star className="!w-3 !h-3" />
        </div>
        <div className="flex items-center gap-2 mt-7">
          <span className="text-lg md:text-[22px] text-[#212121] font-semibold">
            ${item.price}
          </span>
          <span className=" text-sm text-[#878787]">
            ${getTotalPrice(item?.price, item?.discountPercentage)}
          </span>
          <span className="text-[#388e3c] text-[13px] font-semibold">
            {Math.round(item?.discountPercentage)}% off
          </span>
        </div>
        <IconButton
          onClick={removeProductFromWishlist}
          className="!absolute !right-0 !top-0">
          <Delete className="!w-4 !h-4 text-[#878787]" />
        </IconButton>
      </div>
    </div>
  );
};

export default WishlistItem;

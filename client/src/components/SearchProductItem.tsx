import React, { useEffect, useState } from "react";
import { productType } from "../Types";
import { Favorite, StarRate } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { getTotalPrice } from "../libs/getTotalPrice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToWishlist, removeFromWishlist } from "../features/wishlistSlice";
import { successToast } from "../libs/utils";
import { Link } from "react-router-dom";

type Props = {
  product: productType;
};

const SearchProductItem: React.FC<Props> = ({ product }) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const wishlist = useAppSelector(state => state.wishlist.wishlist);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isExits = wishlist.findIndex(item => item.id === product.id);
    if (isExits !== -1) {
      setIsFavourite(true);
    }
  }, [isFavourite]);

  const handleAddToWishlist = () => {
    if (isFavourite) {
      dispatch(removeFromWishlist(product.id));
      setIsFavourite(false);
      successToast("Removed from your Wishlist");
    } else {
      dispatch(addToWishlist(product));
      setIsFavourite(true);
      successToast("Added to your Wishlist");
    }
  };

  return (
    <li
      key={product.id}
      className="w-full flex gap-2 border-b border-[#f0f0f0] py-4">
      <div className="w-[20%] flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-[90%] max-w-[170px] h-[170px] mr-1"
        />
        <IconButton className="!w-7 !h-7 !-mt-2" onClick={handleAddToWishlist}>
          <Favorite
            className={`!w-4 !h-4 ${
              isFavourite ? "text-[#ff5555]" : "text-[#c2c2c2]"
            }`}
          />
        </IconButton>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <Link
          to={`/products/${product.id}`}
          className=" text-lg text-[#212121] hover:text-[#5e97f4] font-semibold -mt-3 ">
          {product.title} ({product.brand})
        </Link>

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
        <div className="flex items-center justify-center w-max bg-[#388e3c] text-white text-xs rounded px-1 py-[2px]">
          <p className="font-semibold">{product?.rating}</p>
          <StarRate className="!h-3 !w-3" />
        </div>

        <p className="mt-10 w-[40%] text-sm">{product.description}</p>
      </div>
    </li>
  );
};

export default SearchProductItem;

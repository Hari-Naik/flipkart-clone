import React from "react";
import CustomButton from "./CustomButton";
import { Favorite, ShoppingCart } from "@mui/icons-material";

type Props = {
  images: string[];
  title: string;
  activeImg: string;
  isFavourite: boolean;
  setActiveImg: (value: React.SetStateAction<string>) => void;
  addProductToCart: () => void;
  addProductToWishlist: () => void;
};

const ProductImage: React.FC<Props> = ({
  images,
  title,
  activeImg,
  setActiveImg,
  isFavourite,
  addProductToCart,
  addProductToWishlist,
}) => {
  return (
    <div className="w-full h-max md:w-[50%] lg:w-[35%] flex flex-col items-center">
      <div className="h-[370px] w-full lg:h-[470px] flex shadow-sm">
        {/* image gallery */}
        <div className="flex flex-col m-3 gap-2">
          {images?.map((imgUrl: string) => {
            return (
              <img
                key={imgUrl}
                src={imgUrl}
                alt=""
                onClick={() => setActiveImg(imgUrl)}
                className={`w-10 h-10 sm:w-14 md:h-14 border-[2px] ${
                  activeImg === imgUrl ? "border-[#2874f0]" : "border-gray-300"
                } cursor-pointer`}
              />
            );
          })}
        </div>

        <img
          className="w-[80%] h-[95%] object-center mt-3"
          src={activeImg}
          alt={title}
        />
      </div>

      {/* Buttons */}
      <div className="w-full flex items-center mt-2 gap-2">
        <CustomButton
          text="Add to cart"
          icon={ShoppingCart}
          onClick={addProductToCart}
        />
        <CustomButton
          text="Wishlist"
          icon={Favorite}
          color={isFavourite ? `#ff5555` : `#c8c8c8`}
          onClick={addProductToWishlist}
        />
      </div>
    </div>
  );
};

export default ProductImage;

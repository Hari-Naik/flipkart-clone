import React from "react";
import { productType } from "../../Types";
import { getTotalPrice } from "../../libs/getTotalPrice";
import { Link } from "react-router-dom";

interface PropType {
  product: productType;
}

const ProductItem: React.FC<PropType> = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="h-max cursor-pointer border rounded hover:shadow-md p-2">
      <img
        className="h-[270px] object-fill"
        src={product.thumbnail}
        alt={product.title}
      />
      <h1 className="text-sm text-[#878787] font-semibold mt-2">
        {product?.brand.toUpperCase()}
      </h1>
      <p className="text-sm text-[#212121] -mt-1 mb-2">
        {product.description.slice(0, 30)}...
      </p>
      <div className="flex space-x-3 items-center">
        <p className="text-base text-[#212121] font-semibold">
          ${product?.price}
        </p>

        <p className="text-sm text-[#878787] line-through">
          ${getTotalPrice(product?.price, product?.discountPercentage)}
        </p>
        <p className="text-[13px] text-[#26a541] font-semibold">
          {Math.round(product?.discountPercentage)}% off
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;

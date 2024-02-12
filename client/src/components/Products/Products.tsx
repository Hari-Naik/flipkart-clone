import React from "react";
import { productType } from "../../Types";
import ProductItem from "./ProductItem";

type Props = {
  products: productType[];
};

const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

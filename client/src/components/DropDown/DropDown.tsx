import React, { SetStateAction } from "react";
import { productType } from "../../Types";
import { useNavigate } from "react-router-dom";

interface PropType {
  suggestions: productType[];
  setQuery: React.Dispatch<SetStateAction<string>>;
  loading: boolean;
}

const DropDown: React.FC<PropType> = ({ suggestions, setQuery, loading }) => {
  const navigate = useNavigate();

  const onClickProduct = (id: number) => {
    navigate(`/products/${id}`);
    setQuery("");
  };

  return (
    <div className="w-full max-h-[270px] bg-white border-t border-[#c2c2c] shadow-md pt-2 overflow-hidden overflow-y-auto">
      {suggestions &&
        suggestions.map(product => (
          <div
            onClick={() => onClickProduct(product.id)}
            className="w-full flex items-center space-x-3 mb-3 hover:bg-[#dfeafd] cursor-pointer px-4">
            <img
              className="h-10 w-12 object-cover"
              src={product?.thumbnail}
              alt={product.title}
            />
            <p className="text-xs">{product.title}</p>
          </div>
        ))}
    </div>
  );
};

export default DropDown;

import { useAppDispatch } from "../../app/hooks";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../features/cart/cartSlice";

interface PropType {
  id: number;
  quantity: number | any;
}

const CartButtons: React.FC<PropType> = ({ id, quantity }) => {
  const dispatch = useAppDispatch();

  const onIncrement = () => {
    dispatch(incrementQuantity(id));
  };

  const onDecrement = () => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="flex items-center space-x-2 mt-4">
      <button
        onClick={onDecrement}
        className={`h-7 w-7 border border-[#C2C2C2] rounded-full ${
          quantity === 1 ? "text-[#c2c2c2]" : "text-[#212121]"
        }`}>
        -
      </button>
      <div className="h-7 w-[46px] flex justify-center items-center border border-[#C2C2C2] text-base text-[#212121]">
        {quantity}
      </div>
      <button
        onClick={onIncrement}
        className="h-7 w-7 border border-[#C2C2C2] rounded-full">
        +
      </button>
    </div>
  );
};

export default CartButtons;

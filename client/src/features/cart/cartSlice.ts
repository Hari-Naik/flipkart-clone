import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productType } from "../../Types";

interface CartType {
  cart: productType[];
}

const initialState: CartType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<productType>) => {
      const newItem = action.payload;
      const itemExits = state.cart.find(item => item.id === newItem?.id);
      if (!itemExits) {
        state.cart.push(newItem);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload) {
          const quantity = item.quantity && item?.quantity + 1;
          return { ...item, quantity };
        }
        return item;
      });
    },
    decrementQuantity: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload) {
          let quantity = item.quantity;
          if (item.quantity && item?.quantity > 1) {
            quantity = item?.quantity - 1;
          }

          return { ...item, quantity };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

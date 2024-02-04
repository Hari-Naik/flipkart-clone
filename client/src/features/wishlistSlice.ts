import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productType } from "../Types";

interface wishlistType {
  wishlist: productType[];
}

const initialState: wishlistType = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<productType>) => {
      const newItem = action.payload;
      const itemExits = state.wishlist.find(item => item.id === newItem?.id);
      if (!itemExits) {
        state.wishlist.push(newItem);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter(
        product => product.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

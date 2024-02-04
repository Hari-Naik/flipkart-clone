import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { productType } from "../../Types";

import { fetchProducts } from "./productsApi";

interface stateType {
  loading: boolean;
  products: productType[];
}

const initialState: stateType = {
  loading: false,
  products: [],
};

export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await fetchProducts(
      "https://dummyjson.com/products?limit=0"
    );
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export default productsSlice.reducer;

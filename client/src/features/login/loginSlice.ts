import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { showLoginModal: boolean } = {
  showLoginModal: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginModal: (state, action: PayloadAction<boolean>) => {
      state.showLoginModal = action.payload;
    },
  },
});

export const { setLoginModal } = loginSlice.actions;
export default loginSlice.reducer;

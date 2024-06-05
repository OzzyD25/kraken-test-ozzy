import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces";

interface CartState {
  cartOpen: boolean;
  cartProducts: IProduct[];
}

const initialState: CartState = {
  cartOpen: false,
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartOpen = !state.cartOpen;
    },
    addProductToCart(state, action: PayloadAction<IProduct>) {
      state.cartProducts.push(action.payload);
    },
  },
});

export const { toggleCart, addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;

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
    addProduct(state, action: PayloadAction<IProduct>) {
      state.cartProducts.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { toggleCart, addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

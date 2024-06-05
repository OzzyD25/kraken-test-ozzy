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
    addProductToCart(
      state,
      action: PayloadAction<{ product: IProduct; quantity: number }>
    ) {
      const { product, quantity } = action.payload;
      for (let i = 0; i < quantity; i++) {
        state.cartProducts.push(product);
      }
    },
  },
});

export const { toggleCart, addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;

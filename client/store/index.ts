import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

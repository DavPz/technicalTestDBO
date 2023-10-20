import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { cartSlice } from "./slices/cart/cartSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
    }
});
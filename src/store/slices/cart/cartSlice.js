import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        products: [],
    },
    reducers: {

        addToCart: (state, action) => {
            const product = action.payload.product;
            const quantity = action.payload.quantity;
            const productInCart = state.cart.find((item) => item.product.id === product.id);
            if (productInCart) {
                productInCart.quantity += quantity;
            } else {
                state.cart.push({ product, quantity });
            }
        },

        removeFromCart: (state, action) => {
            const product = action.payload.product;
            const productInCart = state.cart.find((item) => item.product.id === product.id);
            if (productInCart) {
                state.cart = state.cart.filter((item) => item.product.id !== product.id);
            }
        },

        clearCart: (state) => {
            state.cart = [];
        },

        setProducts: (state, action) => {
            state.products = action.payload.products;
        },        

    },

});

export const { addToCart, removeFromCart, clearCart, setProducts } = cartSlice.actions;
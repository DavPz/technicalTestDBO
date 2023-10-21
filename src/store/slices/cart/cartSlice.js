import { createSlice } from "@reduxjs/toolkit";

// objeto inicial del carrito de compras, si no existe el objeto en el sessionStorage, se crea un objeto vacío
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
// cantidad de items en el carrito, si no existe el objeto en el sessionStorage, se crea con valor 0
const initialItemsInCart = sessionStorage.getItem('itemsInCart') || 0;
// costo total de los items en el carrito, si no existe el objeto en el sessionStorage, se crea con valor 0
const initialTotalCost = sessionStorage.getItem('totalCost') || 0;

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: initialCartItems,
        products: [],
        itemsInCart: initialItemsInCart,
        totalCost: initialTotalCost,
    },
    reducers: {

        //funcion para agregar un producto al carrito si no existe, o sumarle la cantidad si ya existe
        addToCart: (state, action) => {
            const product = action.payload.product;
            const quantity = action.payload.quantity;
            const productInCart = state.cart.find((item) => item.product.id === product.id);
            if (productInCart) {
                state.cart = state.cart.map((item) => {
                    if (item.product.id === product.id) {
                        return { ...item, quantity: item.quantity + quantity };
                    }
                    return item;
                }
                );
            } else {
                state.cart = [
                    ...state.cart,
                    { product, quantity },
                ]
            }
        },

        //funcion para remover un producto del carrito
        removeFromCart: (state, action) => {
            const product = action.payload.product;
            const productInCart = state.cart.find((item) => item.product.id === product.id);
            if (productInCart) {
                state.cart = state.cart.filter((item) => item.product.id !== product.id);
            }
        },
        
        //funcion para limpiar el carrito
        clearCart: (state) => {
            state.cart = [];
            state.itemsInCart = 0;
            state.totalCost = 0;
        },

        //funcion para setear los productos
        setProducts: (state, action) => {
            state.products = action.payload.products;
        },

        //funcion para setear la cantidad de items en el carrito
        setItemsInCart: (state, action) => {
            state.itemsInCart = action.payload.items;
        },

        //funcion para setear el costo total de los items en el carrito
        setTotalCost: (state, action) => {
            state.totalCost = action.payload.cost;
        },

    },

});

export const { addToCart, removeFromCart, clearCart, setProducts, setItemsInCart, setTotalCost } = cartSlice.actions;
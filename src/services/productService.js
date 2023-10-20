import { productsJson } from "../util/productsJson";

export const getProducts = () => {

    // Obtener los Productos del archivo productsJson.js
    const products = productsJson;

    return products;

}

export const getTotalCost = (cart) => {
    return cart.reduce(
        (accumulator, item) => accumulator + item.product.cost * item.quantity
        , 0);
}

export const getTotalItems = (cart) => {
    return cart.reduce(
        (accumulator, item) => accumulator + item.quantity
        , 0);
}

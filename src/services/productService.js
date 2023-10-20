import { productsJson } from "../util/productsJson";

export const getProducts = () => {

    // Obtener los Productos del archivo productsJson.js
    const products = productsJson;

    return products;

}

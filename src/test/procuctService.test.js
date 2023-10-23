import { getProducts, getTotalCost, getTotalItems } from '../services/productService';
import { productsJson } from '../data/productsJson';

describe('getProducts', () => {
    it('Deberia devolver un array de productos', () => {
        const products = getProducts();
        expect(Array.isArray(products)).toBe(true);
    });

    it('Deberia devolver los mismos productos que en productsJson', () => {
        const products = getProducts();
        expect(products).toEqual(productsJson);
    });
});

describe('getTotalCost', () => {
    it('Deberia devolver 0 para un carrito vacío', () => {
        const cart = [];
        const totalCost = getTotalCost(cart);
        expect(totalCost).toBe(0);
    });

    it('Deberia devolver el costo total correcto para un carrito no vacío', () => {
        const cart = [
            { product: { cost: 10 }, quantity: 2 },
            { product: { cost: 5 }, quantity: 3 },
        ];
        const totalCost = getTotalCost(cart);
        expect(totalCost).toBe(35);
    });
});

describe('getTotalItems', () => {
    it('Deberia devolver 0 para un carrito vacío', () => {
        const cart = [];
        const totalItems = getTotalItems(cart);
        expect(totalItems).toBe(0);
    });

    it('Deberia devolver el número total correcto de artículos para un carrito no vacío', () => {
        const cart = [
            { product: { cost: 10 }, quantity: 2 },
            { product: { cost: 5 }, quantity: 3 },
        ];
        const totalItems = getTotalItems(cart);
        expect(totalItems).toBe(5);
    });
});

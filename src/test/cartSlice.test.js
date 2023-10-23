import { cartSlice } from '../store/slices/cart/cartSlice';

describe('cartSlice', () => {
    let state;

    beforeEach(() => {
        state = cartSlice.reducer(undefined, {});
    });

    it('debe tener un estado inicial', () => {
        expect(state.cart).toEqual([]);
        expect(state.products).toEqual([]);
        expect(state.itemsInCart).toEqual(0);
        expect(state.totalCost).toEqual(0);
    });

    it('debe agregar un producto al carrito', () => {
        const product = { id: 1, name: 'Producto 1', price: 10 };
        const quantity = 2;
        const action = cartSlice.actions.addToCart({ product, quantity });
        state = cartSlice.reducer(state, action);
        expect(state.cart).toEqual([{ product, quantity }]);
    });

    it('debe agregar una cantidad a un producto existente en el carrito', () => {
        const product = { id: 1, name: 'Producto 1', price: 10 };
        const quantity = 2;
        const action1 = cartSlice.actions.addToCart({ product, quantity });
        state = cartSlice.reducer(state, action1);
        const action2 = cartSlice.actions.addToCart({ product, quantity: 3 });
        state = cartSlice.reducer(state, action2);
        expect(state.cart).toEqual([{ product, quantity: 5 }]);
    });

    it('debe eliminar un producto del carrito', () => {
        const product1 = { id: 1, name: 'Producto 1', price: 10 };
        const product2 = { id: 2, name: 'Producto 2', price: 20 };
        const quantity1 = 2;
        const quantity2 = 3;
        const action1 = cartSlice.actions.addToCart({ product: product1, quantity: quantity1 });
        state = cartSlice.reducer(state, action1);
        const action2 = cartSlice.actions.addToCart({ product: product2, quantity: quantity2 });
        state = cartSlice.reducer(state, action2);
        const action3 = cartSlice.actions.removeFromCart({ product: product1 });
        state = cartSlice.reducer(state, action3);
        expect(state.cart).toEqual([{ product: product2, quantity: quantity2 }]);
    });

    it('debe limpiar el carrito', () => {
        const product1 = { id: 1, name: 'Producto 1', price: 10 };
        const product2 = { id: 2, name: 'Producto 2', price: 20 };
        const quantity1 = 2;
        const quantity2 = 3;
        const action1 = cartSlice.actions.addToCart({ product: product1, quantity: quantity1 });
        state = cartSlice.reducer(state, action1);
        const action2 = cartSlice.actions.addToCart({ product: product2, quantity: quantity2 });
        state = cartSlice.reducer(state, action2);
        const action3 = cartSlice.actions.clearCart();
        state = cartSlice.reducer(state, action3);
        expect(state.cart).toEqual([]);
        expect(state.itemsInCart).toEqual(0);
        expect(state.totalCost).toEqual(0);
    });

    it('debe establecer los productos', () => {
        const products = [{ id: 1, name: 'Producto 1', price: 10 }, { id: 2, name: 'Producto 2', price: 20 }];
        const action = cartSlice.actions.setProducts({ products });
        state = cartSlice.reducer(state, action);
        expect(state.products).toEqual(products);
    });

    it('debe establecer los elementos en el carrito', () => {
        const items = 5;
        const action = cartSlice.actions.setItemsInCart({ items });
        state = cartSlice.reducer(state, action);
        expect(state.itemsInCart).toEqual(items);
    });

    it('debe establecer el costo total', () => {
        const cost = 50;
        const action = cartSlice.actions.setTotalCost({ cost });
        state = cartSlice.reducer(state, action);
        expect(state.totalCost).toEqual(cost);
    });
});

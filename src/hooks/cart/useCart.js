import { useDispatch, useSelector } from "react-redux";
import { getProducts, getTotalCost, getTotalItems } from "../../services/productService"
import { addToCart, clearCart, setItemsInCart, setProducts, setTotalCost } from "../../store/slices/cart/cartSlice";
import { useEffect } from "react";

export const useCart = () => {

    const dispatch = useDispatch();
    const { cart, products, itemsInCart, totalCost } = useSelector(state => state.cart);

    //guardar el carrito en el sessionStorage cada vez que cambie 
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //funcion que retorna la lista de productos
    const productsList = () => {
        //obtener los productos del Servicio
        const products = getProducts();

        //despachar los productos al store
        dispatch(setProducts({ products }));

        //retornar los productos
        return products;
    }

    //funcion handler para agregar un producto al carrito
    const handlerAddToCart = (product, quantity) => {
        dispatch(addToCart({ product, quantity }));
    }

    //funcion para setear total items en el carrito
    const handlerSetTotalItems = (cart) => {
        const totalItems = getTotalItems(cart);
        sessionStorage.setItem('itemsInCart', totalItems);
        dispatch(setItemsInCart({ items: totalItems }));
    }

    //funcion para calcular el total del costo de los productos en el carrito
    const handlerSetTotalCost = (cart) => {
        const totalCost = getTotalCost(cart);
        sessionStorage.setItem('totalCost', totalCost);
        dispatch(setTotalCost({ cost: totalCost }));
    }

    // borrar contenido del carrito
    const handlerClearCart = () => {
        dispatch(clearCart());
    }


    return (
        {
            cart,
            products,
            itemsInCart,
            totalCost,
            productsList,
            handlerAddToCart,
            handlerSetTotalItems,
            handlerSetTotalCost,
            handlerClearCart,
        }
    )
}

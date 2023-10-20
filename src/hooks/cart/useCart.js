import { useDispatch, useSelector } from "react-redux";
import { getProducts, getTotalCost, getTotalItems } from "../../services/productService"
import { addToCart, setItemsInCart, setProducts, setTotalCost } from "../../store/slices/cart/cartSlice";

export const useCart = () => {

    const dispatch = useDispatch();
    const { cart, products, itemsInCart, totalCost } = useSelector(state => state.cart);

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
        dispatch(setItemsInCart({ items: totalItems }));
    }

    //funcion para calcular el total del costo de los productos en el carrito
    const handlerSetTotalCost = (cart) => {
        const totalCost = getTotalCost(cart);
        dispatch(setTotalCost({ cost: totalCost }));
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
        }
    )
}

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../services/productService"
import { setProducts } from "../../store/slices/cart/cartSlice";

export const useCart = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.cart);

    //funcion que retorna la lista de productos
    const productsList = () => {
        //obtener los productos del Servicio
        const products = getProducts();

        //despachar los productos al store
        dispatch(setProducts({ products }));

        //retornar los productos
        return products;
    }


    return (
        {
            products,
            productsList,
        }
    )
}

import { useDispatch, useSelector } from "react-redux";
import { getProducts, getTotalCost, getTotalItems } from "../../services/productService"
import { addToCart, clearCart, removeFromCart, setItemsInCart, setProducts, setTotalCost } from "../../store/slices/cart/cartSlice";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const useCart = () => {

    const dispatch = useDispatch();
    const { cart, products, itemsInCart, totalCost } = useSelector(state => state.cart);

    //guardar el carrito en el sessionStorage cada vez que cambie 
    useEffect(() => {
        handlerSetTotalItems(cart);
        handlerSetTotalCost(cart);
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
    const handlerAddToCart = (product, quantity, fromCartRows) => {
        dispatch(addToCart({ product, quantity }));
        if (!fromCartRows) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado correctamente al Carrito',
                showConfirmButton: false,
                timer: 1000
              })
        }                
    }

    //funcion para eliminar un producto del carrito
    const handlerRemoveFromCart = (product) => {        
        Swal.fire({
            title: 'Esta Seguro?',
            text: "Una vez Eliminado, tendra que agregarlo nuevamente si desea comprarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si Borrarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Borrado!',
                'Tu Producto ha sido eliminado.',
                'success'
              )
              dispatch(removeFromCart({ product }));
            }
          })
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
        Swal.fire({
            title: 'Esta Seguro de Vaciar el carrito?',
            text: "Una vez Vacio, tendra que agregarlo nuevamente! ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si Vaciarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Carro Vacio!',
                'Tu Carrito esta vacio .',
                'success'
              )
              dispatch(clearCart());
            }
          })    
    }
    
    const handlerClearCartOnLogOut = () => {
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
            handlerRemoveFromCart,
            handlerSetTotalItems,
            handlerSetTotalCost,
            handlerClearCart,
            handlerClearCartOnLogOut,
        }
    )
}

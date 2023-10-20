import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import { useCart } from "../../hooks/cart/useCart";
import { NavLink } from "react-router-dom";

export const FloatCartComponent = () => {
    const { itemsInCart } = useCart();
    return (
        <>
            <div className="flex items-center  right-0 mr-10 mt-2 fixed w-12 h-12 bg-light-blue-800 rounded-lg p-1">
                <NavLink to="/cart" className="flex items-center justify-center w-full h-full">
                    <ShoppingCartIcon color="white" className="h-8 w-8" />
                    <Typography color="white"> {itemsInCart} </Typography>
                </NavLink>
            </div>
        </>
    )
}

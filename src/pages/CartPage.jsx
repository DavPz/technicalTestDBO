import { Alert, Typography } from "@material-tailwind/react";
import { CartViewComponent } from "../components/cart/CartViewComponent"
import { useCart } from "../hooks/cart/useCart";

export const CartPage = () => {

  const { cart } = useCart();
  return (
    <>
    <div className="h-full">
      {cart.length === 0
        ?
        <Alert color="amber" className="w-[50%] m-auto mt-5">No hay productos en el carrito</Alert>
        :
        <>
          <Typography variant="h2" color="white" className="w-[50%] m-auto mt-6 bg-blue-gray-500 text-center rounded-lg">
            Carro de Compras
          </Typography>
          <CartViewComponent />
        </>
      }
      </div>
    </>
  )
}

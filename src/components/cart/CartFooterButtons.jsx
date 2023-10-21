import { Button } from "@material-tailwind/react"
import { NavLink } from "react-router-dom"

export const CartFooterButtons = () => {
    return (
        <div className="flex flex-col items-center justify-center w-[100%]">
            <NavLink to="/products" className="m-2">
                <Button
                    color="blue"
                    size="lg"
                    ripple="light"
                    className="mt-4 w-[100%] m-auto"
                >
                    Seguir Comprando
                </Button>
            </NavLink>
            <NavLink to="" className="m-2">
                <Button
                    color="green"
                    size="lg"
                    ripple="light"
                    className="mt-4 w-[100%] m-auto"
                >
                    Pagar
                </Button>
            </NavLink>

        </div>
    )
}

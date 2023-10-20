import {
    Button,
    Navbar,
    Typography
} from "@material-tailwind/react";
import { useAuth } from "../../hooks/auth/useAuth";
import { NavLink } from "react-router-dom";

export const NavBar = () => {

    const { login, handlerLogout } = useAuth();

    console.log(login);

    return (
        <Navbar
            variant="gradient"
            color="blue-gray"
            className="mx-auto w-full max-w-none from-blue-gray-900 to-blue-gray-800 smd:px-4 smd:py-3 rounded-none"
        >
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 ml-2 cursor-pointer py-1.5"
                >
                    {login.user?.name || "Bienvenido"}
                </Typography>

                <div className="ml-auto flex gap-1 md:mr-4">

                    <NavLink to={"/products"} className="text-white">
                        <Button
                            fullWidth
                            variant="text"
                            size="sm"
                            color="white"
                            className="">
                            <span>Productos</span>
                        </Button>
                    </NavLink>
                    <NavLink to={"/cart"} className="text-white">
                        <Button
                            fullWidth
                            variant="text"
                            size="sm"
                            color="white"
                            className="">
                            <span>Carrito de Compras</span>
                        </Button>
                    </NavLink>

                    <div className="flex items-center gap-x-1">

                        <Button
                            onClick={handlerLogout}
                            fullWidth
                            variant="text"
                            size="sm"
                            color="white"
                            className="">
                            <span>Log Out</span>
                        </Button>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}
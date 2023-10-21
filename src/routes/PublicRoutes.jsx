import { Navigate, Route, Routes } from "react-router-dom"
import { LogingPage } from "../pages/LogingPage"
import { useAuth } from "../hooks/auth/useAuth"
import { AppRoutes } from "./AppRoutes";

export const PublicRoutes = () => {

    const { login } = useAuth();

    return (
        <>
            <Routes>

                {
                    // Si esta autenticado, muestra las rutas privadas, sino, muestra la ruta publica
                    login.isAuth
                        ?
                        (
                            <Route path="/*" element={<AppRoutes />} />
                        )
                        : <>
                            <Route path="/" element={<LogingPage />} />
                            <Route path="/*" element={<Navigate to={"/"} />} />
                        </>
                }

            </Routes>

        </>
    )

}

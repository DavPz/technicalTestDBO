import { Route, Routes } from "react-router-dom"
import { NavBar } from "../components/ui/NavBarComponent"
import { ProductsPage } from "../pages/ProductsPage"
import { CartPage } from "../pages/CartPage"

export const AppRoutes = () => {
    return (
        <>
            <div className="container bg-gray-950 w-full max-w-none bg-blue-200 h-[100%] max-h-none smd:h-[100vh]">
                <NavBar />
                <Routes>
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>
        </>
    )
}

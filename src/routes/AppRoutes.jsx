import { Route, Routes } from "react-router-dom"
import { NavBar } from "../components/ui/NavBarComponent"
import { ProductsPage } from "../pages/ProductsPage"
import { CartPage } from "../pages/CartPage"

export const AppRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </>
    )
}

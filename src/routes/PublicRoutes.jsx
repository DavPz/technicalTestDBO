import { Navigate, Route, Routes } from "react-router-dom"
import { LogingPage } from "../pages/LogingPage"

export const PublicRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/login" element={<LogingPage />} />
                <Route path="/*" element={<Navigate to={"/login"} />} />
            </Routes>

        </>
    )

}

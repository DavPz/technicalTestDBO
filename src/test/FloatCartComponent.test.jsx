import { render, screen } from "@testing-library/react";
import { FloatCartComponent } from "../components/cart/FloatCartComponent";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("FloatCartComponent", () => {

    it("Icono de Carrito flotante se cree correctamente", () => {
        render(
            
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']} initialIndex={0}>  {/* Utiliza MemoryRouter en lugar de BrowserRouter */}
                    <Routes>
                        <Route path="/" element={<FloatCartComponent />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
        const itemsInCarts = screen.getByText("0");
        expect(itemsInCarts).not.toBeNull();
    });
});

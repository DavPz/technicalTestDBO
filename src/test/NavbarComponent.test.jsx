import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { NavBar } from '../components/ui/NavBarComponent';
import { store } from "../store/store";

describe('NavBar', () => {
    it('renderiza el nombre de usuario', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.queryByText('John Doe')).toBeDefined();
    });

    it('renderiza el boton "Productos"', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Productos')).toBeDefined();
    });

    it('renderiza el boton "Carrito de Compras"', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Carrito de Compras')).toBeDefined();
    });

    it('renderiza el boton "Cerrar Sesion"', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Log Out')).toBeDefined();
    });

    it('El clic en el boton "Cerrar Sesion" debe funcionar', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </Provider>
        );

        const clickedButon = fireEvent.click(screen.getByText('Log Out'));

        expect(clickedButon).toBe(true);
    });

});

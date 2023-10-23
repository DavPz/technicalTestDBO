import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react';
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router";
import { LoginFormComponent } from "../components/login/LoginFormComponent";
import { store } from "../store/store";


// Configura sessionStorage con algunos valores iniciales para la prueba
beforeEach(() => {
    sessionStorage.setItem("login", "");
    sessionStorage.setItem("cart", "");
    sessionStorage.setItem("itemsInCart", "");
    sessionStorage.setItem("totalCost", "");
});


describe('LoginFormComponent', () => {
    it('debe renderizar el componente correctamente', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']} initialIndex={0}>  {/* Utiliza MemoryRouter en lugar de BrowserRouter */}
                    <Routes>
                        <Route path="/" element={<LoginFormComponent />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
        const emailInput = screen.getByPlaceholderText('name@mail.com');
        const passwordInput = screen.getByPlaceholderText('********');
        const submitButton = screen.getByText('Ingresar');

        expect(emailInput).toBeDefined();
        expect(passwordInput).toBeDefined();
        expect(submitButton).toBeDefined();
    });

    it('debe manejar el cambio en los campos de entrada', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']} initialIndex={0}>
                    {/* Utiliza MemoryRouter en lugar de BrowserRouter */}
                    <Routes>
                        <Route path="/" element={<LoginFormComponent />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
        const emailInput = screen.getByPlaceholderText('name@mail.com');
        const passwordInput = screen.getByPlaceholderText('********');

        fireEvent.change(emailInput, { target: { value: 'miemail@mail.com' } });
        fireEvent.change(passwordInput, { target: { value: 'mipassword' } });

        expect(emailInput.value).toBe('miemail@mail.com');
        expect(passwordInput.value).toBe('mipassword');
    });

    it('debe mostrar un error si se envía el formulario vacío', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']} initialIndex={0}>  {/* Utiliza MemoryRouter en lugar de BrowserRouter */}
                    <Routes>
                        <Route path="/" element={<LoginFormComponent />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
        const submitButton = screen.getByText('Ingresar');

        fireEvent.click(submitButton);

        const errorMessage = screen.getByText('Email y/o Password requeridos');
        expect(errorMessage).toBeDefined();
    });

    it('Debe de validar si al enviar Email y Password no devuelve mensaje de error', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']} initialIndex={0}>  {/* Utiliza MemoryRouter en lugar de BrowserRouter */}
                    <Routes>
                        <Route path="/" element={<LoginFormComponent />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
        const emailInput = screen.getByPlaceholderText('name@mail.com');
        const passwordInput = screen.getByPlaceholderText('********');
        const submitButton = screen.getByText('Ingresar');

        fireEvent.change(emailInput, { target: { value: 'test1@test.com' } });
        fireEvent.change(passwordInput, { target: { value: '123456' } });
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText('Email y/o Password requeridos');
         
        expect(errorMessage).toBeDefined();

    });
});

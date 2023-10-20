import { createSlice } from "@reduxjs/toolkit";

// objeto inicial para el slice auth, si existe en el sessionStorage, se carga, si no, se crea con los valores por defecto
const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialLogin,
    reducers: {

        onLogin: (state, action) => {
            state.isAuth = true;
            state.user = action.payload.user;
        },

    },

});

export const { onLogin } = authSlice.actions;
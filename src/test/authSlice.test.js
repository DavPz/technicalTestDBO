import { onLogin, onLogout, authSlice } from '.././store/slices/auth/authSlice'; 

describe('authSlice', () => {
    it('onLogin  correctamente', () => {
        const initialState = { isAuth: false, user: undefined };
        const action = { type: onLogin.type, payload: { user: 'testUser' } };
        const nextState = authSlice.reducer(initialState, action);
        expect(nextState).toEqual({ isAuth: true, user: 'testUser' });
    });

    it('manejar onLogout', () => {
        const initialState = { isAuth: true, user: 'testUser' };
        const action = { type: onLogout.type };
        const nextState = authSlice.reducer(initialState, action);
        expect(nextState).toEqual({ isAuth: false, user: undefined });
    });

    it('inicializar con valores predeterminados si los valores de sessionStorage no existen', () => {
        sessionStorage.removeItem('login');
        const nextState = authSlice.reducer(undefined, {});
        expect(nextState).toEqual({ isAuth: false, user: undefined });
    });
});

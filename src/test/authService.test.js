import { loginUser } from '../services/authService';
import { usersJson } from '../data/usersJson';

describe('loginUser', () => {
    it('Debe retornar el objeto usuario si los datos son correctos del arreglo posicion 1', () => {
        const user = usersJson[0];
        const result = loginUser(user.email, user.password);
        expect(result).toEqual(user);
    });

    it('Debe retornar el objeto usuario si los datos ingresados son correctos', () => {
        const user = usersJson[0];
        const email = 'test1@test.com';
        const password = '123456';
        const result = loginUser(email, password);
        expect(result).toEqual(user);
    });

    it('Debe de retornar null si los datos ingresados son incorrectos ', () => {
        const result = loginUser('nonexistent@example.com', 'wrongpassword');
        expect(result).toBeNull();
    });
});

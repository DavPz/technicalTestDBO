import { usersJson } from '../util/usersJson';

export const loginUser = (email, password) => {
    
    // Obtener los usuarios del archivo usersJson
    const users = usersJson;

    // Encontrar el usuario con el email y password recibidos
    const user = users.find(user => user.email === email && user.password === password);

    // Si el usuario es encontrado, retornar el usuario
    if (user) {
        return user;
    }

    // Si el usuario no es encontrado, retornar null
    return null;
}

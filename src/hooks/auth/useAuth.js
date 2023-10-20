import Swal from "sweetalert2";
import { loginUser } from "../../services/authService";

export const useAuth = () => {

    const handlerLogin = ({email, password}) => {
        console.log("Login", email, password);
        
        const user = loginUser(email, password);

        //Si el usuario no es encontrado, mostrar un mensaje de error
        if (!user) {
            Swal.fire('Error de Login', 'Usuario y/o Password incorrectos', 'error');
            return;
        }

        


    }

    return {
        handlerLogin
    };
}

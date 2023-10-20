import Swal from "sweetalert2";
import { loginUser } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../../store/slices/auth/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

export const useAuth = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, isAuth} =useSelector(state => state.auth);

    // Función para manejar el login
    const handlerLogin = ({email, password}) => {
        
        // Realizar el login del usuario através del servicio loginUser
        const user = loginUser(email, password);

        //Si el usuario no es encontrado, mostrar un mensaje de error
        if (!user) {
            Swal.fire('Error de Login', 'Usuario y/o Password incorrectos', 'error');
            return;
        }

        // Si el usuario es encontrado, despachar la acción onLogin con el usuario encontrado al store
        dispatch(onLogin(user));

        // Si el usuario es encontrado, guardar el usuario en el sessionStorage y el estado de autenticación
        sessionStorage.setItem('login', JSON.stringify({
            isAuth: true,
            user,
        }));

        // Si el usuario es encontrado, navegar a la ruta /welcome
        navigate('/welcome');

    }

    return {
        login: {
            user,
            isAuth,
        },
        handlerLogin
    };
}

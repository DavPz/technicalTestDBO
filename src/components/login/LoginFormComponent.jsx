import { Button, Input, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { useAuth } from '../../hooks/auth/useAuth';

export const LoginFormComponent = () => {

    const { handlerLogin } = useAuth();

    const initialLoginForm = {
        email: '',
        password: '',
    }

    const [loginForm, setLoginForm] = useState(initialLoginForm);

    const { email, password } = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setLoginForm({
            ...loginForm,
            [name]: value,
        });

    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            Swal.fire('Error de validacion', 'Email y/o Password requeridos', 'error');
            return;
        }

        handlerLogin({ email, password });

        setLoginForm(initialLoginForm);
    }

    return (
        <>
            <form onSubmit={onSubmit} className="mt-8 mb-2 w-80 sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Email
                    </Typography>
                    <Input
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        type="email"
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <Input
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <Button 
                className="mt-6" 
                fullWidth
                    type="submit"
                    color="blue"
                >
                    Ingresar
                </Button>
            </form>
        </>
    )
}

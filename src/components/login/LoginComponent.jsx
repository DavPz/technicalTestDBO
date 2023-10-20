import {
  Card,
  Typography,
} from "@material-tailwind/react";
import { LoginFormComponent } from "./LoginFormComponent";

export const LoginComponent = () => {
  return (
    <Card color="transparent" shadow={false} className="w-[60%] text-justify sm:w-full  mx-auto items-center">
      <Typography variant="h4" color="blue-gray" className=" text-center w-4/5">
        Login
      </Typography>
      {/* dont let the text go out from typography element */}
      <Typography color="gray" className="mt-1 font-normal ">
        Bienvenido a la Prueba tecnica de Frontend de la empresa FBO
      </Typography>
      <LoginFormComponent />

    </Card>
  );
}
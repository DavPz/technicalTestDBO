import {
  Card,
  Typography,
} from "@material-tailwind/react";
import { LoginFormComponent } from "./LoginFormComponent";

export const LoginComponent = () => {
  return (
    <Card color="" shadow={false} className="w-[95%] text-justify smd:w-full  mx-auto items-center p-5">
      <Typography variant="h4" color="blue-gray" className=" text-center w-4/5">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal ">
        Bienvenido a la Prueba tecnica de Frontend de la empresa FBO
      </Typography>
      <LoginFormComponent />

    </Card>
  );
}
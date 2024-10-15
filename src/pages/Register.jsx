import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col gap-8 w-full max-w-md p-8 bg-white shadow-lg rounded-xl">

        <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Crear cuenta
        </h2>
        <p className="text-center text-gray-500">
          Cree su cuenta para continuar
        </p>
        </div>
        
        <div className="space-y-2">
          <p className="text-gray-700 text-lg">Email</p>
          <Input
            placeholder="Ingrese su correo electrónico"
            type="email"
          />
        </div>


        <div className="space-y-2">
          <p className="text-gray-700 text-lg">Contraseña</p>
          <Input
            placeholder="Ingrese su contraseña"
            type="password"
          />
        </div>

        <div className="space-y-2">
          <p className="text-gray-700 text-lg">Reingrese contraseña</p>
          <Input
            placeholder="Ingrese su contraseña nuevamente"
            type="password"
          />
        </div>

        <div className="flex flex-col gap-4">
        <Button className="w-full">
          Registrarse
        </Button>

        <div className="text-center">
          <Link to="/login" className="text-primary hover:underline">
            Ya tengo una cuenta
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../api/user";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async () => {
      const response = await register(name, email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-md flex-col gap-8 rounded-xl bg-white p-8 shadow-lg">
        <div className="flex flex-col gap-3">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Crear cuenta
          </h2>
          <p className="text-center text-gray-500">
            Cree su cuenta para continuar
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-lg text-gray-700">Nombre</p>
          <Input
            variable={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese su nombre"
            type="text"
          />
        </div>

        <div className="space-y-2">
          <p className="text-lg text-gray-700">Email</p>
          <Input
            variable={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su correo electrónico"
            type="email"
          />
        </div>

        <div className="space-y-2">
          <p className="text-lg text-gray-700">Contraseña</p>
          <Input
            variable={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            type="password"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button onClick={handleRegister} className="w-full">
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

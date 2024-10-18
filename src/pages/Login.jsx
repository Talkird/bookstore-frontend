import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("Logging in with:", { email, password });
      const response = await login(email, password);
      console.log("User logged in successfully:", response);
    } catch (error) {
      console.error("Error logging user in:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-md flex-col gap-8 rounded-xl bg-white p-8 shadow-lg">
        <div className="flex flex-col gap-3">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Bienvenido
          </h2>
          <p className="text-center text-gray-500">
            Por favor inicie sesión para continuar
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-lg text-gray-700">Email</p>
          <Input
            variable={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Ingrese su correo electrónico"
            type="email"
          />
        </div>

        <div className="space-y-2">
          <p className="text-lg text-gray-700">Contraseña</p>
          <Input
            variable={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Ingrese su contraseña"
            type="password"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button onClick={handleLogin} className="w-full">
            Iniciar Sesión
          </Button>

          <div className="text-center">
            <Link to="/register" className="text-primary hover:underline">
              Olvidé mi contraseña
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

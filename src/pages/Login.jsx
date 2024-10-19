import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/user";
import { setToken, getToken } from "../utils/token";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateInput = () => {
    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("El formato del correo electrónico no es válido.");
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!validateInput()) {
      return;
    }

    const response = await login(email, password);
    console.log(getToken());
    // Handle response
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

        <form onSubmit={handleLogin}>
          <div className="space-y-2">
            <p className="text-lg text-gray-700">Email</p>
            <Input
              variable={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo electrónico"
              type="email"
              required
            />
          </div>

          <div className="space-y-2">
            <p className="text-lg text-gray-700">Contraseña</p>
            <Input
              variable={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              type="password"
              required
            />
          </div>

          <div className="flex flex-col gap-4">
            <Button type="submit" className="w-full">
              Iniciar Sesión
            </Button>

            <div className="text-center">
              <Link to="/register" className="text-primary hover:underline">
                ¿No tenés cuenta? Registrate
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

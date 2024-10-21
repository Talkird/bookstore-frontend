import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../api/user";
import toast from "react-hot-toast";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const validateInput = () => {
    if (!name || !email || !password) {
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

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!validateInput()) {
      return;
    }

    const response = await register(name, email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-8 rounded-xl bg-white p-8 shadow-2xl">
        <div className="flex flex-col gap-3">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Crear cuenta
          </h2>
          <p className="text-center text-gray-500">
            Cree su cuenta para continuar
          </p>
        </div>

        {error && <div className="text-center text-red-500">{error}</div>}

        <form onSubmit={handleRegister}>
          <div className="space-y-2">
            <p className="text-lg text-gray-700">Nombre</p>
            <Input
              variable={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingrese su nombre"
              type="text"
              required
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          <div className="space-y-2">
            <p className="text-lg text-gray-700">Email</p>
            <Input
              variable={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo electrónico"
              type="email"
              required
              className="w-full rounded-md border border-gray-300 p-2"
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
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              Registrarse
            </Button>
            <div className="text-center">
              <Link to="/login" className="text-blue-500 hover:underline">
                Ya tengo una cuenta
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

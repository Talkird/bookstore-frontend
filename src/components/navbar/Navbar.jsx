import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import NavbarLink from "./NavbarLink";
import NavbarSearch from "./NavbarSearch";
import { ShoppingCart,Settings } from "lucide-react";
import plumaLogo from "../../assets/images/pluma-dibujando-una-linea.png"; 


function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  }

  const handleRegisterClick = () => {
    navigate("/register");
  }

  return (
    <nav className="flex flex-col shadow-md bg-background">
      <div className="flex items-center justify-between p-8 bg-blue">
        <div className="flex items-center gap-3">
          <img src={plumaLogo} alt="Logo La Pluma Encantada" className="h-12" /> 
          <h1 className="text-5xl font-poppins text">La pluma encantada</h1>
        </div>
        <div className="flex gap-6 text-xl">
          <NavbarLink to="/cart"><ShoppingCart size={40} strokeWidth={1.25} /></NavbarLink>
          <NavbarLink to="/account"><Settings size={40} strokeWidth={1.25} /></NavbarLink>
          <NavbarLink to="/login" className="bg-white text-primary">
            <Button variant="outline" className="bg-white text-primary">Iniciar Sesión</Button>
          </NavbarLink>
          <NavbarLink to="/register">
            <Button onClick={handleRegisterClick}>Registrarse</Button>
          </NavbarLink>
        </div>
      </div>

      <div className="flex items-center justify-between gap-8 bg-secondary p-1">
        <div className="ml-6 flex gap-8 text-lg">
          <NavbarLink to="/">Home</NavbarLink>

          <NavbarLink to="/catalog">Catálogo</NavbarLink>

          <NavbarLink to="/como-comprar">Cómo comprar</NavbarLink>

          <NavbarLink to="/contact">Contacto</NavbarLink>
          <NavbarLink to="/faq">Preguntas Frecuentes</NavbarLink>
          <NavbarLink to="/quienes-somos">Quienes somos</NavbarLink>
        </div>
        <div className="flex items-center gap-3">
          <NavbarSearch className="w-full max-w-xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useNavigate, useState } from "react-router-dom";
import Button from "../ui/Button";
import NavbarLink from "./NavbarLink";
import NavbarSearch from "./NavbarSearch";
import { ShoppingCart,Settings } from "lucide-react";
import Button from "../ui/Button";

function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toogleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
    <nav className="flex flex-col shadow-md">
      <div className="flex items-center justify-between p-8">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-medium">Libreria Capitán del Espacio</h1>
        </div>
        <div className="flex gap-6 text-xl">
        <NavbarLink to="/account"><Settings size={40} strokeWidth={1.25} /></NavbarLink>
          <Button variant="outline">Iniciar Sesión</Button>
          <Button>Registrarse</Button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-8 bg-gray-100 p-4">
        <div className="ml-6 flex gap-8">
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/catalog">Catálogo</NavbarLink>
          <NavbarLink to="/contact">Contacto</NavbarLink>
          <NavbarLink to="/faq">Preguntas Frecuentes</NavbarLink>
        </div>
        <div className="flex items-center gap-6">
          <NavbarLink to="/cart">
            <ShoppingCart size={28} />
          </NavbarLink>
          <NavbarSearch />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

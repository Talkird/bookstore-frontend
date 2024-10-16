import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import NavbarLink from "./NavbarLink";
import NavbarSearch from "./NavbarSearch";
import { ShoppingCart, Settings } from "lucide-react";
import plumaLogo from "../../assets/images/pluma-dibujando-una-linea.png";

function Navbar() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryRoute) => {
    navigate(categoryRoute);
  };

  const categories = [
    { name: "NOVELA", route: "/books/novela" },
    { name: "SUSPENSO", route: "/books/suspenso" },
    { name: "INFANTIL", route: "/books/infantil" },
    { name: "CIENCIA FICCIÓN", route: "/books/ciencia-ficcion" },
    { name: "ROMÁNTICO", route: "/books/romantico" },
  ];

  return (
    <nav className="flex flex-col bg-background shadow-md">
      <div className="bg-blue flex items-center justify-between p-8">
        <div className="flex items-center gap-3">
          <img src={plumaLogo} alt="Logo La Pluma Encantada" className="h-12" />
          <h1 className="font-poppins text text-5xl">La pluma encantada</h1>
        </div>
        <div className="flex gap-6 text-xl">
          <NavbarLink to="/login">
            <Button variant="outline" className="bg-white text-primary">
              Iniciar Sesión
            </Button>
          </NavbarLink>
          <NavbarLink to="/register">
            <Button>Registrarse</Button>
          </NavbarLink>
          <NavbarLink to="/cart">
            <ShoppingCart size={40} strokeWidth={1.25} />
          </NavbarLink>
          <NavbarLink to="/account">
            <Settings size={40} strokeWidth={1.25} />
          </NavbarLink>
        </div>
      </div>

      <div className="flex items-center justify-between gap-8 bg-secondary p-1">
        <div className="ml-6 flex gap-8 text-lg">
          <NavbarLink to="/">Home</NavbarLink>

          {/* Menú de Categorías con Dropdown que se despliega con hover */}
          <div className="group relative">
            <NavbarLink to="/catalog">Catálogo</NavbarLink>
            <div className="absolute left-0 mt-2 hidden w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
              <ul>
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleCategoryClick(category.route)}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavbarLink to="/como-comprar">Cómo comprar</NavbarLink>
          <NavbarLink to="/contact">Contacto</NavbarLink>
          <NavbarLink to="/faq">Preguntas Frecuentes</NavbarLink>
          <NavbarLink to="/quienes-somos">Quiénes Somos</NavbarLink>
        </div>

        <div className="flex items-center gap-3">
          <NavbarSearch className="w-full max-w-xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

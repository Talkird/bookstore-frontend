import { BookOpenText } from "lucide-react";
import Button from "../ui/Button";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <nav className="flex flex-col shadow-md">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-3">
          <BookOpenText size={46} />
          <h1>Libreria</h1>
        </div>
        <div className="flex gap-3 text-xs">
          <Button variant="outline">Login</Button>
          <Button>Register</Button>
        </div>
      </div>
      <div className="flex gap-3 bg-gray-100 p-3">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/catalog">Catalogo</NavItem>
        <NavItem to="/contact">Contacto</NavItem>
      </div>
    </nav>
  );
}

export default Navbar;

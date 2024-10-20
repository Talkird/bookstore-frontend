import { Search } from "lucide-react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react"; // Para manejar el estado
import { useNavigate } from "react-router-dom"; // Para navegar al catálogo

function NavbarSearch({ className }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/catalog?search=${searchTerm}`);
    }
  };

  // Manejar el evento de teclado
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={classNames(
        "mx-6 flex flex-row items-center justify-between gap-3 rounded-lg bg-transparent p-2",
        className,
      )}
    >
      <Input
        type="text"
        placeholder="Ingrese título o autor del libro"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado con el valor del input
        onKeyDown={handleKeyDown} // Ejecuta la función al presionar una tecla
        style={{ width: "54rem",  fontSize: "1.25rem"}}
      />
      <Button
        className="flex items-center gap-2 p-8"
        onClick={handleSearch} // Ejecuta la función de búsqueda al hacer clic
      >
        <Search size={20} />
        Buscar
      </Button>
    </div>
  );
}

NavbarSearch.propTypes = {
  className: PropTypes.string,
};

export default NavbarSearch;

import { Search } from "lucide-react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function NavbarSearch({ className }) {
  return (
    <div
      className={classNames(
        "mx-6 flex flex-row items-center justify-between rounded-lg bg-transparent p-2 gap-3",
        className,
      )}
    >
      <Input
        type="text"
        placeholder="Ingrese título del libro"
      />
      <Button
        className="flex p-8 gap-2 items-center"
        >
        <Search size={24} />
        Buscar
        </Button>
      
        
    </div>
  );
}

NavbarSearch.propTypes = {
  className: PropTypes.string,
};

export default NavbarSearch;

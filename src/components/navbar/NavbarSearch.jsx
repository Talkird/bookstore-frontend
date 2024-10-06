import { Search } from "lucide-react";
import { cn } from "../../utils/classNames";
import PropTypes from "prop-types";

function NavbarSearch({ className }) {
  return (
    <div
      className={cn(
        "mx-4 flex flex-row items-center justify-between rounded-lg border border-primary/50 bg-white p-2",
        className,
      )}
    >
      <Search
        className="bg-transparent px-2 text-primary transition hover:cursor-pointer hover:opacity-60"
        size={36}
      />
      <input
        type="text"
        placeholder="Buscar..."
        className="min-w-96 bg-transparent p-2 text-xl font-medium text-primary placeholder-primary/60 outline-none"
      ></input>
    </div>
  );
}

NavbarSearch.propTypes = {
  className: PropTypes.string,
};

export default NavbarSearch;

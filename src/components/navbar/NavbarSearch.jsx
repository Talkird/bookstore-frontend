import { Search } from "lucide-react";
import PropTypes from "prop-types";
import classNames from "classnames";

function NavbarSearch({ className }) {
  return (
    <div
      className={classNames(
        "mx-6 flex flex-row items-center justify-between rounded-lg border border-primary/50 bg-white p-2",
        className,
      )}
    >
      <Search
        className="bg-transparent px-2 text-primary transition hover:cursor-pointer hover:opacity-60"
        size={60}
      />
      <input
        type="text"
        placeholder="Ingresar título, autor, ISBN o categoría"
        className="w-[50rem] bg-transparent p-2 text-xl font-medium text-black placeholder-primary/60 outline-none"
      />
    </div>
  );
}

NavbarSearch.propTypes = {
  className: PropTypes.string,
};

export default NavbarSearch;

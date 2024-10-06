import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { cn } from "../../utils/classNames";

function NavbarLink({ children, to, className }) {
  return (
    <Link
      className={cn(
        "text-xl font-medium transition hover:text-primary/80",
        className,
      )}
      to={to}
    >
      {children}
    </Link>
  );
}

NavbarLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string,
};

export default NavbarLink;

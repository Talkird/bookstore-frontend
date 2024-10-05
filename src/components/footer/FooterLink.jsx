import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { cn } from "../../utils/classNames";

function FooterLink({ children, to, className }) {
  return (
    <Link
      className={cn(
        "text-lg font-medium text-white/80 transition hover:opacity-60",
        className,
      )}
      to={to}
    >
      {children}
    </Link>
  );
}

FooterLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default FooterLink;

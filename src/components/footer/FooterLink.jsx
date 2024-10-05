import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FooterLink({ children, to }) {
  return (
    <Link className="transition hover:text-gray-500" to={to}>
      {children}
    </Link>
  );
}

FooterLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

export default FooterLink;

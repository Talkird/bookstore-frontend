import proptypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

function CategoryCard({ name, route, color }) {
  return (
    <Link
      to={route}
      className={classNames(
        "transform items-center rounded border-2 px-16 py-12 text-lg font-semibold text-white transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50",
        color,
      )}
    >
      {name}
    </Link>
  );
}

CategoryCard.propTypes = {
  name: proptypes.string.isRequired,
  route: proptypes.string.isRequired,
  color: proptypes.string.isRequired,
};

export default CategoryCard;

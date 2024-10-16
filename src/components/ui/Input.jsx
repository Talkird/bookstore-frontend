import PropTypes from "prop-types";
import classNames from "classnames";

function Input({ className, placeholder, ...rest }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      {...rest}
      className={classNames(
        "w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base text-gray-700 placeholder-gray-400 shadow-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary",
        className,
      )}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;

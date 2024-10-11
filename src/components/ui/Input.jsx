import { cn } from "../../utils/classNames";
import PropTypes from "prop-types";

function Input({ className, placeholder, ...rest }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      {...rest}
      className={cn(
        "w-full rounded-lg bg-gray-50 p-3 border border-gray-300 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all",
        className
      )}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;

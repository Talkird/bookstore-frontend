import { cva } from "class-variance-authority";
import { cn } from "../../utils/classNames";
import PropTypes from "prop-types";

const buttonVariants = cva("rounded-md items-center font-medium", {
  variants: {
    variant: {
      default: "bg-primary text-white hover:opacity-80 transition",
      outline: "bg-transparent border border-primary text-primary",
    },
    size: {
      default: "px-4 py-2",
      sm: "text-sm px-2 py-1",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Button({ children, className, variant, size, ...rest }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["default", "outline"]),
  size: PropTypes.oneOf(["default", "sm"]),
};

Button.defaultProps = {
  variant: "default",
  size: "default",
};

export default Button;

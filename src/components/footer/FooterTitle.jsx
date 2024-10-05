import propTypes from "prop-types";
import { cn } from "../../utils/classNames";

function FooterTitle({ children, className }) {
  return (
    <h1
      className={cn(
        "mb-2 flex cursor-text items-center gap-2 text-2xl font-bold text-white/80",
        className,
      )}
    >
      {children}
    </h1>
  );
}

FooterTitle.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
};

export default FooterTitle;

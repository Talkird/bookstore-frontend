import PropTypes from "prop-types";
import { cn } from "../../utils/classNames";

function FooterHyperlink({ children, href, className }) {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        "flex items-center gap-3 text-lg font-medium text-white/80 transition hover:opacity-60",
        className,
      )}
    >
      {children}
    </a>
  );
}

FooterHyperlink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default FooterHyperlink;

import { ChevronRight, ChevronLeft } from "lucide-react";
import PropTypes from "prop-types";

function SliderArrow({ arrowDirection }) {
  return (
    <div
      style={{
        display: "block",
        zIndex: 10,
        right: "-10px",
      }}
    >
      {arrowDirection === "left" && (
        <ChevronLeft size={36} className="text-gray-600 hover:text-gray-800" />
      )}
      {arrowDirection === "right" && (
        <ChevronRight size={36} className="text-gray-600 hover:text-gray-800" />
      )}
    </div>
  );
}

SliderArrow.propTypes = {
  arrowDirection: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default SliderArrow;

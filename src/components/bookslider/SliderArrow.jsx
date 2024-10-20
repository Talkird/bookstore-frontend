import { ChevronRight, ChevronLeft } from "lucide-react";
import PropTypes from "prop-types";

function SliderArrow({ arrowDirection, onClick }) {
  const isLeft = arrowDirection === "left";

  return (
    <div
      onClick={onClick}
      style={{
        display: "block",
        position: "absolute",
        top: "50%",
        [isLeft ? "left" : "right"]: "-25px",
        zIndex: 10,
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
    >
      {isLeft ? (
        <ChevronLeft size={36} className="text-gray-600 hover:text-gray-800" />
      ) : (
        <ChevronRight size={36} className="text-gray-600 hover:text-gray-800" />
      )}
    </div>
  );
}

SliderArrow.propTypes = {
  arrowDirection: PropTypes.oneOf(["left", "right"]).isRequired,
  onClick: PropTypes.func.isRequired,  // Función que se llamará al hacer clic
};

export default SliderArrow;

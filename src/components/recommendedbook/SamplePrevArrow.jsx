// SamplePrevArrow.js
import React from 'react';
import { ChevronLeft } from 'lucide-react'; // Importa el ícono de Lucide

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={{
        ...style,
        display: "block",
        zIndex: 10,
        left: "-25px",
      }}
      onClick={onClick}
    >
      <ChevronLeft size={36} className="text-gray-600 hover:text-gray-800" />
    </div>
  );
}

export default SamplePrevArrow;

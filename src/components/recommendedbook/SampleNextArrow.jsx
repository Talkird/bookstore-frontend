// SampleNextArrow.js
import React from 'react';
import { ChevronRight } from 'lucide-react'; // Importa el ícono de Lucide

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={{
        ...style,
        display: "block",
        zIndex: 10,
        right: "-10px",
      }}
      onClick={onClick}
    >
      <ChevronRight size={36} className="text-gray-600 hover:text-gray-800" />
    </div>
  );
}

export default SampleNextArrow;

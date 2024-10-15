import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border rounded-lg shadow-md mb-4 bg-gray-100">
      <Button
        className="w-full p-4 text-left font-semibold flex items-center bg-blue-500 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="flex-grow">{title}</span>
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`}>
          <div className={`transform ${isHovered || isOpen ? 'rotate-90' : ''} transition-transform duration-500`}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </Button>
      {isOpen && <div className="p-4 bg-white transition-all duration-500">{children}</div>}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;
import React from 'react';

function Sort({ onSortChange }) {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="text-lg flex justify-between items-center mb-4 p-1">
      <label className="mr-2">Ordenar por precio:</label>
      <select onChange={handleSortChange} className="border p-2 rounded-lg w-auto">
        <option value="">Ninguno</option>
        <option value="asc">Bajo a alto</option>
        <option value="desc">Alto a bajo</option>
      </select>
    </div>
  );
}

export default Sort;

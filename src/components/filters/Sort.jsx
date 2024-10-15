import React from 'react';

function Sort({ onSortChange }) {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="flex justify-center mb-4">
      <label>Sort by Price: </label>
      <select onChange={handleSortChange}>
        <option value="">None</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
}

export default Sort;

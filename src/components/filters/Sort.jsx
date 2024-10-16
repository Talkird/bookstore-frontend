import PropTypes from "prop-types";

function Sort({ onSortChange }) {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="mb-4 flex items-center justify-between p-1 text-lg">
      <label className="mr-2">Ordenar por precio:</label>
      <select
        onChange={handleSortChange}
        className="w-auto rounded-lg border p-2"
      >
        <option value="">Ninguno</option>
        <option value="asc">Bajo a alto</option>
        <option value="desc">Alto a bajo</option>
      </select>
    </div>
  );
}
Sort.propTypes = {
  onSortChange: PropTypes.func.isRequired,
};

export default Sort;

import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";

function Filter({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleFilterChange = () => {
    onFilterChange({ minPrice, maxPrice, publisher, selectedCategories });
  };

  const categories = [
    "NOVELA",
    "ROMANTICO",
    "TERROR",
    "CIENCIA FICCION",
    "FANTASIA",
    "AVENTURAS",
    "SUSPENSO",
    "POESIA",
    "INFANTIL",
    "AUTOAYUDA",
    "DEPORTE",
    "ARTE",
    "MUSICA",
    "COCINA",
  ];

  // Si la categoría ya está seleccionada, la quitamos, de lo contrario la agregamos
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category],
    );
  };

  return (
    <div className="rounded-lg border bg-white p-4 shadow-md">
      <h2 className="mb-4 text-lg font-bold">Filtrar por precios</h2>
      <div className="mb-2 flex items-center space-x-2">
        <input
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Mín"
          className="w-24 rounded-lg border p-3 text-center"
        />
        <span>-</span>
        <input
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Máx"
          className="w-24 rounded-lg border p-3 text-center"
        />
      </div>

      <h2 className="mb-2 mt-2 text-lg font-bold">Filtrar por Editorial</h2>
      <select
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
        className="mb-4 w-full rounded-lg border p-2"
      >
        <option value="">Todas</option>
        <option value="Editorial A">Editorial A</option>
        <option value="Editorial B">Editorial B</option>
      </select>

      <h2 className="mb-2 text-lg font-bold">Filtrar por Categoría</h2>
      <div className="mb-4 grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </div>

      <Button onClick={handleFilterChange}>Aplicar filtros</Button>
    </div>
  );
}
Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;

import { useState } from 'react';
import Button from "../ui/Button";

function Filter({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [publisher, setPublisher] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]); // Estado para las categorías seleccionadas

  const handleFilterChange = () => {
    onFilterChange({ minPrice, maxPrice, publisher, selectedCategories }); // Enviar las categorías seleccionadas
  };

  const categories = [
    'NOVELA',
    'ROMANTICO',
    'TERROR',
    'CIENCIA FICCION',
    'FANTASIA',
    'AVENTURAS',
    'SUSPENSO',
    'POESIA',
    'INFANTIL',
    'AUTOAYUDA',
    'DEPORTE',
    'ARTE',
    'MUSICA',
    'COCINA',
  ];

  const handleCategoryChange = (category) => {
    // Si la categoría ya está seleccionada, la quitamos, de lo contrario la agregamos
    setSelectedCategories(prevCategories => 
      prevCategories.includes(category) 
        ? prevCategories.filter(c => c !== category) 
        : [...prevCategories, category]
    );
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-bold mb-4">Filtrar por precios</h2>
      <div className="flex items-center space-x-2 mb-2">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Mín"
          className="border p-2 rounded-lg text-center w-24"
        />
        <span>-</span>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Máx"
          className="border p-2 rounded-lg text-center w-24"
        />
        <Button onClick={handleFilterChange}>
          IR
        </Button>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        *Min. $995.00 - Max. $588086.00
      </p>

      <h2 className="text-lg font-bold mb-2">Filtrar por Editorial</h2>
      <select
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
        className="border p-2 rounded-lg w-full mb-4"
      >
        <option value="">Todas</option>
        <option value="Editorial A">Editorial A</option>
        <option value="Editorial B">Editorial B</option>
      </select>

      <h2 className="text-lg font-bold mb-2">Filtrar por Categoría</h2>
      <div className="grid grid-cols-2 gap-2 mb-4">
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

      <Button onClick={handleFilterChange}>
        Aplicar filtros
      </Button>
    </div>
  );
}

export default Filter;

import { useNavigate } from 'react-router-dom';

// Componente para mostrar una categoría
function CategoryCard({ name, route, onClick, color }) {
    return (
      <button
        onClick={() => onClick(route)}
        className={`p-4 text-center border-2 rounded text-white font-semibold transition transform hover:scale-105 duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${color}`}
        style={{ width: "200px", height: "100px" }}
      >
        {name}
      </button>
    );
  }
  
// Componente para mostrar la sección de categorías
function Categories() {
    const navigate = useNavigate();

  const categories = [
    { name: "NOVELA", route: "/books/novela",color: "bg-purple-500 border-purple-500 hover:bg-purple-600 focus:ring-purple-400"  },
    { name: "SUSPENSO", route: "/books/suspenso",color: "bg-blue-500 border-blue-500 hover:bg-blue-600 focus:ring-blue-400" },
    { name: "INFANTIL", route: "/books/infantil", color: "bg-green-500 border-green-500 hover:bg-green-600 focus:ring-green-400" },
    { name: "CIENCIA FICCION", route: "/books/ciencia-ficcion", color: "bg-orange-500 border-orange-500 hover:bg-orange-600 focus:ring-orange-400" },
    { name: "ROMANTICO", route: "/books/romantico", color: "bg-pink-500 border-pink-500 hover:bg-pink-600 focus:ring-pink-400" },
  ];

  const handleCategoryClick = (route) => {
    navigate(route); // Navegar a la ruta de la categoría
  };


  return (
    <div className="border-1 border-secondary p-2 mt-6 rounded-lg text-center">
      <div className="flex flex-col sm:flex-row justify-center gap-6"> {/* Cambia aquí */}
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            name={category.name}
            route={category.route}
            onClick={handleCategoryClick}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;

import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = [
    {
      name: "NOVELA",
      route: "/books/novela",
      color:
        "bg-purple-500 border-purple-500 hover:bg-purple-600 focus:ring-purple-400",
    },
    {
      name: "SUSPENSO",
      route: "/books/suspenso",
      color:
        "bg-blue-500 border-blue-500 hover:bg-blue-600 focus:ring-blue-400",
    },
    {
      name: "INFANTIL",
      route: "/books/infantil",
      color:
        "bg-green-500 border-green-500 hover:bg-green-600 focus:ring-green-400",
    },
    {
      name: "CIENCIA FICCION",
      route: "/books/ciencia-ficcion",
      color:
        "bg-orange-500 border-orange-500 hover:bg-orange-600 focus:ring-orange-400",
    },
    {
      name: "ROMANTICO",
      route: "/books/romantico",
      color:
        "bg-pink-500 border-pink-500 hover:bg-pink-600 focus:ring-pink-400",
    },
  ];

  return (
    <div className="m-4 flex flex-col items-center justify-center gap-6">
      <h2 className="text-2xl font-medium">Categorías destacadas</h2>
      <div className="flex items-center gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            name={category.name}
            route={category.route}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;

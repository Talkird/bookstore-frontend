import { Link } from "react-router-dom";
import BackButton from "../components/ui/BackButton";

function QuienesSomos() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <BackButton />
        </div>
        <nav className="text-gray-500">
          {/* Enlace a Inicio */}
          <Link to="/" className="hover:text-primary">
            Home
          </Link>{" "}
          - <span className="text-gray-400">Quienes Somos</span>
        </nav>
      </div>
      <div className="bg-primary-600 text-primary-100 mb-8 rounded-lg py-8 text-center shadow-lg">
        <h1 className="text-5xl font-bold">Quiénes Somos</h1>
      </div>
      <div className="text-lg leading-relaxed text-primary">
        <p className="mb-6 text-justify">
          Somos Martina, Tomás, Juan, Santiago y Federico, un equipo de
          estudiantes apasionados por los libros y la tecnología. Nuestra misión
          es acercar la literatura a todos, creando un espacio donde los
          lectores puedan descubrir y disfrutar de libros que inspiran, educan y
          entretienen. Cada uno de nosotros aporta algo único a este proyecto,
          desde el desarrollo de software hasta la selección de libros en
          nuestro catálogo.
        </p>
        <p className="mb-6 text-justify">
          Como estudiantes, entendemos la importancia del acceso a la
          información, la cultura y el conocimiento. Por eso decidimos lanzar
          esta tienda de libros, donde los amantes de la lectura, como nosotros,
          pueden encontrar una selección diversa de obras que abarca desde la
          ficción hasta la no ficción, y desde los clásicos hasta las novedades
          más recientes.
        </p>
        <p className="text-justify">
          Nuestro compromiso es seguir mejorando, con el objetivo de ofrecer una
          experiencia de compra personalizada y accesible para todos. Nos
          apasiona lo que hacemos y esperamos que disfrutes explorando nuestra
          tienda tanto como nosotros disfrutamos construyéndola.
        </p>
      </div>
    </div>
  );
}

export default QuienesSomos;

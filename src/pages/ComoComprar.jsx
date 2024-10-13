import { Link } from 'react-router-dom';

function ComoComprar() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Encabezado */}
      
      <div className="flex justify-between items-center mb-6">
        <nav className="text-gray-500">
          {/* Enlace a Inicio */}
          <Link to="/" className="hover:text-primary">Home</Link> - <span className="text-gray-400">Cómo Comprar</span>
        </nav>
      </div>
      <div className="max-w-4xl mx-auto py-3 px-2">
        <div className="bg-burdeos-600 text-burdeos-100 text-center py-8 mb-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold">Cómo Comprar</h1>
        </div>
      </div>

      {/* Contenido del cuerpo */}
      <div className="bg-white p-3 shadow-md rounded-md">
        <ol className="list-decimal list-inside text-lg text-primary leading-relaxed">
          <li className="mb-6">
            Si ya tenés un usuario creado ingresá en "Iniciar Sesión." Si todavía no te registraste, hacé clic en "Crear cuenta" 
            y completá tus datos. Recibirás un mail de confirmación y ya estarás listo para empezar a comprar.
          </li>
          <li className="mb-6">Elegí el producto que deseás comprar.</li>
          <li className="mb-6">
            Hacé clic en el botón "Agregar al carrito". Esto agregará el producto a tu carrito (que lo mostrará junto al subtotal 
            de tu compra en una ventana pop up) y te permitirá seguir navegando.
          </li>
          <li className="mb-6">
            Podrás seguir explorando el sitio y agregando otros productos al carrito hasta que decidas terminar tu compra.
          </li>
          <li className="mb-6">
            Para hacer el checkout, cliqueá sobre tu carrito, elegí el método de envío o retiro y presioná "Iniciar Compra".
          </li>
          <li className="mb-6">
            Completá los datos del domicilio correspondiente (en caso de ser necesario), tus datos de facturación y presioná "Continuar".
          </li>
        </ol>
      </div>
    </div>
  );
}

export default ComoComprar;

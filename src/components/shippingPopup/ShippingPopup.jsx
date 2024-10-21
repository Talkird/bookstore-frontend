import { useState } from "react";
import { X } from "lucide-react";

const ShippingPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* Botón de cierre */}
        <button
          className="absolute right-2 top-2 p-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Título */}
        <h2 className="mb-4 text-2xl font-bold">Envío</h2>

        {/* Tabla de tiempos de envío */}
        <h3 className="mb-2 text-xl font-bold">Tiempos de envío</h3>
        <table className="mb-4 w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Localidad</th>
              <th className="p-2 text-left">Tiempo de entrega estimado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Capital Federal</td>
              <td className="p-2">2 - 3 días hábiles</td>
            </tr>
            <tr>
              <td className="p-2">Provincia de Buenos Aires</td>
              <td className="p-2">2 - 4 días hábiles</td>
            </tr>
            <tr>
              <td className="p-2">Resto del país</td>
              <td className="p-2">3 - 5 días hábiles</td>
            </tr>
          </tbody>
        </table>

        {/* Tabla de costos de envío */}
        <h3 className="mb-2 text-xl font-bold">Costos de envío</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Región</th>
              <th className="p-2 text-left">Costo fijo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Buenos Aires (GBA)</td>
              <td className="p-2">$3500</td>
            </tr>
            <tr>
              <td className="p-2">Buenos Aires (Interior)</td>
              <td className="p-2">$4800</td>
            </tr>
            <tr>
              <td className="p-2">CABA</td>
              <td className="p-2">$4000</td>
            </tr>
            <tr>
              <td className="p-2">Catamarca</td>
              <td className="p-2">$4800</td>
            </tr>
            <tr>
              <td className="p-2">Chaco</td>
              <td className="p-2">$4800</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4 text-sm text-gray-500">
          *A las compras durante el fin de semana se les sumarán 48 horas
          hábiles.
        </p>
      </div>
    </div>
  );
};

export default ShippingPopup;

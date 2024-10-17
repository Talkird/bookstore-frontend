// src/components/paymentPopup/PaymentPopup.js
import React from 'react';
import { X } from "lucide-react";


const PaymentPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
      <button
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Medios de Pago</h2>
        <div className="mb-4">
          <ul className="list-disc ml-4">
            <li>Depósito o transferencia en nuestra cuenta bancaria</li>
            <li>Tarjetas de créditos: Visa, Mastercard y American Express</li>
            <li>MercadoPago</li>
            <li>Mobbex</li>
            <li>RapiPago o Pago Fácil</li>
          </ul>
        </div>
        <h3 className="text-lg font-semibold mb-2">¿Es seguro usar tarjeta de crédito?</h3>
        <p className="text-gray-600 mb-4">
          Para resguardar la seguridad de los datos en internet se han desarrollado protocolos y aplicaciones usando técnicas de encriptación.
        </p>
        <p className="text-gray-600">
          Los datos se encriptan usando algoritmo sha256RSA para mantener la seguridad en la comunicación entre su navegador y nuestro servidor.
        </p>
      </div>
    </div>
  );
};

export default PaymentPopup;

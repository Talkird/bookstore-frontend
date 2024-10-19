import React, { useState } from "react";

const CouponInput = ({ applyDiscount }) => {
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");

  const handleApplyCoupon = () => {
    if (coupon.trim() === "") {
      setError("Por favor ingresa un cupón.");
    } else {
      // Valida y aplica el cupón
      const isValid = applyDiscount(coupon);
      if (!isValid) {
        setError("Cupón inválido o expirado.");
      } else {
        setError(""); // Elimina el mensaje de error si el cupón es válido
      }
    }
  };

  return (
    <div className="mt-4">
      {/* Agrupamos el input y el botón en una misma fila con flex */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Ingresa tu cupón"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="border p-2 rounded-md"
        />
        <button
          onClick={handleApplyCoupon}
          className="ml-2 bg-primary text-white p-2 rounded-md"
        >
          Aplicar cupón
        </button>
      </div>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default CouponInput;

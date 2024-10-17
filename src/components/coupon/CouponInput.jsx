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
      <input
        type="text"
        placeholder="Ingresa tu cupón"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="border p-2 rounded-md w-full"
      />
      <button
        onClick={handleApplyCoupon}
        className="mt-2 bg-primary text-white p-2 rounded-md"
      >
        Aplicar cupón
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default CouponInput;

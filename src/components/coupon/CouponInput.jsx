import { useState } from "react";

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
          className="rounded-md border p-2"
        />
        <button
          onClick={handleApplyCoupon}
          className="ml-2 rounded-md bg-primary p-2 text-white"
        >
          Aplicar cupón
        </button>
      </div>
      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
};

export default CouponInput;

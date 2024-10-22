import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const CouponInput = ({ applyDiscount }) => {
  const [coupon, setCoupon] = useState("");

  const handleApplyCoupon = () => {
    if (coupon) {
      applyDiscount(coupon);
    }
  }
  

  return (
    <div className="mt-4">
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Ingresa tu cupón"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <Button
          onClick={handleApplyCoupon}
        >
          Aplicar cupón
        </Button>
      </div>
    </div>
  );
};

export default CouponInput;

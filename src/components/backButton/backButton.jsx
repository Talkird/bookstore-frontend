import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button"; // Asegúrate de que el componente Button esté importado correctamente

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-6 flex justify-end">
      <Button variant="outline" size="default" onClick={() => navigate(-1)}>
        Volver
      </Button>
    </div>
  );
};

export default BackButton;

import { useNavigate } from "react-router-dom";
import Button from "./Button";
import classNames from "classnames";
import propTypes from "prop-types";

const BackButton = ({ className }) => {
  const navigate = useNavigate();

  return (
    <Button
      className={classNames(className)}
      variant="outline"
      onClick={() => navigate(-1)}
    >
      Volver
    </Button>
  );
};

BackButton.propTypes = {
  className: propTypes.string,
};

export default BackButton;

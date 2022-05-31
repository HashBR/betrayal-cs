import "./Button.scss";
import { IButton } from "../../interfaces/IButton";

const Button = ({
  children,
  onClick = () => {},
  width = "250px",
  fontSize = "1rem",
}: IButton) => {
  return (
    <button
      className="button-text"
      onClick={onClick}
      style={{
        width: width,
        fontSize: fontSize,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

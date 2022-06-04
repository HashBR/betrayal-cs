import "./Button.scss";
import { IButton } from "../../interfaces/IButton";

const Button = ({
  children,
  onClick = (event?: any) => {},
  width = "250px",
  fontSize = "1rem",
  id = "button",
}: IButton) => {
  return (
    <button
      id={id}
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

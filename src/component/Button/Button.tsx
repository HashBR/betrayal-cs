import "./Button.scss";

const Button = ({ textValue = "", onClick = () => {} }) => {
  return (
    <button className="button-text" onClick={onClick}>
      {textValue}
    </button>
  );
};

export default Button;

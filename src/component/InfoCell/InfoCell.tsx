import Button from "../Button/Button";
import "./InfoCell.scss";

const InfoCell = () => {
  return (
    <div className="grid-item first info-cell">
      <Button width="100%" fontSize="1rem">
        Help
      </Button>
      <div className="info-text">
        <span className="description">Betrayal Cheat Sheet</span>
        <br></br>
        <span className="version">v0.9.6</span>
      </div>
    </div>
  );
};

export default InfoCell;

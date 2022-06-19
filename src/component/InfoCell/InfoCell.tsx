import Button from "../Button/Button";
import "./InfoCell.scss";
import { useContext } from "react";
import { HelpModalContext } from "../../context/helpmodal";

const InfoCell = () => {
  const { setIsHelpOpen } = useContext(HelpModalContext);

  return (
    <div className="grid-item first info-cell">
      <Button width="100%" fontSize="1rem" onClick={() => setIsHelpOpen(true)}>
        Help
      </Button>
      <div className="info-text">
        <span className="description">Betrayal Cheat Sheet</span>
        <br></br>
        <span className="version">v1.0.5</span>
      </div>
    </div>
  );
};

export default InfoCell;

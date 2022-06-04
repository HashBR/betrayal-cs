import { useContext } from "react";
import { HelpModalContext } from "../../context/helpmodal";
import Button from "../Button/Button";
import "./HelpModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const HelpModal = () => {
  const { setIsHelpOpen } = useContext(HelpModalContext);
  const handleHelpClick = (event: any) => {
    if (event.target.id === "modal-background") {
      setIsHelpOpen(false);
    }
  };

  return (
    <div
      id="modal-background"
      className="modal-background"
      onClick={(event) => {
        handleHelpClick(event);
      }}
    >
      <div className="modal-container">
        <div className="tutorial-text-container">
          <span className="help-title">Help</span>
          <hr className="hr" />
          <p className="tutorial-text">
            Click on each table icon to change its colors.
          </p>
          <span className="tutorial-text">
            You can use the arrows to move each member left or right by clicking
            on these icons&nbsp;
            <FontAwesomeIcon
              className="icons-in-text"
              size="xs"
              icon={faChevronLeft}
            />{" "}
            <FontAwesomeIcon
              className="icons-in-text"
              size="xs"
              icon={faChevronRight}
            />
            &nbsp;right next to each member image.
          </span>
          <p className="tutorial-text">
            You can also hide each member by scrolling past it and clicking on
            these icons&nbsp;
            <FontAwesomeIcon
              className="icons-in-text"
              size="xs"
              icon={faEye}
            />{" "}
            <FontAwesomeIcon
              className="icons-in-text"
              size="xs"
              icon={faEyeSlash}
            />
            &nbsp; or their name there.
          </p>
        </div>
        <hr className="hr" />
        <div className="legend-container">
          <div className="legend-title">Legend</div>
          <div className="legend-content">
            <div className="legend-item">
              <div className="grid-item color2">Great</div>Best result.
            </div>
            <div className="legend-item">
              <div className="grid-item color1">Good</div>Decent.
            </div>

            <div className="legend-item">
              <div className="grid-item color0">OK</div>Not bad.
            </div>
            <div className="legend-item">
              <div className="grid-item color3">Worst</div>Avoid.
            </div>
          </div>
        </div>
        <Button
          id="close-modal-help-btn"
          onClick={(event) => setIsHelpOpen(false)}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default HelpModal;

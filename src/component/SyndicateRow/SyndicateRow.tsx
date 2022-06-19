import { useContext } from "react";
import { SyndicateContext } from "../../context/members";
import { ISyndicate } from "../../interfaces/ISyndicate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleEmpty } from "@fortawesome/free-regular-svg-icons";
import { CountersContext } from "../../context/counters";
import { CountersContextProps } from "../../interfaces/CountersContextProps";
import IncrementOnPosition from "../../utils/IncrementOnPosition";
import { OptionsContext } from "../../context/options";
import { IOptions } from "../../interfaces/IOptions";

const SyndicateRow = ({
  rowIndex = 0,
  letter = "T",
  areaName = "transportation",
}) => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const { counters, setCounters, setShareCode, positions } =
    useContext<CountersContextProps>(CountersContext);
  const { isColorblind } = useContext<IOptions>(OptionsContext);
  const handleCounter = (member: string) => {
    const found = counters.find((item) => item.field === member);
    if (found) {
      found.count = IncrementOnPosition(found.count, rowIndex);
    }
    setCounters((previousCounter) => {
      return [...previousCounter];
    });
    setShareCode(
      counters
        .map((counter) => {
          return String(counter.count).padStart(5, "0");
        })
        .join("")
    );
  };
  return (
    <>
      <div className="grid-item first">
        <span className="area-title">{letter}</span>
        <div className="circle-wrapper">
          {rowIndex === 3 && <FontAwesomeIcon icon={faCircle} />}
          <FontAwesomeIcon icon={faCircleEmpty} />
          {rowIndex === 2 && <FontAwesomeIcon icon={faCircle} />}
          <FontAwesomeIcon icon={faCircleEmpty} />
          {rowIndex === 1 && <FontAwesomeIcon icon={faCircle} />}
          <FontAwesomeIcon icon={faCircleEmpty} />
          {rowIndex === 0 && <FontAwesomeIcon icon={faCircle} />}
        </div>
      </div>
      {members.map((member, index) => (
        <div
          key={member.name}
          className={`grid-item clickable item-img color${
            counters[positions[index]]
              ? String(counters[positions[index]].count).padStart(5, "0")[
                  rowIndex
                ]
              : "0"
          }
          ${isColorblind ? "colorblind" : ""}
          `}
          onClick={() => handleCounter(members[positions[index]].name)}
          // backgroundImage diferent based on areaName
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/${
              areaName === "transportation"
                ? members[positions[index]].transportationImg
                : areaName === "fortification"
                ? members[positions[index]].fortificationImg
                : areaName === "research"
                ? members[positions[index]].researchImg
                : areaName === "intervention"
                ? members[positions[index]].interventionImg
                : ""
            })`,
            // display is none if hidden is true
            display: counters[positions[index]]?.hidden ? "none" : "flex",
          }}
        >
          {areaName === "transportation" && (
            <div className="item-text">
              {members[positions[index]].transportation}
            </div>
          )}
          {areaName === "fortification" && (
            <div className="item-text">
              {members[positions[index]].fortification}
            </div>
          )}
          {areaName === "research" && (
            <div className="item-text">
              {members[positions[index]].research}
            </div>
          )}
          {areaName === "intervention" && (
            <div className="item-text">
              {members[positions[index]].intervention}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SyndicateRow;

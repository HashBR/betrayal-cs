import { useContext } from "react";
import { SyndicateContext } from "../../context/members";
import { ISyndicate } from "../../interfaces/ISyndicate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleEmpty } from "@fortawesome/free-regular-svg-icons";
import { CountersContext } from "../../context/counters";
import { CountersContextProps } from "../../interfaces/CountersContextProps";
import IncrementOnPosition from "../../utils/IncrementOnPosition";

const SyndicateRow = ({
  rowIndex = 0,
  letter = "T",
  areaName = "transportation",
}) => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const { counters, setCounters } =
    useContext<CountersContextProps>(CountersContext);
  const handleCounter = (member: string) => {
    const found = counters.find((item) => item.field === member);
    if (found) {
      found.count = IncrementOnPosition(found.count, rowIndex);
    }
    setCounters((previousCounter: any) => {
      return [...previousCounter];
    });
  };

  return (
    <>
      <div className="grid-item first">
        <span className="area-title">{letter}</span>
        <div className="circle-wrapper">
          {rowIndex === 1 && <FontAwesomeIcon icon={faCircle} />}
          <FontAwesomeIcon icon={faCircleEmpty} />
          {rowIndex === 2 && <FontAwesomeIcon icon={faCircle} />}
          <FontAwesomeIcon icon={faCircleEmpty} />
          {rowIndex === 3 && <FontAwesomeIcon icon={faCircle} />}
          <FontAwesomeIcon icon={faCircleEmpty} />
          {rowIndex === 4 && <FontAwesomeIcon icon={faCircle} />}
        </div>
      </div>
      {members.map((member, index) => (
        <div
          key={member.name}
          className={`grid-item clickable color${
            counters[index]
              ? String(counters[index].count).padStart(5, "0")[rowIndex]
              : "0"
          }`}
          onClick={() => handleCounter(member.name)}
        >
          {areaName === "transportation" && (
            <div className="">{member.transportation}</div>
          )}
          {areaName === "fortification" && (
            <div className="">{member.fortification}</div>
          )}
          {areaName === "research" && <div className="">{member.research}</div>}
          {areaName === "intervention" && (
            <div className="">{member.intervention}</div>
          )}
        </div>
      ))}
    </>
  );
};

export default SyndicateRow;

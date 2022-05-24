import { useContext, useEffect } from "react";
import { SyndicateContext } from "../../context/members";
import { ISyndicate } from "../../interfaces/ISyndicate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleEmpty } from "@fortawesome/free-regular-svg-icons";
import { CountersContext } from "../../context/counters";
import { CountersContextProps } from "../../interfaces/CountersContextProps";

const TransportationRow = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const { counters, setCounters } =
    useContext<CountersContextProps>(CountersContext);
  const handleCounter = (member: string) => {
    const found = counters.find((item) => item.field === member);
    const stringifiedNumber = String(found?.count).padStart(4, "0");

    if (found) {
      var newResult = Number(stringifiedNumber[2]) + 1;
      if (newResult >= 4) {
        newResult = 0;
      }
      found.count = Number(
        stringifiedNumber[0] +
          stringifiedNumber[1] +
          String(newResult) +
          stringifiedNumber[3]
      );
    }
    setCounters((previousCounter) => {
      return [...previousCounter];
    });
  };

  return (
    <>
      <div className="grid-item first">
        <span className="area-title">T</span>
        <div className="circle-wrapper">
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircleEmpty} />
          <FontAwesomeIcon icon={faCircleEmpty} />
          <FontAwesomeIcon icon={faCircleEmpty} />
        </div>
      </div>
      {members.map((member, index) => (
        <div
          key={member.name}
          className={`grid-item clickable color${
            counters[index]
              ? String(counters[index].count).padStart(4, "0")[2]
              : "0"
          }`}
          onClick={() => handleCounter(member.name)}
        >
          <div className="">{member.transportation}</div>
        </div>
      ))}
    </>
  );
};

export default TransportationRow;

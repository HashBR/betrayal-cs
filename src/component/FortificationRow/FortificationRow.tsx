import { useContext, useEffect, useState } from "react";
import { SyndicateContext } from "../../context/members";
import { ISyndicate } from "../../interfaces/ISyndicate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleEmpty } from "@fortawesome/free-regular-svg-icons";
import { CountersContext } from "../../context/counters";
import { CountersContextProps } from "../../interfaces/CountersContextProps";

const FortificationRow = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const { counters, setCounters } =
    useContext<CountersContextProps>(CountersContext);
  const [forceRender, setForceRender] = useState(false);
  const handleCounter = (member: string) => {
    setForceRender(!forceRender);
    const found = counters.find((item) => item.field === member);
    if (found) {
      found.count = found.count + 100;
      if (found.count >= 400) {
        found.count = found.count - 400;
      }
    } else {
      setCounters((previousCounter) => {
        return [...previousCounter, { field: member, count: 1 }];
      });
    }
    setCounters((previousCounter: any) => {
      return [...previousCounter, { field: member, count: found?.count }];
    });
  };
  useEffect(() => {
    console.log(counters[0]);
  }, [forceRender]);
  return (
    <>
      <div className="grid-item first">
        <span className="area-title">F</span>
        <div className="circle-wrapper">
          <FontAwesomeIcon icon={faCircleEmpty} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircleEmpty} />
          <FontAwesomeIcon icon={faCircleEmpty} />
        </div>
      </div>
      {members.map((member, index) => (
        <div
          key={member.name}
          className={`grid-item clickable color${
            counters[index]
              ? String(counters[index].count).padStart(4, "0")[1]
              : "0"
          }`}
          // onClick={() => handleCounter(member.name)}
        >
          <div className="">{member.fortification}</div>
        </div>
      ))}
    </>
  );
};

export default FortificationRow;

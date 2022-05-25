import { useContext } from "react";
import { CountersContext } from "../../context/counters";
import { SyndicateContext } from "../../context/members";
import { CountersContextProps } from "../../interfaces/CountersContextProps";
import { ISyndicate } from "../../interfaces/ISyndicate";
import IncrementOnPosition from "../../utils/IncrementOnPosition";

import "./HeaderTable.scss";

const HeaderTable = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const { counters, setCounters } =
    useContext<CountersContextProps>(CountersContext);
  const handleCounter = (member: string) => {
    const found = counters.find((item) => item.field === member);
    if (found) {
      found.count = IncrementOnPosition(found.count, 4);
    }
    setCounters((previousCounter) => {
      return [...previousCounter];
    });
  };

  return (
    <>
      {members.map((member, index) => (
        <div
          key={member.name}
          className={`grid-item member-img clickable color${
            counters[index]
              ? String(counters[index].count).padStart(5, "0")[4]
              : "0"
          }`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/${member.img})`,
          }}
          onClick={() => handleCounter(member.name)}
        >
          <div className="member-name">{member.name}</div>
        </div>
      ))}
    </>
  );
};

export default HeaderTable;

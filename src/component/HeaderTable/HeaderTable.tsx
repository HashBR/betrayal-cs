import { useContext } from "react";
import { CountersContext } from "../../context/counters";
import { SyndicateContext } from "../../context/members";
import { CountersContextProps } from "../../interfaces/CountersContextProps";
import { ISyndicate } from "../../interfaces/ISyndicate";

import "./HeaderTable.scss";

const HeaderTable = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const { counters, setCounters } =
    useContext<CountersContextProps>(CountersContext);
  const handleCounter = (member: string) => {
    const found = counters.find((item) => item.field === member);
    const stringifiedNumber = String(found?.count).padStart(4, "0");

    if (found) {
      var newResult = Number(stringifiedNumber[3]) + 1;
      if (newResult >= 4) {
        newResult = 0;
      }
      found.count = Number(
        stringifiedNumber[0] +
          stringifiedNumber[1] +
          stringifiedNumber[2] +
          String(newResult)
      );
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
              ? String(counters[index].count).padStart(4, "0")[3]
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

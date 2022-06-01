import { useContext, useEffect, useState } from "react";
import { CountersContext } from "../../context/counters";
import { SyndicateContext } from "../../context/members";
import { CountersContextProps } from "../../interfaces/CountersContextProps";
import { ISyndicate } from "../../interfaces/ISyndicate";
import IncrementOnPosition from "../../utils/IncrementOnPosition";
import { arrayMoveImmutable } from "array-move";

import "./HeaderTable.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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

  const [shiftedMembers, setShiftedMembers] = useState(
    arrayMoveImmutable(members, 0, 0)
  );
  const handleMove = (direction: number, memberPosition: number) => {
    //-1 left, +1 right
    var newPosition = memberPosition + direction;
    if (newPosition < 0) {
      newPosition = members.length - 1;
    }
    if (newPosition > members.length - 1) {
      newPosition = 0;
    }
    setShiftedMembers((previousMembers) => {
      return arrayMoveImmutable(previousMembers, memberPosition, newPosition);
    });
    setCounters((previousCounters) => {
      return arrayMoveImmutable(previousCounters, memberPosition, newPosition);
    });
  };

  // useEffect(() => {
  //   // console.log(counters);
  //   setShiftedCounters(arrayMoveImmutable(counters, 0, 0));
  //   console.log(shiftedCounters);
  // }, []);

  return (
    <>
      {shiftedMembers.map((member, index) => (
        <div
          key={member.name}
          className={`grid-item member-img clickable color${
            counters[index]
              ? String(counters[index].count).padStart(5, "0")[4]
              : "0"
          }`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/${member.img})`,
            display: counters[index]?.hidden ? "none" : "flex",
          }}
          onClick={() => handleCounter(member.name)}
        >
          {/* <div className="directions">
            <span
              onClick={() => {
                handleMove(-1, index);
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </span>
            <span
              onClick={() => {
                handleMove(+1, index);
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </span>
          </div> */}
          <div className="member-name">{member.name}</div>
        </div>
      ))}
    </>
  );
};

export default HeaderTable;

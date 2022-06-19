import { useContext } from "react";
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
import { IOptions } from "../../interfaces/IOptions";
import { OptionsContext } from "../../context/options";

const HeaderTable = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const { counters, setCounters, positions, setPositions } =
    useContext<CountersContextProps>(CountersContext);
  const { isColorblind } = useContext<IOptions>(OptionsContext);
  const handleCounter = (member: string) => {
    const found = counters.find((item) => item.field === member);
    if (found) {
      found.count = IncrementOnPosition(found.count, 4);
    }
    setCounters((previousCounter) => {
      return [...previousCounter];
    });
  };

  const handleMove = (
    //event is a mouseevent
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    direction: number,
    memberPosition: number
  ) => {
    event.stopPropagation();
    //-1 left, +1 right
    var newPosition = memberPosition + direction;
    // position goes around if it goes out of bounds
    if (newPosition < 0) {
      newPosition = members.length - 1;
    }
    if (newPosition > members.length - 1) {
      newPosition = 0;
    }
    // while loop to skip hidden members
    while (counters[newPosition].hidden) {
      newPosition = newPosition + direction;
    }

    const movedPositons = arrayMoveImmutable(
      positions,
      memberPosition,
      newPosition
    );
    setPositions(movedPositons);
    const newCounters = counters.map((counter, index) => {
      counter.position = movedPositons[index];
      return counter;
    });
    setCounters(newCounters);
  };

  return (
    <>
      {members.map((member, index) => (
        <div
          key={member.name}
          className={`grid-item member-img clickable color${
            counters[positions[index]]
              ? String(counters[positions[index]].count).padStart(5, "0")[4]
              : "0"
          }
          ${isColorblind ? "colorblind" : ""}
          `}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/${
              members[positions[index]].img
            })`,
            display: counters[positions[index]]?.hidden ? "none" : "flex",
          }}
          onClick={() => handleCounter(members[positions[index]].name)}
        >
          <div className="directions">
            <span
              onClick={(event) => {
                handleMove(event, -1, index);
              }}
            >
              <FontAwesomeIcon
                className="arrow"
                icon={faChevronLeft}
                size="lg"
              />
            </span>
            <span
              onClick={(event) => {
                handleMove(event, +1, index);
              }}
            >
              <FontAwesomeIcon
                className="arrow"
                icon={faChevronRight}
                size="lg"
              />
            </span>
          </div>
          <div className="member-name">{members[positions[index]].name}</div>
        </div>
      ))}
    </>
  );
};

export default HeaderTable;

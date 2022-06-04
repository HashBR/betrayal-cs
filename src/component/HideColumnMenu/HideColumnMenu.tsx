import Button from "../Button/Button";
import { CountersContext } from "../../context/counters";
import { useContext } from "react";
import { CountersContextProps } from "../../interfaces/CountersContextProps";
import { ISyndicate } from "../../interfaces/ISyndicate";
import { SyndicateContext } from "../../context/members";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./HideColumnMenu.scss";

const HideColumnMenu = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const { counters, setCounters } =
    useContext<CountersContextProps>(CountersContext);
  const handleHiddenClick = (field: string) => {
    setCounters((previousCounters) => {
      return previousCounters.map((counter) => {
        if (counter.field === field) {
          return { ...counter, hidden: !counter.hidden };
        } else {
          return counter;
        }
      });
    });
  };
  const visibleCount = counters.reduce((acc, counter) => {
    return acc + (counter.hidden ? 0 : 1);
  }, 0);

  const toggleHiddenAll = () => {
    setCounters((previousCounters) => {
      return previousCounters.map((counter) => {
        // return { ...counter, hidden: !counter.hidden };
        return {
          ...counter,
          hidden: visibleCount === 0 ? !counter.hidden : true,
        };
      });
    });
  };

  return (
    <div className="hide-member-container">
      {members.map((member, index) => {
        return (
          <div key={member.name} className="checkbox-item-container">
            <input
              type="checkbox"
              id={member.name}
              checked={!counters[index]?.hidden}
              onChange={() => handleHiddenClick(member.name)}
            />
            <label
              className="checkbox-item"
              htmlFor={member.name}
              style={{
                color: `${
                  counters[index]?.hidden
                    ? "rgb(113, 107, 103)"
                    : "rgb(226, 213, 206)"
                }`,
              }}
            >
              <FontAwesomeIcon
                className="eye-icon"
                icon={counters[index]?.hidden ? faEyeSlash : faEye}
                size="lg"
                style={{
                  maxWidth: "20px",
                  maxHeight: "20px",
                  marginRight: "0.4rem",
                }}
              />
              <span className="checkbox-text">{`${member.name}`}</span>
            </label>
          </div>
        );
      })}
      <Button width="15%" fontSize="0.9rem" onClick={toggleHiddenAll}>
        <FontAwesomeIcon
          icon={visibleCount === 0 ? faEye : faEyeSlash}
          size="lg"
        />{" "}
        All
      </Button>
    </div>
  );
};

export default HideColumnMenu;

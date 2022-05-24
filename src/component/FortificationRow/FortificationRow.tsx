import { useContext } from "react";
import { SyndicateContext } from "../../context/members";
import { ISyndicate } from "../../interfaces/ISyndicate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleEmpty } from "@fortawesome/free-regular-svg-icons";

const FortificationRow = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
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
      {members.map((member) => (
        <div key={member.name} className="grid-item">
          <div className="">{member.fortification}</div>
        </div>
      ))}
    </>
  );
};

export default FortificationRow;

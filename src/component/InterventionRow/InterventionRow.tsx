import { useContext } from "react";
import { SyndicateContext } from "../../context/members";
import { ISyndicate } from "../../interfaces/ISyndicate";

const InterventionRow = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  return (
    <>
      <div className="grid-item first">Intervention IMG HERE</div>
      {members.map((member) => (
        <div key={member.name} className="grid-item">
          <div className="">{member.intervention}</div>
        </div>
      ))}
    </>
  );
};

export default InterventionRow;

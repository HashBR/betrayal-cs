import { useContext } from "react";
import { SyndicateContext } from "../../context/members";
import { ISyndicate } from "../../interfaces/ISyndicate";

const FortificationRow = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  return (
    <>
      <div className="grid-item first">Fortification IMG HERE</div>
      {members.map((member) => (
        <div key={member.name} className="grid-item">
          <div className="">{member.fortification}</div>
        </div>
      ))}
    </>
  );
};

export default FortificationRow;

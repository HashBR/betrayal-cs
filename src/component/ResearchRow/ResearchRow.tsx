import { useContext } from "react";
import { SyndicateContext } from "../../context/members";
import { ISyndicate } from "../../interfaces/ISyndicate";

const ResearchRow = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  return (
    <>
      <div className="grid-item first">Research IMG HERE</div>
      {members.map((member) => (
        <div key={member.name} className="grid-item">
          <div className="">{member.research}</div>
        </div>
      ))}
    </>
  );
};

export default ResearchRow;

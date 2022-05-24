import { useContext } from "react";
import { SyndicateContext } from "../../context/members";
import { ISyndicate } from "../../interfaces/ISyndicate";

const TransportationRow = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  return (
    <>
      <div className="grid-item first">Transporation IMG HERE</div>
      {members.map((member) => (
        <div key={member.name} className="grid-item">
          <div className="">{member.transportation}</div>
        </div>
      ))}
    </>
  );
};

export default TransportationRow;

import { useContext } from "react";
import { SyndicateContext } from "../../context/members";
import { ISyndicate } from "../../interfaces/ISyndicate";

import "./HeaderTable.scss";

const HeaderTable = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  return (
    <>
      {members.map((member) => (
        <div
          key={member.name}
          className="grid-item member-img"
          style={{ backgroundImage: `url(${member.img})` }}
        >
          <div className="member-name">{member.name}</div>
        </div>
      ))}
    </>
  );
};

export default HeaderTable;

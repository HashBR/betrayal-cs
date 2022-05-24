import { useContext, useEffect, useState } from "react";
import { SyndicateContext } from "../../context/members";
import { ICounters } from "../../interfaces/ICounters";
import { ISyndicate } from "../../interfaces/ISyndicate";

import "./HeaderTable.scss";

const HeaderTable = () => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const [counter, setCounter] = useState<ICounters>([]);
  const [forceRender, setForceRender] = useState(false);

  const handleCounter = (member: string) => {
    setForceRender(!forceRender);
    const found = counter.find((item: any) => item.field === member);
    if (found) {
      found.count++;
      if (found.count > 3) {
        found.count = 0;
      }
    }
    // It should never trigger it if the useEffect is working fine
    // else {
    //   setCounter((previousCounter) => {
    //     return [...previousCounter, { field: member, count: 1 }];
    //   });
    // }
  };

  useEffect(() => {
    members.map((member) =>
      setCounter((previousCounter) => {
        return [...previousCounter, { field: member.name, count: 0 }];
      })
    );
  }, []);

  return (
    <>
      {members.map((member, index) => (
        <div
          key={member.name}
          // className={`grid-item member-img clickable color${counter[index]?.count}`}
          className={`grid-item member-img clickable color${
            counter[index] ? counter[index].count : "0"
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

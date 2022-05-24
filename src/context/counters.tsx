import React, { createContext, useContext, useEffect, useState } from "react";
import { ICounters } from "../interfaces/ICounters";
import { CountersProps } from "../interfaces/CountersProps";
import { SyndicateContext } from "./members";
import { ISyndicate } from "../interfaces/ISyndicate";
import { CountersContextProps } from "../interfaces/CountersContextProps";

export const CountersContext = createContext<CountersContextProps>({
  counters: [],
  setCounters: () => {},
});

export const CountersProvider = (props: CountersProps) => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const [counters, setCounters] = useState<ICounters>([]);

  useEffect(() => {
    members.forEach((member) =>
      setCounters((previousCounters) => {
        return [...previousCounters, { field: member.name, count: 0 }];
      })
    );
  }, []);
  const value = { counters, setCounters };
  return (
    <CountersContext.Provider value={value}>
      {props.children}
    </CountersContext.Provider>
  );
};

import React, { createContext, useContext, useEffect, useState } from "react";
import { ICounters } from "../interfaces/ICounters";
import { CountersProps } from "../interfaces/CountersProps";
import { SyndicateContext } from "./members";
import { ISyndicate } from "../interfaces/ISyndicate";
import { CountersContextProps } from "../interfaces/CountersContextProps";
import ShareCodeSplitter from "../utils/ShareCodeSplitter";
import CodeValidator from "../utils/CodeValidator";

export const CountersContext = createContext<CountersContextProps>({
  counters: [],
  setCounters: () => {},
  shareCode: "",
  setShareCode: () => {},
});

export const CountersProvider = (props: CountersProps) => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const [counters, setCounters] = useState<ICounters>([]);

  const [shareCode, setShareCode] = useState<string>(
    CodeValidator(window.location.href)
  );
  useEffect(() => {
    members.forEach((member, columnIndex) => {
      const loadedCounter = ShareCodeSplitter(shareCode, columnIndex);
      if (loadedCounter != null && loadedCounter !== undefined) {
        setCounters((previousCounters) => {
          return [
            ...previousCounters,
            { field: member.name, count: loadedCounter },
          ];
        });
      }
    });
  }, []);
  const value = { counters, setCounters, shareCode, setShareCode };
  return (
    <CountersContext.Provider value={value}>
      {props.children}
    </CountersContext.Provider>
  );
};

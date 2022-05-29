import React, { createContext, useContext, useEffect, useState } from "react";
import { ICounters } from "../interfaces/ICounters";
import { CountersProps } from "../interfaces/CountersProps";
import { SyndicateContext } from "./members";
import { ISyndicate } from "../interfaces/ISyndicate";
import { CountersContextProps } from "../interfaces/CountersContextProps";
import ShareCodeSplitter from "../utils/ShareCodeSplitter";
import CodeValidator from "../utils/CodeValidator";

const LOCAL_STORAGE_KEY = "betrayalcs.counters";

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
    const storedCounters = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
    if (storedCounters) {
      setCounters(storedCounters);
    } else {
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
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(counters));
  }, [counters]);

  const value = { counters, setCounters, shareCode, setShareCode };
  return (
    <CountersContext.Provider value={value}>
      {props.children}
    </CountersContext.Provider>
  );
};

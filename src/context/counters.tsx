import { createContext, useContext, useEffect, useState } from "react";
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
  positions: [],
  setPositions: () => {},
});

export const CountersProvider = (props: CountersProps) => {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const [counters, setCounters] = useState<ICounters>([]);
  // 0 = Aisling, 1 = Cameria .... 16 = Vorici --- Alphabetically distributed
  const [positions, setPositions] = useState<Array<number>>([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);
  const [shareCode, setShareCode] = useState<string>(
    CodeValidator(window.location.href)
  );

  useEffect(() => {
    const storedCounters = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
    if (storedCounters && shareCode === "00000".repeat(members.length)) {
      setCounters(storedCounters);
    } else {
      members.forEach((member, columnIndex) => {
        const loadedCounter = ShareCodeSplitter(shareCode, columnIndex);
        if (loadedCounter != null && loadedCounter !== undefined) {
          setCounters((previousCounters) => {
            return [
              ...previousCounters,
              {
                field: member.name,
                count: loadedCounter,
                hidden: false,
                positions: [columnIndex],
              },
            ];
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(counters));
  }, [counters]);

  const value = {
    counters,
    setCounters,
    shareCode,
    setShareCode,
    positions,
    setPositions,
  };
  return (
    <CountersContext.Provider value={value}>
      {props.children}
    </CountersContext.Provider>
  );
};

import { createContext, useState } from "react";
import { ISyndicate } from "../interfaces/ISyndicate";
import { SyndicateProps } from "../interfaces/SyndicateProps";
import SYNDICATE from "../info.json";

export const SyndicateContext = createContext<ISyndicate>({
  members: [],
});

export const SyndicateProvider = (props: SyndicateProps) => {
  const [syndicate] = useState<ISyndicate>(SYNDICATE);
  return (
    <SyndicateContext.Provider value={syndicate}>
      {props.children}
    </SyndicateContext.Provider>
  );
};

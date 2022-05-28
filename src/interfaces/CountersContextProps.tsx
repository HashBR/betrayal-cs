import { ICounters } from "./ICounters";

export interface CountersContextProps {
  counters: ICounters;
  setCounters: React.Dispatch<React.SetStateAction<ICounters>>;
  shareCode: string;
  setShareCode: React.Dispatch<React.SetStateAction<string>>;
}

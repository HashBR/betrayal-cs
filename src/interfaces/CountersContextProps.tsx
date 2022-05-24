import { ICounters } from "./ICounters";

export interface CountersContextProps {
  counters: ICounters;
  setCounters: React.Dispatch<React.SetStateAction<ICounters>>;
}

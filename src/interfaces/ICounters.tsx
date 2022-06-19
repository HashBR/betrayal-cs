export interface ICountersValue {
  field: string;
  count: number;
  hidden: boolean;
  position: number;
}

export interface ICounters extends Array<ICountersValue> {}

export interface ICountersValue {
  field: string;
  count: number;
  hidden: boolean;
  positions: Array<number>;
}

export interface ICounters extends Array<ICountersValue> {}

export interface ICountersValue {
  field: string;
  count: number;
  hidden: boolean;
}

export interface ICounters extends Array<ICountersValue> {}

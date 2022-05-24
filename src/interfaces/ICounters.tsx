export interface ICountersValue {
  field: string;
  count: number;
}

export interface ICounters extends Array<ICountersValue> {}

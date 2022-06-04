export interface IMembersValue {
  name: string;
  img: string;
  transportation: string;
  transportationImg: string;
  fortification: string;
  fortificationImg: string;
  research: string;
  researchImg: string;
  intervention: string;
  interventionImg: string;
}

export interface IMembers extends Array<IMembersValue> {}

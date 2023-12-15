interface Global {
  newCase: number;
  totalCase: number;
  death: number;
  recovered: number;
}

export interface CovidSummaryResponce {
  countriName: string;
  Global: Global;
}

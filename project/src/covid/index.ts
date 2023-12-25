export interface Country {
  Country: string;
  CountryName: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

interface Global {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

export interface CovidSummaryResponce {
  Countries: Country[];
  Date: string;
  Global: Global;
  Message: string;
  // Date :
  // "2020-04-05T06:37:00Z"
  // Global :
  // {NewConfirmed: 100282, TotalConfirmed: 1162857, NewDeaths: 5658, TotalDeaths: 63263,…}
}

export interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryName: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}
export type CountrySummryResponse = CountrySummaryInfo[];

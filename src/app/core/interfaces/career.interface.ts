export interface ICareer {
  companyName: string;
  country: string;
  state: string;
  city: string;
  jobTitle: string;
  description: string;
  startDate: Date;
  endDate: Date;
  yearRange: string;
  location: string;
}

export interface ICareerData {
  id: string;
  companyName: string;
  jobTitle: string;
  description: string;
  country: string;
  state: string;
  city: string;
  startDate: string;
  endDate: string;
  expanded?: boolean;
  new?: boolean;
}

export interface ICareerInterchange {
  index: string;
  data: ICareerData;
}

export interface ICareer {
  company: string;
  yearRange: string;
  job: string;
  description: string;
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

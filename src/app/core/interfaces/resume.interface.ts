import { IAbilityData } from './ability.interface';
import { ICareerData } from './career.interface';
import { IHobbyData } from './hobby.interface';
import { ICertificationData } from '@core/interfaces/certification.interface';

export interface IResume {
  id: string;
  firstName: string;
  lastName: string;
  state: string;
  city: string;
  country: string;
  age: string;
  profileImage: string;
  about: string;
  selected: boolean;
  careers: ICareerData[];
  abilities: IAbilityData[];
  hobbies: IHobbyData[];
  certifications: ICertificationData[];
}

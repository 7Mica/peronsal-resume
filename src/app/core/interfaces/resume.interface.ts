import { IAbilityData } from './ability.interface';
import { ICareerData } from './career.interface';
import { IHobbyData } from './hobby.interface';

export interface IResume {
  firstName: string;
  lastName: string;
  state: string;
  city: string;
  country: string;
  age: string;
  resumeFileUrl: string;
  profileImage: string;
  about: string;
  selected: boolean;
  careers: ICareerData[];
  abilities: IAbilityData[];
  hobbies: IHobbyData[];
}

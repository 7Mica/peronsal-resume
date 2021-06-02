export interface IAbility {
  abilityName: string;
  percent: number;
  logo: string;
  description?: string;
}

export interface IAbilityData {
  id: string;
  abilityName: string;
  percent: string;
  logo: string;
  description?: string;
  expanded?: boolean;
  new?: boolean;
}

export interface IAbilityInterchange {
  index: string;
  data: IAbilityData;
}

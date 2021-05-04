export interface IAbility {
  name: string;
  items: IAbilityItem[];
}

interface IAbilityItem {
  name: string;
  percent: number;
}

export interface IAbilityData {
  id: string;
  abilityName: string;
  percent: string;
  logo: string;
  expanded?: boolean;
  new?: boolean;
}

export interface IAbilityInterchange {
  index: string;
  data: IAbilityData;
}

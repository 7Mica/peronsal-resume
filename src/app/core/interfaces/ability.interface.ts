export interface IAbility {
  name: string;
  items: IAbilityItem[];
}

interface IAbilityItem {
  name: string;
  percent: number;
}

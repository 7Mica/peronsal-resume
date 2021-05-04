export interface IHobby {
  name: string;
  description: string;
  altText: string;
  image: string;
  image2x: string;
}

export interface IHobbyData {
  id: string;
  description: string;
  name: string;
  expanded?: boolean;
  new?: boolean;
}

export interface IHobbyInterchange {
  index: string;
  data: IHobbyData;
}

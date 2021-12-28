export interface IHobby {
  name: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Image: {
    url: string;
  };
  imageHd: {
    url: string;
  };
}

export interface IHobbyData {
  id: string;
  description: string;
  name: string;
  image: string;
  imagehd: string;
  expanded?: boolean;
  new?: boolean;
}

export interface IHobbyInterchange {
  index: string;
  data: IHobbyData;
}

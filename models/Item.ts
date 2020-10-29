interface IItem {
  image: string;
  url: string;
}

export class Item implements IItem {
  constructor(public image: string, public url: string) {}
}

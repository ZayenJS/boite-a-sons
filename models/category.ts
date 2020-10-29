import { Item } from './Item';

interface ICategory {
  id: number;
  name: string;
  color: string;
}

export class Category implements ICategory {
  constructor(
    public id: number,
    public name: string,
    public color: string,
    private items?: Item[],
  ) {
    this.items = [];
  }

  get itemList() {
    return this.items;
  }

  addItem(item: Item) {
    this.items.push(item);
  }
}

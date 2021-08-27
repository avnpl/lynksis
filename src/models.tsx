export interface Item {
  title: string;
  link: string;
}

export interface Category {
  name: string;
  items: Array<Item>;
}

export interface Lynk {
  title: string;
  link: string;
}

export interface Category {
  name: string;
  items: Array<Lynk>;
}

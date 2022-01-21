export interface Lynk {
  title: string;
  link: string;
}

export interface CategoryInterface {
  name: string;
  lynks: Array<Lynk>;
}

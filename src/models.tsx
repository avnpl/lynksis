export interface Lynk {
  title: string;
  link: string;
}

export interface Category {
  name: string;
  lynks: Array<Lynk>;
}

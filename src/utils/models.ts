export interface Lynk {
  title: string;
  link: string;
  id: string;
}

export interface CategoryInterface {
  name: string;
  lynks: Array<Lynk>;
}

export interface UserInterface {
  username: string;
  email: string;
  password: string;
  categories: CategoryInterface;
}

export interface MyError {
  message: string;
  type: string;
}

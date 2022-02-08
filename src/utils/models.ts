import { JwtPayload } from "jsonwebtoken";

export interface Lynk {
  title: string;
  link: string;
  _id?: string;
}

export interface CategoryInterface {
  _id?: string;
  name: string;
  lynks: Array<Lynk>;
}

export interface UserInterface {
  username: string;
  email: string;
  password: string;
  categories: CategoryInterface[];
}

export interface MyError {
  message: string;
  type: string;
}

export interface NewJWTPayload extends JwtPayload {
  username: string;
  email: string;
  password: string;
}

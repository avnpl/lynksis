import React, { useState } from "react";
import { Category } from "../models";
import Categories from "./Categories";

interface State {
  lynks: Array<Category>;
}

export const Mains: React.FC = () => {
  const [data, setData] = useState<State>({ lynks: [] });

  return <Categories />;
};

export default Mains;

import React from "react";
import { Category, Lynk } from "../models";

interface Props {
  arrOfCategories: Category[];
}

export const Categories: React.FC<Props> = ({ arrOfCategories }) => {
  const displayItems = (lynk: Lynk) => {
    return (
      <div>
        <a href={lynk.link}>{lynk.title}</a>
      </div>
    );
  };

  const displayCategories = (category: Category) => {
    return (
      <div>
        <h2>{category.name}</h2>
        <ul>{category.items.map(displayItems)}</ul>
      </div>
    );
  };

  return <div>{arrOfCategories.map(displayCategories)}</div>;
};

export default Categories;

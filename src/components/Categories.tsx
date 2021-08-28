import React from "react";
import { Category, Item } from "../models";

interface Props {
  lynks: Category[];
}

export const Categories: React.FC<Props> = ({ lynks }) => {
  const displayItems = (item: Item) => {
    return (
      <div>
        <a href={item.link}>{item.title}</a>
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

  return <div>{lynks.map(displayCategories)}</div>;
};

export default Categories;

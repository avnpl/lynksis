import React from "react";
import { CategoryInterface, Lynk } from "../models";
import DisplayLynks from "./DisplayLynks";

interface Props {
  category: CategoryInterface;
  removeLynk: (cat: string, lynk: Lynk) => string | undefined;
  removeCat: (cat: string) => string | undefined;
}

export const Category: React.FC<Props> = ({
  category,
  removeCat,
  removeLynk,
}) => {
  const displayCategory = (category: CategoryInterface) => {
    return (
      <div>
        <h2>{category.name}</h2>
        <button
          onClick={() => {
            removeCat(category.name);
          }}
        >
          Delete
        </button>
        {category.lynks.map((lynk) => {
          return (
            <DisplayLynks
              catName={category.name}
              lynk={lynk}
              removeLynk={removeLynk}
            />
          );
        })}
      </div>
    );
  };

  return <div>{displayCategory(category)}</div>;
};

export default Category;

import React from "react";
import { Category, Lynk } from "../models";
import DisplayLynks from "./DisplayLynks";

interface Props {
  arrOfCategories: Category[];
  removeLynk: (cat: string, lynk: Lynk) => string | undefined;
  removeCat: (cat: string) => string | undefined;
}

export const Categories: React.FC<Props> = ({
  arrOfCategories,
  removeCat,
  removeLynk,
}) => {
  const displayCategories = (category: Category) => {
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

  return <div>{arrOfCategories.map(displayCategories)}</div>;
};

export default Categories;

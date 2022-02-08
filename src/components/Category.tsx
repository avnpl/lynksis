import React from "react";
import { CategoryInterface, Lynk } from "../utils/models";
import DisplayLynks from "./DisplayLynks";

interface Props {
  category: CategoryInterface;
  removeLynk: (cat: string, lynk: Lynk) => Promise<void>;
  removeCat: (cat: string) => Promise<void>;
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
              key={lynk._id}
            />
          );
        })}
      </div>
    );
  };

  return <div>{displayCategory(category)}</div>;
};

export default Category;

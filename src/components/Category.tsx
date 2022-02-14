import React from "react";
import { CategoryInterface, LynkInterface } from "../utils/interfaces";
import Lynk from "./Lynk";

interface Props {
  category: CategoryInterface;
  removeLynk: (cat: string, lynk: LynkInterface) => Promise<void>;
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
            <Lynk
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

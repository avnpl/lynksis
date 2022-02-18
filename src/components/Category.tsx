import React from "react";
import DeleteButton from "../utils/DeleteButton";
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
        <h2 className='text-3xl font-semibold mt-2 mb-3'>{category.name}</h2>
        <button
          onClick={() => {
            removeCat(category.name);
          }}
        >
          <DeleteButton />
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

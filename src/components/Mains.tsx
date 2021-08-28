import React, { useState } from "react";
import { Category, Lynk } from "../models";
import Add from "./Add";
import Categories from "./Categories";

interface State {
  arrOfCategories: Category[];
}

const testData: State = {
  arrOfCategories: [
    {
      name: "TimePass",
      items: [
        {
          title: "Youtube",
          link: "https://www.youtube.com/",
        },
        {
          title: "Netflix",
          link: "https://www.netflix.com",
        },
      ],
    },
    {
      name: "Study",
      items: [
        {
          title: "Youtube",
          link: "https://www.youtube.com/",
        },
        {
          title: "GFG",
          link: "https://www.geeksforgeeks.com",
        },
      ],
    },
  ],
};

export const Mains: React.FC = () => {
  const [data, setData] = useState<State>({
    arrOfCategories: testData.arrOfCategories,
  });

  const addLynk = (cat: string, lynk: Lynk) => {
    let tempArrOfCats = data.arrOfCategories;
    const result = tempArrOfCats.findIndex((temp) => temp.name === cat);

    if (result !== -1) {
      let tempArrOfLynks = tempArrOfCats[result].items;
      tempArrOfLynks.push(lynk);
      tempArrOfCats[result].items = tempArrOfLynks;
      setData({ arrOfCategories: tempArrOfCats });
      return;
    } else {
      let newCat: Category = {
        name: cat,
        items: [lynk],
      };
      tempArrOfCats.push(newCat);
      setData({ arrOfCategories: tempArrOfCats });
      return;
    }
  };

  return (
    <div>
      <Categories arrOfCategories={data.arrOfCategories} />
      <Add addLynk={addLynk} />
    </div>
  );
};

export default Mains;

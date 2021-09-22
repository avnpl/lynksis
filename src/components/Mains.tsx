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
      lynks: [
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
      lynks: [
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
      let tempArrOfLynks = tempArrOfCats[result].lynks;
      tempArrOfLynks.push(lynk);
      tempArrOfCats[result].lynks = tempArrOfLynks;
      setData({ arrOfCategories: tempArrOfCats });
      return;
    } else {
      let newCat: Category = {
        name: cat,
        lynks: [lynk],
      };
      tempArrOfCats.push(newCat);
      setData({ arrOfCategories: tempArrOfCats });
      return;
    }
  };

  const removeLynk = (cat: string, lynk: Lynk) => {
    let tempArrOfCats = data.arrOfCategories;
    const result = tempArrOfCats.findIndex((temp) => temp.name === cat);

    if (result === -1) {
      return "Category Not Found";
    } else {
      let tempArrOfLynks = tempArrOfCats[result].lynks;
      const lynkToBeRemoved = tempArrOfLynks.findIndex(
        (tempLynk) => tempLynk === lynk
      );
      if (lynkToBeRemoved === -1) {
        return "Lynk Not Found";
      } else {
        tempArrOfLynks.splice(lynkToBeRemoved, 1);
        tempArrOfCats[result].lynks = tempArrOfLynks;
        setData({ arrOfCategories: tempArrOfCats });
      }
    }
  };

  const removeCat = (cat: string) => {
    let tempArrOfCats = data.arrOfCategories;
    const result = tempArrOfCats.findIndex((temp) => temp.name === cat);

    if (result === -1) {
      return "Category Not Found";
    } else {
      tempArrOfCats.splice(result, 1);
      setData({ arrOfCategories: tempArrOfCats });
    }
  };

  return (
    <div>
      <Categories
        arrOfCategories={data.arrOfCategories}
        removeLynk={removeLynk}
        removeCat={removeCat}
      />
      <Add addLynk={addLynk} />
    </div>
  );
};

export default Mains;

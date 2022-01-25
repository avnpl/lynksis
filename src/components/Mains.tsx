import React, { useState } from "react";
import { getData } from "../utils/fakeData";
import { CategoryInterface, Lynk } from "../utils/models";
import Add from "./Add";
import Category from "./Category";

interface State {
  arrOfCats: CategoryInterface[];
}

export const Mains: React.FC = () => {
  const testData = getData();
  const [data, setData] = useState<State>({
    arrOfCats: testData.arrOfCats,
  });

  const addLynk = (
    cat: string,
    { title, link }: { title: string; link: string }
  ) => {
    let tempCats = [...data.arrOfCats];
    const result = tempCats.findIndex((temp) => temp.name === cat);

    if (result !== -1) {
      let tempLynks = [...tempCats[result].lynks];
      const newLynkID = `${tempCats[result].name}-${title}`.toLowerCase();
      const newLynk: Lynk = {
        link: link,
        title: title,
        id: newLynkID.split(" ").join(""),
      };
      tempLynks.push(newLynk);
      tempCats[result].lynks = tempLynks;
      setData({ arrOfCats: tempCats });
      return;
    } else {
      const newLynkID = `${cat}-${title}`.toLowerCase();
      const newLynk: Lynk = {
        link: link,
        title: title,
        id: newLynkID.split(" ").join(""),
      };
      const newCat: CategoryInterface = {
        name: cat,
        lynks: [newLynk],
      };
      tempCats.push(newCat);
      setData({ arrOfCats: tempCats });
      return;
    }
  };

  const removeLynk = (cat: string, lynk: Lynk) => {
    let tempCats = [...data.arrOfCats];
    const result = tempCats.findIndex((temp) => temp.name === cat);

    if (result === -1) {
      return "Category Not Found";
    } else {
      let tempLynks = [...tempCats[result].lynks];
      const removePos = tempLynks.findIndex((tempLynk) => tempLynk === lynk);
      if (removePos === -1) {
        return "Lynk Not Found";
      } else {
        tempLynks.splice(removePos, 1);
        tempCats[result].lynks = tempLynks;
        setData({ arrOfCats: tempCats });
      }
    }
  };

  const removeCat = (cat: string) => {
    let tempCats = [...data.arrOfCats];
    const result = tempCats.findIndex((temp) => temp.name === cat);

    if (result === -1) {
      return "Category Not Found";
    } else {
      tempCats.splice(result, 1);
      setData({ arrOfCats: tempCats });
    }
  };

  return (
    <div>
      {data.arrOfCats.map((category) => {
        return (
          <Category
            category={category}
            removeCat={removeCat}
            removeLynk={removeLynk}
            key={category.name.toLowerCase()}
          />
        );
      })}
      <Add addLynk={addLynk} />
    </div>
  );
};

export default Mains;

import React from "react";
import {
  CategoryInterface,
  Lynk,
  MyError,
  UserInterface,
} from "../utils/models";
import { updateDBData } from "../utils/updateDBData";
import Add from "./Add";
import Category from "./Category";

interface Props {
  user: UserInterface;
  setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
  setError: React.Dispatch<React.SetStateAction<MyError | null>>;
}

const token = localStorage.getItem("token") as string;

export const Mains: React.FC<Props> = ({ user, setUser, setError }) => {
  const data = [...user.categories];

  const addLynk = async (
    cat: string,
    { title, link }: { title: string; link: string }
  ) => {
    let tempCats = [...data];
    const result = tempCats.findIndex(
      (temp) => temp.name.toLowerCase() === cat.toLowerCase()
    );

    if (result !== -1) {
      let tempLynks = [...tempCats[result].lynks];
      const newLynk: Lynk = {
        link: link,
        title: title,
      };
      tempLynks.push(newLynk);
      tempCats[result].lynks = tempLynks;
      const test = await updateDBData(tempCats, token);
      if (test) {
        setUser({ ...user, categories: test });
      } else {
        setError({
          message: "Unknown error has occurred",
          type: "UnknownErrorMains41",
        });
      }
      return;
    } else {
      const newLynk: Lynk = {
        link: link,
        title: title,
      };
      const newCat: CategoryInterface = {
        name: cat,
        lynks: [newLynk],
      };
      tempCats.push(newCat);
      const test = await updateDBData(tempCats, token);
      if (test) {
        console.log(test);
        setUser({ ...user, categories: test });
      } else {
        setError({
          message: "Unknown error has occurred",
          type: "UnknownErrorMains57",
        });
      }
      return;
    }
  };

  const removeLynk = async (cat: string, lynk: Lynk) => {
    let tempCats = [...data];
    const result = tempCats.findIndex((temp) => temp.name === cat);

    if (result === -1) {
      return;
    } else {
      let tempLynks = [...tempCats[result].lynks];
      const removePos = tempLynks.findIndex((tempLynk) => tempLynk === lynk);
      if (removePos === -1) {
        return;
      } else {
        tempLynks.splice(removePos, 1);
        tempCats[result].lynks = tempLynks;
        const test = await updateDBData(tempCats, token);
        if (test) {
          setUser({ ...user, categories: test });
        } else {
          setError({
            message: "Unknown error has occurred",
            type: "UnknownErrorMains89",
          });
        }
      }
    }
  };

  const removeCat = async (cat: string) => {
    let tempCats = [...data];
    const result = tempCats.findIndex((temp) => temp.name === cat);

    if (result === -1) {
      return;
    } else {
      tempCats.splice(result, 1);
      const test = await updateDBData(tempCats, token);
      if (test) {
        setUser({ ...user, categories: test });
      } else {
        setError({
          message: "Unknown Error has occurred",
          type: "UnknownErrorMains110",
        });
      }
    }
  };

  return (
    <div>
      {data.map((category) => {
        return (
          <Category
            category={category}
            removeCat={removeCat}
            removeLynk={removeLynk}
            key={category._id}
          />
        );
      })}
      <Add addLynk={addLynk} />
    </div>
  );
};

export default Mains;

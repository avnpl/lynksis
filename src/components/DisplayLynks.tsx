import React from "react";
import { Lynk } from "../models";

interface Props {
  catName: string;
  lynk: Lynk;
  removeLynk: (cat: string, lynk: Lynk) => string | undefined;
}

export const DisplayLynks: React.FC<Props> = ({
  catName,
  lynk,
  removeLynk,
}) => {
  return (
    <li>
      <a href={lynk.link}>{lynk.title}</a>
      <button
        onClick={() => {
          removeLynk(catName, lynk);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default DisplayLynks;

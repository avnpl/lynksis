import React from "react";
import { Lynk } from "../utils/models";

interface Props {
  catName: string;
  lynk: Lynk;
  removeLynk: (cat: string, lynk: Lynk) => Promise<void>;
}

export const DisplayLynks: React.FC<Props> = ({
  catName,
  lynk,
  removeLynk,
}) => {
  return (
    <li>
      <a href={lynk.link} rel='noreferrer'>
        {lynk.title}
      </a>
      <button
        onClick={() => {
          removeLynk(catName, lynk);
        }}
      >
        Delete
      </button>
      <a href={lynk.link} rel='noreferrer' target='_blank'>
        <button>New Tab</button>
      </a>
    </li>
  );
};

export default DisplayLynks;

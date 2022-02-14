import React from "react";
import { LynkInterface } from "../utils/interfaces";

interface Props {
  catName: string;
  lynk: LynkInterface;
  removeLynk: (cat: string, lynk: LynkInterface) => Promise<void>;
}

export const Lynk: React.FC<Props> = ({ catName, lynk, removeLynk }) => {
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

export default Lynk;

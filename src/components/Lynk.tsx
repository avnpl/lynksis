import React from "react";
import DeleteButton from "../utils/DeleteButton";
import { LynkInterface } from "../utils/interfaces";
import NewTabButton from "../utils/NewTabButton";

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
        className=''
      >
        <DeleteButton />
      </button>
      <a href={lynk.link} rel='noreferrer' target='_blank'>
        <button>
          <NewTabButton />
        </button>
      </a>
    </li>
  );
};

export default Lynk;

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
    <li className='flex gap-1 content-center'>
      <a
        className='text-base font-mono py-0.5 px-2 text-indigo-400 border-2 bg-gray-50 rounded-md hover:border-indigo-400 hover:no-underline'
        href={lynk.link}
        rel='noreferrer'
      >
        {lynk.title}
      </a>
      <button className='flex-shrink-0'>
        <a href={lynk.link} rel='noreferrer' target='_blank'>
          <NewTabButton />
        </a>
      </button>
      <button
        onClick={() => {
          removeLynk(catName, lynk);
        }}
        className='flex-shrink-0'
      >
        <DeleteButton />
      </button>
    </li>
  );
};

export default Lynk;

import React, { useState } from "react";
import { Lynk } from "../utils/models";

interface Props {
  addLynk: (categoryName: string, lynk: Lynk) => void;
}

export const Add: React.FC<Props> = ({ addLynk }) => {
  const [name, setCatName] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const addLynkButtonPressed = () => {
    addLynk(name, { link: link, title: title });
    setTitle("");
    setLink("");
  };

  return (
    <div>
      <h2>Add Section</h2>
      <form>
        <label htmlFor='catName'>Category Name : </label>
        <input
          type='text'
          id='catName'
          value={name}
          onChange={(e) => {
            setCatName(e.target.value);
          }}
        />
        <label htmlFor='title'>Enter Title : </label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor='link'>Enter Link : </label>
        <input
          type='text'
          id='link'
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <input type='button' value='Add Lynk' onClick={addLynkButtonPressed} />
      </form>
    </div>
  );
};

export default Add;

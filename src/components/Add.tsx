import React, { useEffect, useState } from "react";
import { MyError } from "../utils/interfaces";

interface Props {
  addLynk: (
    cat: string,
    {
      title,
      link,
    }: {
      title: string;
      link: string;
    }
  ) => void;
  setError: (value: React.SetStateAction<MyError | null>) => void;
}

export const Add: React.FC<Props> = ({ addLynk, setError }) => {
  const [catName, setCatName] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const addLynkButtonPressed = () => {
    addLynk(catName, { link, title });
    setTitle("");
    setLink("");
  };

  useEffect(() => {
    if (title.length > 30) {
      setError({
        message: "Please keep title less than 30 characters",
        type: "LongLynkTitleError",
      });
      setTitle(title.slice(0, 30));
    }
  }, [setError, title]);

  useEffect(() => {
    if (catName.length > 20) {
      setError({
        message: "Please keep title less than 20 characters",
        type: "LongLynkTitleError",
      });
      setCatName(catName.slice(0, 20));
    }
  }, [setError, catName]);

  return (
    <div className='w-60 m-auto'>
      <h2 className='text-3xl font-semibold mt-2 mb-3'>
        Add <span className='text-3xl text-indigo-500'>Lynks</span>
      </h2>
      <form
        className='flex flex-col mt-5 gap-y-2'
        onSubmit={(e) => {
          e.preventDefault();
          addLynkButtonPressed();
        }}
      >
        <label htmlFor='catName'>Category Name</label>
        <input
          type='text'
          id='catName'
          value={catName}
          onChange={(e) => {
            setCatName(e.target.value);
          }}
          className='w-full'
        />
        <label htmlFor='title'>Enter Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className='w-full'
        />
        <label htmlFor='link'>Enter Link</label>
        <input
          type='text'
          id='link'
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          className='w-full'
        />
        <input className='input-button mt-3' type='submit' value='Add Lynk' />
      </form>
    </div>
  );
};

export default Add;

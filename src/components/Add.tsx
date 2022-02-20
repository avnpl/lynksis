import React, { useState } from "react";

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
}

export const Add: React.FC<Props> = ({ addLynk }) => {
  const [name, setCatName] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const addLynkButtonPressed = () => {
    addLynk(name, { link, title });
    setTitle("");
    setLink("");
  };

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
          value={name}
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

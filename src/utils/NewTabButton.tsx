import React from "react";

const NewTabButton: React.FC = () => {
  return (
    <svg
      className='w-8 h-8 p-1 border-2 hover:border-indigo-400 bg-gray-50 rounded-md stroke-current text-indigo-500 '
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
      ></path>
    </svg>
  );
};

export default NewTabButton;

import React from "react";
import { Outlet } from "react-router";

interface Props {
  logoutUser: () => void;
  showLogout: boolean;
}

export const Navbar: React.FC<Props> = ({ logoutUser, showLogout }) => {
  return (
    <>
      <header className='flex items-center justify-between'>
        <p className='text-4xl text-indigo-500 pt-3 pb-4 pr-4 font-bold underline'>
          Lynksis
        </p>
        {showLogout && (
          <button
            className='input-button bg-indigo-500'
            onClick={() => {
              logoutUser();
            }}
          >
            Logout
          </button>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;

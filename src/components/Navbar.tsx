import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

interface Props {
  logoutUser: () => void;
  showLogout: boolean;
}

export const Navbar: React.FC<Props> = ({ logoutUser, showLogout }) => {
  return (
    <>
      <header className='flex items-center justify-between'>
        <div>
          <p className='text-4xl text-indigo-500 pt-3 pb-4 pr-4 font-bold underline'>
            Lynksis
          </p>
        </div>
        <div className='hidden md:flex'>
          <Link className='pt-1/2 text-xl hover:underline mr-2' to='/login'>
            Login
          </Link>
          <Link className='pt-1/2 text-xl mx-2' to='/'>
            Home
          </Link>
          <Link className='pt-1/2 text-xl ml-2' to='/register'>
            Register
          </Link>
          {showLogout && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              className='pt-1/2 text-xl ml-4'
              onClick={() => {
                logoutUser();
              }}
            >
              Logout
            </a>
          )}
        </div>
        <div className='md:hidden flex items-center mobile-menu-btn'>
          <button
            onClick={() => {
              const menu = document.querySelector(".mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <div className='mobile-menu md:hidden hidden text-center'>
        <Link className='block py-1 text-xl' to='/login'>
          Login
        </Link>
        <Link className='block py-1 text-xl' to='/'>
          Home
        </Link>
        <Link className='block py-1 text-xl' to='/register'>
          Register
        </Link>
        {showLogout && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            className='py-1 block text-xl'
            onClick={() => {
              logoutUser();
            }}
          >
            Logout
          </a>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

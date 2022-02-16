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
      <header className='flex items-center justify-between '>
        <div>
          <p className='text-4xl pt-3 pb-4 pr-4 font-bold underline'>Lynksis</p>
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
            <button
              className='text-lg text-blue-100 ml-2 px-3 py-1 bg-blue-600 rounded-lg hover:bg-blue-100 hover:text-blue-600 hover:border-black transition duration-300'
              onClick={() => {
                logoutUser();
              }}
            >
              Logout
            </button>
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
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <div className='mobile-menu md:hidden hidden'>
        <Link className='block py-1 text-sm' to='/login'>
          Login
        </Link>
        <Link className='block py-1 text-sm' to='/'>
          Home
        </Link>
        <Link className='block py-1 text-sm' to='/register'>
          Register
        </Link>
        {showLogout && (
          <button
            className='py-1 block text-sm text-blue-400'
            onClick={() => {
              logoutUser();
            }}
          >
            Logout
          </button>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

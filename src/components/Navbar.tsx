import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

interface Props {
  logoutUser: () => void;
  showLogout: boolean;
}

export const Navbar: React.FC<Props> = ({ logoutUser, showLogout }) => {
  return (
    <header>
      <h3>Lynksis</h3>
      <Link to='/login'>Login</Link>
      <br />
      <Link to='/'>Home</Link>
      <br />
      <Link to='/register'>Register</Link>
      <br />
      {showLogout && (
        <button
          onClick={() => {
            logoutUser();
          }}
        >
          Logout
        </button>
      )}
      <Outlet />
    </header>
  );
};

export default Navbar;

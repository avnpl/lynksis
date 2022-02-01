import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <header>
      <h3>Lynksis</h3>
      <Link to='/login'>Login</Link>
      <br />
      <Link to='/'>Home</Link>
      <Outlet />
    </header>
  );
};

export default Navbar;

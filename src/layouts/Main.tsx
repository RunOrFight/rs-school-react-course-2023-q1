import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-screen box-border">
      <header className="flex h-20 bg-green-500 items-center justify-center gap-5">
        <NavLink to="/" className="text-xl font-semibold text-white">
          Home
        </NavLink>
        <NavLink to="/about" className="text-xl font-semibold text-white">
          About us
        </NavLink>
        <NavLink to="/form" className="text-xl font-semibold text-white">
          Form
        </NavLink>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;

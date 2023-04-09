import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-screen box-border h-screen flex flex-col">
      <header className="flex h-20 bg-green-600 items-center justify-center gap-5 flex-shrink-0">
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
      <div className="p-5 bg-neutral-100 min-h-[1px] h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

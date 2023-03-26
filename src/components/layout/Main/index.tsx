import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './style.module.css';

const Layout = () => {
  return (
    <div className="w-screen box-border">
      <header className={css.header}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/about" className={css.link}>
          About us
        </NavLink>
        <NavLink to="/form" className={css.link}>
          Form
        </NavLink>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;

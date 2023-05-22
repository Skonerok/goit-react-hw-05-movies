import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.layout__container}>
      <header>
        <nav className={css.layout__nav}>
          <NavLink to="/" className={css.layout__link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.layout__link}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
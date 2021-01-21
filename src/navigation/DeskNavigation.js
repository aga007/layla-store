import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';
import styles from './Navigation.module.scss';
import AppContext from '../context';

const DeskNavigation = () => {
  const context = useContext(AppContext);
  const { handleShoesMenuVisibility, isShoesMenuActive, handleClothsMenuVisibility, isClothsMenuActive } = context;
  return (
    <nav className={styles.nav__desk}>
      <ul className={styles.nav__container}>
        <li className={styles.nav__item}>
          <div className={styles.nav__link}>
            <NavLink to={routes.home} className={styles.nav__navlink}>
              Home
            </NavLink>
          </div>
        </li>
        <li className={styles.nav__item}>
          <div className={styles.nav__link}>
            <div onClick={handleShoesMenuVisibility} className={styles.nav__navlink}>
              Shoes
            </div>
          </div>

          <ul className={isShoesMenuActive ? styles.nav__ul : [styles.nav__ul, styles.nav__ul__collapsed].join(' ')}>
            <li className={styles.nav__li}>
              <NavLink to={routes.boots} className={styles.nav__navlink}>
                Boots
              </NavLink>
            </li>
            <li className={styles.nav__li}>
              <NavLink to={routes.sandals} className={styles.nav__navlink}>
                Sandals
              </NavLink>
            </li>
            <li className={styles.nav__li}>
              <NavLink to={routes.sneakers} className={styles.nav__navlink}>
                Sneakers
              </NavLink>
            </li>
            <li className={styles.nav__li}>
              <NavLink to={routes.heels} className={styles.nav__navlink}>
                Heels
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={styles.nav__item}>
          <div className={styles.nav__link}>
            <div onClick={handleClothsMenuVisibility} className={styles.nav__navlink}>
              Clothing
            </div>
          </div>
          <ul className={isClothsMenuActive ? styles.nav__ul : [styles.nav__ul, styles.nav__ul__collapsed].join(' ')}>
            <li className={styles.nav__li}>
              <NavLink to={routes.dresses} className={styles.nav__navlink}>
                Dresses
              </NavLink>
            </li>
            <li className={styles.nav__li}>
              <NavLink to={routes.coats} className={styles.nav__navlink}>
                Coats
              </NavLink>
            </li>
            <li className={styles.nav__li}>
              <NavLink to={routes.jeans} className={styles.nav__navlink}>
                Jeans
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={styles.nav__item}>
          <div className={styles.nav__link}>
            <NavLink to={routes.accessories} className={styles.nav__navlink}>
              Accessories
            </NavLink>
          </div>
        </li>
        <li className={styles.nav__item}>
          <div className={styles.nav__link}>
            <NavLink to={routes.outlet} className={styles.nav__navlink}>
              Outlet
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default DeskNavigation;

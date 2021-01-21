import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';
import styles from './Navigation.module.scss';
import AppContext from '../context';

const MobNavigation = () => {
  const context = useContext(AppContext);
  const { handleMobMenuVisibility, handleShoesMenuVisibility, isMobMenuActive, isShoesMenuActive, handleClothsMenuVisibility, isClothsMenuActive } = context;
  return (
    <>
      <nav className={styles.nav__mob}>
        <div className={styles.nav__mobNav} onClick={handleMobMenuVisibility}>
          <span className={isMobMenuActive ? [styles.nav__mobIcon, styles.nav__mobIcon__active].join(' ') : styles.nav__mobIcon}>&nbsp;</span>
        </div>

        <ul className={isMobMenuActive ? styles.nav__mobContainer : styles.nav__mobContainer__collapsed}>
          <li className={[styles.nav__item, styles.nav__item__mobile].join(' ')}>
            <NavLink to={routes.home} className={styles.nav__navlink}>
              Home
            </NavLink>
          </li>
          <li className={[styles.nav__item, styles.nav__item__mobile].join(' ')}>
            <div onClick={handleShoesMenuVisibility} className={styles.nav__navlink}>
              Shoes
            </div>

            <ul className={isShoesMenuActive ? styles.nav__ulMob : styles.nav__ulMob__collapsed}>
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

          <li className={[styles.nav__item, styles.nav__item__mobile].join(' ')}>
            <div onClick={handleClothsMenuVisibility} className={styles.nav__navlink}>
              Clothing
            </div>

            <ul className={isClothsMenuActive ? styles.nav__ulMob : styles.nav__ulMob__collapsed}>
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
          <li className={[styles.nav__item, styles.nav__item__mobile].join(' ')}>
            <NavLink to={routes.accessories} className={styles.nav__navlink}>
              Accessories
            </NavLink>
          </li>
          <li className={[styles.nav__item, styles.nav__item__mobile].join(' ')}>
            <NavLink to={routes.outlet} className={styles.nav__navlink}>
              Outlet
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobNavigation;

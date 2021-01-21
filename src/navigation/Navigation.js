import React, { useContext } from 'react';
import styles from './Navigation.module.scss';
import Cart from '../components/Cart/Cart';
import MobNavigation from './MobNavigation';
import DeskNavigation from './DeskNavigation';
import AppContext from '../context';

export const Navigation = () => {
  const context = useContext(AppContext);
  const { isCartOpen, handleCartOpen, isMobIconVisible, counter, navRef } = context;
  //    {isMobIconVisible ? <MobNavigation /> : <DeskNavigation />}
  return (
    <div ref={navRef} className={styles.nav}>
      {isMobIconVisible ? <MobNavigation /> : <DeskNavigation />}
      <div className={styles.nav__iconCart}>
        <button className={styles.nav__shoppingCartIcon} onClick={handleCartOpen}>
          {counter}
        </button>
      </div>
      {isCartOpen ? <Cart /> : ''}
    </div>
  );
};

export default Navigation;

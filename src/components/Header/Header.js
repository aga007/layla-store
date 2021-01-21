import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './Header.module.scss';
import logo from '../../assets/images/layla-logo.png';

const Header = () => {
  return (
    <div className={styles.header__container}>
      <Link to={routes.home}>
        <figure className={styles.header__shape}>
          <img src={logo} className={styles.header__img} alt='Logo' />
        </figure>
      </Link>
    </div>
  );
};

export default Header;

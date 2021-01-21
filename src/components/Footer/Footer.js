import React, { useContext } from 'react';
import styles from './Footer.module.scss';
import Form from '../Form/Form';
import sprite from '../../assets/icons/symbol-defs.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__col}>
        <h4 className={styles.footer__heading}>About us</h4>
        <p>
          Launched in 2020, LAYLA Store offers a wide range of apparel to fit any woman’s unique sense of style. Beyond helping you look your best, LAYLA Store strives to make every purchase a
          positive experience. Our top priorities are excellent customer service, exceptionally quick order processing, ultra fast shipping times, and a hassle-free return policy. We value your
          feedback, whether positive or constructive and we are continuously working to improve your experience.
        </p>
      </div>
      <div className={styles.footer__col}>
        <h4 className={styles.footer__heading}>Help & Information</h4>
        <ul>
          <li className={styles.footer__li} key='Contact us'>
            <button href='#' className={styles.footer__link}>
              <svg className={styles.footer__icon}>
                <use href={`${sprite}#icon-old-phone`} />
              </svg>
              Contact us
            </button>
          </li>
          <li className={styles.footer__li} key='Track order'>
            <button className={styles.footer__link}>
              <svg className={styles.footer__icon}>
                <use href={`${sprite}#icon-truck`} />
              </svg>
              Track order
            </button>
          </li>
          <li className={styles.footer__li} key='Delivery and returns'>
            <button className={styles.footer__link}>
              <svg className={styles.footer__icon}>
                <use href={`${sprite}#icon-pencil`} />
              </svg>
              Delivery & Returns
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.footer__col2}>
        <h4 className={styles.footer__heading}>Subscribe to our newsletter</h4>
        <Form />
        <p className={styles.footer__copyright}>LAYLA | &copy; 2020 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

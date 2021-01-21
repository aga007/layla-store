import React, { useContext } from 'react';

import sprite from '../../assets/icons/symbol-defs.svg';
import styles from './Notification.module.scss';
import AppContext from '../../context';

const Notification = ({ txt, type }) => {
  let notificationStyle = null;
  let icon = null;

  switch (type) {
    case 'success':
      notificationStyle = styles.notification;
      icon = 'icon-check';
      break;
    case 'error':
      notificationStyle = [styles.notification, styles.notification__error].join(' ');
      icon = 'icon-lock';
      break;
    case 'info':
      notificationStyle = [styles.notification, styles.notification__info].join(' ');
      icon = 'icon-pencil';
      break;
    default:
      notificationStyle = styles.notification;
  }

  return (
    <div className={notificationStyle}>
      <svg className={styles.notification__removeItem}>
        <use href={`${sprite}#icon-cross`} />
      </svg>
      <svg className={styles.notification__icon}>
        <use href={`${sprite}#${icon}`} />
      </svg>
      {txt}
    </div>
  );
};

export default Notification;

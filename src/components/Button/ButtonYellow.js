import React from 'react';
import styles from './Button.module.scss';

const ButtonYellow = ({ content, fn, type }) => {
  return (
    <div className={styles.button__box}>
      <button className={styles.button} onClick={fn} type={type}>
        <div className={styles.button__text}>{content}</div>
      </button>
    </div>
  );
};

export default ButtonYellow;

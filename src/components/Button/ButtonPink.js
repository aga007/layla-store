import React from 'react';
import styles from './Button.module.scss';

const ButtonPink = ({ content, fn }) => {
  return (
    <div className={styles.button__box}>
      <button className={[styles.button, styles.button__pink].join(' ')} onClick={fn}>
        <div className={styles.button__text}>{content}</div>
      </button>
    </div>
  );
};

export default ButtonPink;

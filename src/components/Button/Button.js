import React from 'react';
import styles from './Button.module.scss';

const Button = ({ content, fn }) => {
  return (
    <button className={[styles.button, styles.button__simple].join(' ')} onClick={fn}>
      {content}
    </button>
  );
};

export default Button;

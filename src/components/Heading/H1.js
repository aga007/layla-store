import React from 'react';
import styles from './Heading.module.scss';

const H1 = ({ content }) => {
  return <h1 className={styles.headingPrimary}>{content}</h1>;
};

export default H1;

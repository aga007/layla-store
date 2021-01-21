import React from 'react';
import styles from './Heading.module.scss';

const H2 = ({ content }) => {
  return <h2 className={styles.headingSecondary}>{content}</h2>;
};

export default H2;

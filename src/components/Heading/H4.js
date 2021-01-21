import React from 'react';
import styles from './Heading.module.scss';
import '../../templates/base/_utilities.scss';

const H4 = ({ content, extraClass }) => {
  return <h4 className={[styles.headingQuaternary, extraClass].join(' ')}>{content}</h4>;
};

export default H4;

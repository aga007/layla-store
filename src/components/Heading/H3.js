import React from 'react';
import styles from './Heading.module.scss';
import '../../templates/base/_utilities.scss';

const H3 = ({ content, extraClass }) => {
  return <h3 className={[styles.headingTertiary, extraClass].join(' ')}>{content}</h3>;
};
export default H3;

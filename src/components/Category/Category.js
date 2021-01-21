import React from 'react';
import styles from './Category.module.scss';

const Category = ({ name, image }) => {
  return (
    <div className={styles.category}>
      <h2 className={styles.category__heading}>{name}</h2>
      <figure className={styles.category__shape}>
        <img src={image} className={styles.category__img} alt={name} />
      </figure>
    </div>
  );
};

export default Category;

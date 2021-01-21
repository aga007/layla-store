import React from 'react';
import styles from './Shoes.module.scss';
import Product from '../../components/Product/Product';
import { products } from '../../data/localData/products';
import Header from '../../components/Header/Header';
import H1 from '../../components/Heading/H1';

const Sandals = () => {
  const sandals = products.filter((product) => {
    return product.category === 'sandals';
  });
  return (
    <>
      <Header />
      <div className={styles.shoes}>
        <H1 content='Sandals' />
        <ul className={styles.shoes__container}>
          {sandals.map(({ images, name, price, description, id, message }) => {
            return (
              <li className={styles.shoes__item} key={id}>
                <Product image={images[0].url} name={name} price={price} description={description} id={id} message={message} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sandals;

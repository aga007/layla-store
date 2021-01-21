import React from 'react';
import Product from '../../components/Product/Product';
import { products } from '../../data/localData/products';
import Header from '../../components/Header/Header';
import H1 from '../../components/Heading/H1';
import styles from './Accessories.module.scss';

const Accessories = () => {
  const accessories = products.filter((product) => {
    return product.category === 'accessories';
  });
  return (
    <>
      <Header />
      <div className={styles.accessories}>
        <H1 content='Accessories' />
        <ul className={styles.accessories__container}>
          {accessories.map(({ images, name, price, description, id, message }) => {
            return (
              <li className={styles.accessories__item} key={id}>
                <Product image={images[0].url} name={name} price={price} description={description} id={id} message={message} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Accessories;

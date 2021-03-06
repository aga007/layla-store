import React from 'react';
import Product from '../../components/Product/Product';
import { products } from '../../data/localData/products';
import styles from './Clothing.module.scss';
import Header from '../../components/Header/Header';
import H1 from '../../components/Heading/H1';

const Coats = () => {
  const coats = products.filter((product) => {
    return product.category === 'coats';
  });
  return (
    <>
      <Header />
      <div>
        <H1 content='Coats' />
      </div>
      <ul className={styles.clothing__container}>
        {coats.map(({ images, name, price, description, id }) => {
          return (
            <li className={styles.clothing__item} key={id}>
              <Product image={images[0].url} name={name} price={price} description={description} id={id} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Coats;

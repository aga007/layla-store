import React from 'react';
import styles from './Shoes.module.scss';
import { products } from '../../data/localData/products';
import Product from '../../components/Product/Product';
import Header from '../../components/Header/Header';
import H1 from '../../components/Heading/H1';

const Boots = () => {
  const boots = products.filter((product) => {
    return product.category === 'boots';
  });
  return (
    <>
      <Header />
      <div className={styles.shoes}>
        <H1 content='Boots' />
        <ul className={styles.shoes__container}>
          {boots.map(({ images, name, price, description, id, message }) => {
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

export default Boots;

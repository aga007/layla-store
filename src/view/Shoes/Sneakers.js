import React from 'react';
import styles from './Shoes.module.scss';
import Product from '../../components/Product/Product';
import Header from '../../components/Header/Header';
import H1 from '../../components/Heading/H1';
import { useContext } from 'react';
import AppContext from '../../context';

const Sneakers = () => {
  const context = useContext(AppContext);

  const sneakers = context.products.filter((product) => {
    return product.category === 'sneakers';
  });
  console.log(sneakers);
  return (
    <>
      <Header />
      <div className={styles.shoes}>
        <H1 content='Sneakers' />
        <ul className={styles.shoes__container}>
          {sneakers.map(({ images, name, price, description, id, message }) => {
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

export default Sneakers;

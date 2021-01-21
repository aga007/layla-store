import React from 'react';
import Product from '../../components/Product/Product';
import Header from '../../components/Header/Header';
import H1 from '../../components/Heading/H1';
import styles from './Outlet.module.scss';
import { useContext } from 'react';
import AppContext from '../../context';

const Outlet = () => {
  const context = useContext(AppContext);

  const outlet = context.products.filter((product) => {
    return product.category === 'outlet';
  });

  console.log(outlet);
  return (
    <>
      <Header />
      <div className={styles.outlet}>
        <H1 content='Outlet' />
        <ul className={styles.outlet__container}>
          {outlet.map(({ images, name, price, description, id, message }) => {
            return (
              <li className={styles.outlet__item} key={id}>
                <Product image={images[0].url} name={name} price={price} description={description} id={id} message={message} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Outlet;

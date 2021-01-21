import React from 'react';
import styles from './OrderItem.module.scss';
import { shortenTxt } from '../../helperFunctions';

export const OrderItem = ({ name, image, price, quantity, size, id }) => {
  const shortName = shortenTxt(name, 50);
  return (
    <div className={styles.orderItem}>
      <figure className={styles.orderItem__figure}>
        <img src={image} className={styles.orderItem__img} alt={name} />
      </figure>
      <div>
        <h5 className={styles.orderItem__name}>{shortName}</h5>
        <p>
          {size && size !== '-' ? <span className={styles.orderItem__detail}>Size: {size} </span> : null}
          <span className={styles.orderItem__detail}>Quantity: {quantity}</span>
          <span className={styles.orderItem__detail}>Price (pc): {price}€</span>
        </p>
        <p>
          <span className={styles.orderItem__detail}>Subtotal: {price * quantity}€</span>
        </p>
      </div>
    </div>
  );
};

export default OrderItem;

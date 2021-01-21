import React, { useContext } from 'react';
import styles from './CartItem.module.scss';
import AppContext from '../../context';
import sprite from '../../assets/icons/symbol-defs.svg';
import { shortenTxt } from '../../helperFunctions';

export const CartItem = ({ name, image, price, quantity, size, id }) => {
  const context = useContext(AppContext);
  const shortName = shortenTxt(name, 20);
  return (
    <div className={styles.cartItem}>
      <button onClick={() => context.removeProductFromCart(id)} className={styles.cartItem__iconBtn}>
        <svg className={styles.cartItem__icon}>
          <use href={`${sprite}#icon-trash`} />
        </svg>
      </button>
      <figure className={styles.cartItem__figure}>
        <img src={image} className={styles.cartItem__img} alt={name} />
      </figure>
      <div>
        <h5 className={styles.cartItem__name}>{shortName}</h5>
        <p>
          <span className={styles.cartItem__quantity}>
            Quantity: {quantity} {size && size !== '-' ? `x (${size}) ` : ''}
          </span>
          <span>Price: {price * quantity}€</span>
        </p>
      </div>
    </div>
  );
};

export default CartItem;

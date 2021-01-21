import React, { useContext } from 'react';
import styles from './Cart.module.scss';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';
import AppContext from '../../context';
import { products } from '../../data/localData/products';

const Cart = () => {
  const context = useContext(AppContext);
  const { cart, cartTotal, handleCartClose, openOrderPopup } = context;

  const checkIfCartIsEmpty = () => {
    if (cart.length === 0) {
      alert('Please add at least one product to the cart!');
    } else {
      openOrderPopup();
    }
  };
  return (
    <div className={styles.cart}>
      <ul className={styles.cart__ul}>
        {cart.map(({ name, images, quantity, price, id, size }) => {
          return (
            <li className={styles.cart__li} key={id}>
              <CartItem name={name} image={images[0].url} quantity={quantity} size={size} price={price} id={id} />
            </li>
          );
        })}
      </ul>
      <div className={styles.cart__summary}>
        <button onClick={handleCartClose} className={styles.cart__close}></button>
        <p className={styles.cart__subtotal}>Total: {cartTotal} €</p>

        <Button content='Checkout' fn={checkIfCartIsEmpty} />
      </div>
    </div>
  );
};

export default Cart;

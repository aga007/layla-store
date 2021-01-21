import React, { useContext } from 'react';
import Order from '../Order/Order';
import Payment from '../Payment/Payment';
import PaymentSuccess from '../PaymentSuccess/PaymentSuccess';
import PaymentError from '../PaymentError/PaymentError';
import styles from './OrderPopup.module.scss';
import sprite from '../../assets/icons/symbol-defs.svg';
import AppContext from '../../context';

const OrderPopup = () => {
  const context = useContext(AppContext);
  const { isPaymentActive, isPaymentSuccessful, isPaymentError, closeOrderPopup, emptyCart, handleCartClose } = context;
  let displayedCode = <Order />;

  if (isPaymentActive) {
    displayedCode = <Payment />;
  } else if (isPaymentSuccessful) {
    displayedCode = <PaymentSuccess />;
  } else if (isPaymentError) {
    displayedCode = <PaymentError />;
  } else {
    displayedCode = <Order />;
  }

  const closeOrderPopupAndEmptyCart = () => {
    if (isPaymentActive || isPaymentError || isPaymentSuccessful) {
      closeOrderPopup();
      emptyCart();
      handleCartClose();
    } else {
      closeOrderPopup();
    }
  };

  return (
    <div className={styles.orderPopup}>
      <div className={styles.orderPopup__container}>
        {!isPaymentActive ? (
          <div onClick={closeOrderPopupAndEmptyCart}>
            <svg className={styles.orderPopup__close}>
              <use href={`${sprite}#icon-cross`} />
            </svg>
          </div>
        ) : null}

        {displayedCode}
      </div>
    </div>
  );
};

export default OrderPopup;

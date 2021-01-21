import React, { useState, useContext } from 'react';
import AppContext from '../../context';
import PaypalButton from '../PaypalButton/PaypalButton';
import sprite from '../../assets/icons/symbol-defs.svg';
import H4 from '../Heading/H4';
import ButtonYellow from '../Button/ButtonYellow';
import FormVisa from '../../components/Form/FormVisa';
import FormAmEX from '../../components/Form/FormAmEX';
import styles from './Payment.module.scss';

const Payment = () => {
  const context = useContext(AppContext);
  const { paymentMethod, cartTotal, deliveryCost, paymentFee, closePaymentPage, orderNumber, emptyCart, handleCartClose } = context;
  let total = cartTotal + deliveryCost + paymentFee;

  const closePaymentPageAndEmptyCart = () => {
    closePaymentPage();
    emptyCart();
    handleCartClose();
  };

  const [displayWarning, setWarningVisibility] = useState(true);

  const hideWarning = () => {
    setWarningVisibility(false);
  };

  const warning = (
    <p className={styles.payment__warning}>
      <span onClick={hideWarning}>
        <svg className={styles.payment__hide}>
          <use href={`${sprite}#icon-cross`} />
        </svg>
      </span>
      Please note that this is not a real store. You cannot place a real order. You can add fake payment data to check the functionality of the page.
    </p>
  );

  let paymentDetails = null;

  switch (paymentMethod) {
    case 'Paypal':
      paymentDetails = (
        <div>
          <H4 content='PayPal payment' extraClass='u-margin-bottom-small' />
          <p className={styles.payment__tip}>Please log in to your PayPal account to make the payment.</p>
          <PaypalButton total={total} />
        </div>
      );
      break;
    case 'Visa / MasterCard':
      paymentDetails = (
        <div>
          <H4 content='Pay with your Visa / MasterCard card' extraClass='u-margin-bottom-small' />
          <FormVisa />
        </div>
      );
      break;
    case 'American Express':
      paymentDetails = (
        <div>
          <H4 content='Pay with your American Express card' extraClass='u-margin-bottom-small' />
          <FormAmEX />
        </div>
      );
      break;
    case 'Bank wire':
      paymentDetails = (
        <div>
          <H4 content='Pay by bank transfer' extraClass='u-margin-bottom-small' />
          <p className={styles.payment__tip}>Please find below the details of our bank account. </p>

          <p className={styles.payment__paragraph}>Company name: Layla Store</p>
          <p className={styles.payment__paragraph}>IBAN: XX-XXX-XXXX-XXXX-XXXX-XXXX</p>
          <p className={styles.payment__paragraph}>BIC/SWIFT: XXXXXXX</p>

          <p className={styles.payment__paragraph}>
            Please indicate the order number <strong>(#{orderNumber})</strong> in the title of the transfer.
          </p>
          <p className={styles.payment__paragraph}>Your order will be automatically cancelled if we won't receive the payment within 48hours.</p>
          <div className={styles.payment__btnBox}>
            <ButtonYellow content='Home' fn={closePaymentPageAndEmptyCart} />
          </div>
        </div>
      );
      break;
    default:
      console.log('Something went wrong. The method of payment is unknown.');
  }

  return (
    <div className={styles.payment}>
      <div className={styles.payment__col1}>
        <div className={styles.payment__icons}>
          <svg className={styles.payment__icon}>
            <use href={`${sprite}#icon-lock`} />
          </svg>
          <svg className={styles.payment__icon}>
            <use href={`${sprite}#icon-money`} />
          </svg>
        </div>
        <h4 className={styles.payment__h4}>TOTAL:</h4>
        <h6 className={styles.payment__h6}>
          <span className={styles.payment__span}>{total}€</span>
        </h6>
      </div>
      <div className={styles.payment__col2}>
        <p className={styles.payment__orderNr}>Order #{orderNumber}</p>

        {paymentDetails}

        {displayWarning ? warning : null}
      </div>
    </div>
  );
};

export default Payment;

import React from 'react';
import styles from './PaymentError.module.scss';
import H3 from '../Heading/H3';

const PaymentError = () => {
  return (
    <div className={styles.paymentError}>
      <div className={styles.paymentError__titleBox}>
        <H3 content='Payment error !' extraClass='u-text-dark u-text-wide u-no-margin' />
      </div>

      <p className={styles.paymentError__text}>Oops.. Something went wrong and the payment has been declined. Please try again.</p>
    </div>
  );
};

export default PaymentError;

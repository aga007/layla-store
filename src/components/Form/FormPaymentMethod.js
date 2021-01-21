import React, { useContext } from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';

const FormPaymentMethod = () => {
  const context = useContext(AppContext);
  const { handleExtraServicesManager, handleOrderDetailsVisibilityManager } = context;

  const addPaymentCost = (e) => {
    if (e.target.value === 'visaMasterCard') {
      handleExtraServicesManager('paymentType', 'Visa / MasterCard');
      handleExtraServicesManager('paymentFee', 0);
      handleOrderDetailsVisibilityManager('orderSummary');
    } else if (e.target.value === 'americanExpress') {
      handleExtraServicesManager('paymentType', 'American Express');
      handleExtraServicesManager('paymentFee', 5);
      handleOrderDetailsVisibilityManager('orderSummary');
    } else if (e.target.value === 'paypal') {
      handleExtraServicesManager('paymentType', 'Paypal');
      handleExtraServicesManager('paymentFee', 2.5);
      handleOrderDetailsVisibilityManager('orderSummary');
    } else if (e.target.value === 'bankWire') {
      handleExtraServicesManager('paymentType', 'Bank wire');
      handleExtraServicesManager('paymentFee', 0);
      handleOrderDetailsVisibilityManager('orderSummary');
    }
  };
  return (
    <div className={styles.form__radioBox}>
      <li className={styles.form__radioGroup} key='expressDelivery'>
        <input type='radio' className={styles.form__radioInput} name='paymentMethod' onChange={addPaymentCost} id='paymentMethodVisa' value='visaMasterCard' />
        <label htmlFor='paymentMethodVisa' className={styles.form__radioLabel}>
          <span className={styles.form__radioBtn}></span>
          Visa / MasterCard &raquo; <span className={styles.form__radioSpan}> + 0€</span>
        </label>
      </li>
      <li className={styles.form__radioGroup} key='post'>
        <input type='radio' className={styles.form__radioInput} name='paymentMethod' onChange={addPaymentCost} id='paymentMethodAmericanExpress' value='americanExpress' />
        <label htmlFor='paymentMethodAmericanExpress' className={styles.form__radioLabel}>
          <span className={styles.form__radioBtn}></span>
          American Express &raquo; <span className={styles.form__radioSpan}>+ 5€</span>
        </label>
      </li>
      <li className={styles.form__radioGroup} key='standardDelivery'>
        <input type='radio' className={styles.form__radioInput} name='paymentMethod' onChange={addPaymentCost} id='paymentMethodPaypal' value='paypal' />
        <label htmlFor='paymentMethodPaypal' className={styles.form__radioLabel}>
          <span className={styles.form__radioBtn}></span>
          Paypal &raquo; <span className={styles.form__radioSpan}> + 2.5€</span>
        </label>
      </li>
      <li className={styles.form__radioGroup} key='GLS'>
        <input type='radio' className={styles.form__radioInput} name='paymentMethod' onChange={addPaymentCost} id='paymentMethodWire' value='bankWire' />
        <label htmlFor='paymentMethodWire' className={styles.form__radioLabel}>
          <span className={styles.form__radioBtn}></span>
          Bank wire &raquo; <span className={styles.form__radioSpan}>+ 0€</span>
        </label>
      </li>
    </div>
  );
};

export default FormPaymentMethod;

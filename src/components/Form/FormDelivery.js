import React, { useContext } from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';

const FormDelivery = () => {
  const context = useContext(AppContext);
  const { handleExtraServicesManager, handleOrderDetailsVisibilityManager } = context;

  const addDeliveryCost = (e) => {
    if (e.target.value === 'expressDelivery') {
      handleExtraServicesManager('deliveryType', 'Express Delivery (BRT)');
      handleExtraServicesManager('deliveryCost', 10);
      handleOrderDetailsVisibilityManager('orderSummary');
    } else if (e.target.value === 'standardDelivery') {
      handleExtraServicesManager('deliveryType', 'Standard Delivery (BRT)');
      handleExtraServicesManager('deliveryCost', 7);
      handleOrderDetailsVisibilityManager('orderSummary');
    } else if (e.target.value === 'GLS') {
      handleExtraServicesManager('deliveryType', 'GLS');
      handleExtraServicesManager('deliveryCost', 6);
      handleOrderDetailsVisibilityManager('orderSummary');
    } else if (e.target.value === 'post') {
      handleExtraServicesManager('deliveryType', 'Standard parcel post');
      handleExtraServicesManager('deliveryCost', 3);
      handleOrderDetailsVisibilityManager('orderSummary');
    }
  };
  return (
    <div className={styles.form__radioBox}>
      <li className={styles.form__radioGroup} key='expressDelivery'>
        <input type='radio' className={styles.form__radioInput} onChange={addDeliveryCost} name='deliveryOption' id='deliveryOptionExpress' value='expressDelivery' />
        <label htmlFor='deliveryOptionExpress' className={styles.form__radioLabel}>
          <span className={styles.form__radioBtn}></span>
          Express delivery (BRT) &raquo; <span className={styles.form__radioSpan}>10€</span>
        </label>
      </li>
      <li className={styles.form__radioGroup} key='standardDelivery'>
        <input type='radio' className={styles.form__radioInput} onChange={addDeliveryCost} name='deliveryOption' id='deliveryOptionStandard' value='standardDelivery' />
        <label htmlFor='deliveryOptionStandard' className={styles.form__radioLabel}>
          <span className={styles.form__radioBtn}></span>
          Standard delivery (BRT) &raquo; <span className={styles.form__radioSpan}>7€</span>
        </label>
      </li>
      <li className={styles.form__radioGroup} key='GLS'>
        <input type='radio' className={styles.form__radioInput} onChange={addDeliveryCost} name='deliveryOption' id='deliveryOptionGLS' value='GLS' />
        <label htmlFor='deliveryOptionGLS' className={styles.form__radioLabel}>
          <span className={styles.form__radioBtn}></span>
          GLS &raquo; <span className={styles.form__radioSpan}>6€</span>
        </label>
      </li>
      <li className={styles.form__radioGroup} key='post'>
        <input type='radio' className={styles.form__radioInput} onChange={addDeliveryCost} name='deliveryOption' id='deliveryOptionPost' value='post' />
        <label htmlFor='deliveryOptionPost' className={styles.form__radioLabel}>
          <span className={styles.form__radioBtn}></span>
          Standard parcel post &raquo; <span className={styles.form__radioSpan}>3€</span>
        </label>
      </li>
    </div>
  );
};

export default FormDelivery;

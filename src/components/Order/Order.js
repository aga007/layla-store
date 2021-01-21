import React, { useContext } from 'react';
import sprite from '../../assets/icons/symbol-defs.svg';
import H3 from '../Heading/H3';
import H4 from '../Heading/H4';
import FormAddress from '../Form/FormAddress';
import FormDelivery from '../Form/FormDelivery';
import FormPaymentMethod from '../Form/FormPaymentMethod';
import OrderItem from '../OrderItem/OrderItem';
import AppContext from '../../context';
import styles from './Order.module.scss';

const Order = () => {
  const context = useContext(AppContext);
  const {
    cart,
    cartTotal,
    deliveryCost,
    paymentFee,
    deliveryType,
    paymentMethod,
    isOrderFormCompleted,
    handleOrderDetailsVisibilityManager,
    isOrderSummaryVisible,
    isDeliveryOptionsVisible,
    isPaymentOptionsVisible,
    generateOrderNumber,
    showPaymentPage,
    handleOrderFormData,
    orderFormData,
    addNotification,
  } = context;

  // DISPLAY ADDITIONAL SERVICES
  let extraServicesString = null;

  if (deliveryType !== '' && paymentMethod !== '') {
    extraServicesString = (
      <>
        <li>
          &rarr; {deliveryType} : {deliveryCost} €
        </li>
        <li>
          &rarr; {paymentMethod} : {paymentFee} €{' '}
        </li>
      </>
    );
  } else if (deliveryType !== '' && paymentMethod === '') {
    extraServicesString = (
      <li>
        &rarr; {deliveryType} : {deliveryCost} €
      </li>
    );
  } else if (deliveryType === '' && paymentMethod !== '') {
    extraServicesString = (
      <li>
        &rarr; {paymentMethod} : {paymentFee} €{' '}
      </li>
    );
  } else {
    extraServicesString = '---';
  }
  let total = cartTotal + deliveryCost + paymentFee;

  // FORM CONTROL

  const controlOrderFormSubmit = (e) => {
    e.preventDefault();

    if (!e.target.deliveryOption.value) {
      alert('Please select the type of delivery.');
      window.location.hash = 'deliveryTypeSection';
      handleOrderDetailsVisibilityManager('deliveryOptions');
    } else if (!e.target.paymentMethod.value) {
      alert('Please select the payment method.');
      window.location.hash = 'paymentMethodSection';
      handleOrderDetailsVisibilityManager('paymentOptions');
    } else {
      window.location.hash = '';
      // Check if email has correct format
      const phoneRegex = /^(?=.*[0-9])[- +()0-9]+$/;

      if (!phoneRegex.test(e.target.phone.value)) {
        alert('phone is not correct!');
        return false;
      }
      // Check if email  has correct format
      if (e.target.email.value.length < 5) {
        alert('email is too short');
        return false;
      }
      // Check ZIP code
      if (e.target.zip.value.length < 5) {
        alert('Postal code is incorrect');
        return false;
      }

      const formData = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        street: e.target.street.value,
        house: e.target.house.value,
        zip: e.target.zip.value,
        city: e.target.city.value,
        payment: e.target.paymentMethod.value,
        delivery: e.target.deliveryOption.value,
      };

      if (formData.firstName && formData.lastName && formData.email && formData.phone && formData.street && formData.house && formData.zip && formData.city && formData.payment && formData.delivery) {
        generateOrderNumber();
        showPaymentPage();
      } else {
        alert('Ups, you forgot something.. Please fill in all the required fields');
      }

      // Save orderFormAddress, e.target.deliveryOption.value, e.target.paymentMethod.value and cart somewhere

      handleOrderFormData(formData);
      // go to payment
      // if payment successful show success popup
      // if not another popup
    }
  };
  return (
    <form onSubmit={controlOrderFormSubmit} className={styles.order__form}>
      <div className={[styles.order__column, styles.order__column__c1].join(' ')}>
        <div className={styles.order__details}>
          <div className={styles.order__optionTitle} onClick={() => handleOrderDetailsVisibilityManager('orderSummary')}>
            <svg className={styles.order__icon}>
              <use href={`${sprite}#icon-cart`} />
            </svg>
            <H4 content='Order summary' extraClass='u-hover-color-change' />
          </div>
          <div className={isOrderSummaryVisible ? styles.order__optionDetails : [styles.order__optionDetails, styles.order__optionDetails__hidden].join(' ')}>
            <ul className={styles.order__productsList}>
              {cart.map(({ name, images, quantity, price, id, size }) => {
                return (
                  <li className={styles.order__li} key={id}>
                    <OrderItem name={name} image={images[0].url} quantity={quantity} size={size} price={price} id={id} />
                  </li>
                );
              })}
            </ul>
            <div className={styles.order__summary}>
              <h6 className={styles.order__h6}>Additional services:</h6>
              <ul className={styles.order__list}>{extraServicesString}</ul>

              <h5 className={styles.order__h5}>TOTAL: {total}€</h5>
            </div>
          </div>
          <div className={styles.order__optionTitle} onClick={() => handleOrderDetailsVisibilityManager('deliveryOptions')}>
            <svg className={styles.order__icon}>
              <use href={`${sprite}#icon-truck`} />
            </svg>
            <H4 content='Delivery options' extraClass='u-hover-color-change' />
          </div>
          <div id='deliveryTypeSection' className={isDeliveryOptionsVisible ? styles.order__optionDetails : [styles.order__optionDetails, styles.order__optionDetails__hidden].join(' ')}>
            <FormDelivery />
          </div>
          <div className={styles.order__optionTitle} onClick={() => handleOrderDetailsVisibilityManager('paymentOptions')}>
            <svg className={styles.order__icon}>
              <use href={`${sprite}#icon-credit-card`} />
            </svg>
            <H4 content='Payment method' extraClass='u-hover-color-change' />
          </div>
          <div id='paymentMethodSection' className={isPaymentOptionsVisible ? styles.order__optionDetails : [styles.order__optionDetails, styles.order__optionDetails__hidden].join(' ')}>
            <FormPaymentMethod />
          </div>
        </div>
      </div>
      <div className={styles.order__column}>
        <H3 content='Delivery address' extraClass='u-margin-bottom-medium' />
        <FormAddress />

        <button className={isOrderFormCompleted ? styles.order__submitBtn : [styles.order__submitBtn, styles.order__submitBtn__inactive].join(' ')}>Place order</button>
      </div>
    </form>
  );
};

export default Order;

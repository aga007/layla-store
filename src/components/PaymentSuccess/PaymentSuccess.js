import React, { useContext } from 'react';
import styles from './PaymentSuccess.module.scss';
import H3 from '../../components/Heading/H3';
import H4 from '../../components/Heading/H4';
import AppContext from '../../context';
import sprite from '../../assets/icons/symbol-defs.svg';
import shoppingGirlImg from '../../assets/images/shopping-girl.png';

const PaymentSuccess = () => {
  const context = useContext(AppContext);
  const { paymentMethod, cartTotal, deliveryCost, paymentFee, closePaymentPage, orderNumber, cart, orderFormData } = context;

  let deliveryType, paymentType;

  switch (orderFormData.delivery) {
    case 'expressDelivery':
      deliveryType = 'Express Delivery (BRT)';
      break;
    case 'standardDelivery':
      deliveryType = 'Standard Delivery (BRT)';
      break;
    case 'GLS':
      deliveryType = 'GLS';
      break;
    case 'post':
      deliveryType = 'Standard parcel post';
      break;
    default:
      deliveryType = 'standard';
  }

  switch (orderFormData.payment) {
    case 'visaMasterCard':
      paymentType = 'Visa / MasterCard';
      break;
    case 'americanExpress':
      paymentType = 'American Express';
      break;
    case 'paypal':
      paymentType = 'Paypal';
      break;
    case 'bankWire':
      paymentType = 'Bank wire';
      break;
    default:
      paymentType = 'Other payment method';
  }

  return (
    <div className={styles.paymentSuccess__container}>
      <div className={styles.paymentSuccess__col1}>
        <p className={styles.paymentSuccess__orderNr}>Order #{orderNumber}</p>
        <img src={shoppingGirlImg} className={styles.paymentSuccess__img} alt='wallet' />
      </div>
      <div className={styles.paymentSuccess__col2}>
        <div className={styles.paymentSuccess__titleBox}>
          <H3 content='Payment successful' extraClass='u-text-dark u-text-wide u-no-margin' />
        </div>
        <div className={styles.paymentSuccess__details}>
          <div className={styles.paymentSuccess__textbox}>
            <H4 content='ORDER DETAILS:' extraClass='u-margin-bottom-medium' />
            <ul className={styles.paymentSuccess__list}>
              <span className={[styles.paymentSuccess__span, 'u-margin-bottom-small'].join(' ')}>List of products:</span>
              {cart.map((item) => {
                return <li key={item.id}>{item.quantity > 1 ? `${item.name} x ${item.quantity}` : item.name}</li>;
              })}
            </ul>
            <p className={styles.paymentSuccess__paragraph}>
              <span className={styles.paymentSuccess__span}>Delivery:&nbsp; </span>
              {deliveryType}
            </p>

            <p className={styles.paymentSuccess__paragraph}>
              <span className={styles.paymentSuccess__span}>Payment method:&nbsp; </span>
              {paymentType}
            </p>
            <p className={styles.paymentSuccess__paragraph}>
              <span className={styles.paymentSuccess__span}>TOTAL:&nbsp;</span>
              {cartTotal + deliveryCost + paymentFee}€
            </p>
            <p className={styles.paymentSuccess__paragraph}>
              <span className={styles.paymentSuccess__span}>Status:&nbsp; </span>{' '}
              <svg className={styles.paymentSuccess__icon}>
                <use href={`${sprite}#icon-check`} />
              </svg>
              Paid
            </p>
          </div>
          <div className={styles.paymentSuccess__textbox}>
            <H4 content='ADDRESS:' extraClass='u-margin-bottom-medium' />
            <p className={styles.paymentSuccess__paragraph}>
              {orderFormData.firstName} {orderFormData.lastName}
            </p>
            <p className={styles.paymentSuccess__paragraph}>
              {orderFormData.street} {orderFormData.house},
            </p>
            <p className={styles.paymentSuccess__paragraph}>
              {orderFormData.zip} {orderFormData.city}
            </p>
            <p className={styles.paymentSuccess__paragraph}>
              {orderFormData.phone}, {orderFormData.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

import React, { useContext } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import AppContext from '../../context';

const PaypalButton = ({ total }) => {
  const context = useContext(AppContext);
  const { closeOrderPopup, handlePaymentSuccess, handlePaymentError } = context;
  const onSuccess = (payment) => {
    console.log('The payment was succeeede!', payment);
    handlePaymentSuccess();
  };

  const onCancel = (info) => {
    console.log('The payment was cancelled!', info);
    handlePaymentError();
  };

  const onError = (error) => {
    console.log('Error:', error);
    handlePaymentError();
  };

  const env = 'sandbox';
  const currency = 'EUR';

  const client = {
    sandbox: 'AS_JoP1ghcqiDV7Miy0bHntrd-NSAEsSLnDKQRqdg985OgjyV0Y5F6witGml7jO0kJGSst4E0aVGNyF9',
    production: '',
  };

  return <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />;
};

export default PaypalButton;

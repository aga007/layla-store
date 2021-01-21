import React, { useContext } from 'react';
import styles from './Form.module.scss';
import sprite from '../../assets/icons/symbol-defs.svg';
import AppContext from '../../context';
import Button from '../Button/Button';

const FormAmEX = () => {
  const context = useContext(AppContext);
  const { handlePaymentSuccess, handlePaymentError } = context;
  const controlAmExFormSubmit = (e) => {
    e.preventDefault();

    // check if all the fields are completed
    if (e.target.cardholder.value && e.target.cardNumber.value && e.target.expiryMonth.value && e.target.expiryYear.value && e.target.cvc.value) {
      handlePaymentSuccess();
    } else {
      alert('Please fill out all mandatory fields.');
    }
  };

  return (
    <form onSubmit={controlAmExFormSubmit}>
      <div className={styles.form__icons}>
        <svg className={styles.form__icon}>
          <use href={`${sprite}#icon-cc-amex`} />
        </svg>
      </div>
      <div className={styles.form__group}>
        <input type='text' className={styles.form__input} placeholder="Card holder's name" name='cardholder' id='cardholder' />
        <label className={styles.form__label} htmlFor='cardholder'>
          Card holder's name
        </label>
      </div>
      <div className={styles.form__group}>
        <input type='text' className={styles.form__input} minLength='16' maxLength='16' placeholder='Card number' name='cardNumber' id='carNumber' />
        <label className={styles.form__label} htmlFor='cardNumber'>
          Card number
        </label>
      </div>
      <div className={styles.form__selectBox}>
        <div className={styles.form__selectGroup}>
          <label className={styles.form__selectLabel} htmlFor='expiryMonth'>
            Expiry date:
          </label>
          <select className={styles.form__select} name='expiryMonth' id='expiryMonth'>
            <option value='0' type='number'>
              January
            </option>
            <option value='1' type='number'>
              February
            </option>
            <option value='2' type='number'>
              March
            </option>
            <option value='3' type='number'>
              April
            </option>
            <option value='4' type='number'>
              May
            </option>
            <option value='5' type='number'>
              June
            </option>
            <option value='6' type='number'>
              July
            </option>
            <option value='7' type='number'>
              August
            </option>
            <option value='8' type='number'>
              September
            </option>
            <option value='9' type='number'>
              October
            </option>
            <option value='10' type='number'>
              November
            </option>
            <option value='11' type='number'>
              December
            </option>
          </select>
        </div>
        <div className={styles.form__selectGroup}>
          <select className={styles.form__select} name='expiryYear'>
            <option value='2020' type='number'>
              2020
            </option>
            <option value='2021' type='number'>
              2021
            </option>
            <option value='2022' type='number'>
              2022
            </option>
            <option value='2023' type='number'>
              2023
            </option>
            <option value='2024' type='number'>
              2024
            </option>
            <option value='2025' type='number'>
              2025
            </option>
            <option value='2026' type='number'>
              2026
            </option>
            <option value='2027' type='number'>
              2027
            </option>
            <option value='2028' type='number'>
              2028
            </option>
            <option value='2029' type='number'>
              2029
            </option>
            <option value='2030' type='number'>
              2030
            </option>
          </select>
        </div>
        <div className={[styles.form__cvcGroup].join(' ')}>
          <input type='text' className={[styles.form__input, styles.form__input__cvc].join(' ')} name='cvc' id='CVC' placeholder='CVC' minLength='3' maxLength='3' />
        </div>
      </div>

      <Button content='Submit' type='submit' />
    </form>
  );
};

export default FormAmEX;

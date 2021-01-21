import React, { useContext } from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';

const FormAddress = () => {
  const context = useContext(AppContext);
  const { handleFormAddressFields, handleOrderFormCompletion } = context;
  return (
    <>
      <div className={[styles.form__group, styles.form__group__short].join(' ')}>
        <input
          type='text'
          className={styles.form__input}
          name='firstName'
          id='firstName'
          placeholder='First name'
          onChange={(e) => {
            handleFormAddressFields(e);
            handleOrderFormCompletion();
          }}
        />
        <label className={styles.form__label} htmlFor='firstName'>
          First name
        </label>
      </div>
      <div className={[styles.form__group, styles.form__group__short].join(' ')}>
        <input
          type='text'
          className={styles.form__input}
          name='lastName'
          id='lastName'
          placeholder='Last name'
          onChange={(e) => {
            handleFormAddressFields(e);
            handleOrderFormCompletion();
          }}
        />
        <label className={styles.form__label} htmlFor='lastName'>
          Last name
        </label>
      </div>
      <div className={styles.form__group}>
        <input
          type='email'
          className={styles.form__input}
          name='email'
          id='email'
          placeholder='Email'
          onChange={(e) => {
            handleFormAddressFields(e);
            handleOrderFormCompletion();
          }}
        />
        <label className={styles.form__label} htmlFor='email'>
          Email
        </label>
      </div>
      <div className={styles.form__group}>
        <input
          type='text'
          className={styles.form__input}
          name='phone'
          id='phone'
          maxLength='15'
          placeholder='Phone number'
          onChange={(e) => {
            handleFormAddressFields(e);
            handleOrderFormCompletion();
          }}
        />
        <label className={styles.form__label} htmlFor='phone'>
          Phone number
        </label>
      </div>
      <div className={styles.form__group}>
        <input
          type='text'
          className={styles.form__input}
          name='street'
          id='street'
          placeholder='Street'
          onChange={(e) => {
            handleFormAddressFields(e);
            handleOrderFormCompletion();
          }}
        />
        <label className={styles.form__label} htmlFor='Street'>
          Street
        </label>
      </div>
      <div className={styles.form__group}>
        <input
          type='text'
          className={styles.form__input}
          name='house'
          id='houseNr'
          placeholder='House number'
          onChange={(e) => {
            handleFormAddressFields(e);
            handleOrderFormCompletion();
          }}
        />
        <label className={styles.form__label} htmlFor='houseNr'>
          House number
        </label>
      </div>
      <div className={[styles.form__group, styles.form__group__short].join(' ')}>
        <input
          type='text'
          className={styles.form__input}
          name='zip'
          id='ZIP'
          placeholder='Postal Code'
          onChange={(e) => {
            handleFormAddressFields(e);
            handleOrderFormCompletion();
          }}
        />
        <label className={styles.form__label} htmlFor='ZIP'>
          Postal Code
        </label>
      </div>
      <div className={[styles.form__group, styles.form__group__short].join(' ')}>
        <input
          type='text'
          className={styles.form__input}
          name='city'
          id='city'
          placeholder='City'
          onChange={(e) => {
            handleFormAddressFields(e);
            handleOrderFormCompletion();
          }}
        />
        <label className={styles.form__label} htmlFor='city'>
          City
        </label>
      </div>
    </>
  );
};

export default FormAddress;

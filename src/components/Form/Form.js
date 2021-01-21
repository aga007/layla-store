import React from 'react';
import styles from './Form.module.scss';

const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
      }}
      className={styles.form}
    >
      <div className={styles.form__group}>
        <input className={[styles.form__input, styles.form__input__yellow].join(' ')} type='text' id='subscription-name' placeholder='Name' />
        <label className={styles.form__label} htmlFor='subscription-name'>
          Name
        </label>
      </div>
      <div className={styles.form__group}>
        <input className={[styles.form__input, styles.form__input__yellow].join(' ')} type='email' id='subscription-email' placeholder='Email' />
        <label className={styles.form__label} htmlFor='subscription-email'>
          Email
        </label>
      </div>

      <button className={styles.form__button}>Subscribe</button>
    </form>
  );
};

export default Form;

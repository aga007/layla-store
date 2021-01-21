import React, { useContext } from 'react';
import styles from './ProductPopup.module.scss';
import AppContext from '../../context';

const ProductSizes = () => {
  const context = useContext(AppContext);
  const { selectedProduct, handleProductSize } = context;

  return (
    <div className={styles.productPopup__selectContainer}>
      <label htmlFor='Size' className={styles.productPopup__selectLabel}>
        Size:
      </label>
      <ul className={styles.productPopup__radioBox} onChange={(e) => handleProductSize(e.target.value)}>
        {selectedProduct.sizes.map((size) => {
          return (
            <li className={styles.productPopup__radioGroup} key={size}>
              <input type='radio' className={styles.productPopup__radioInput} id={size} value={size} name='sizeOption' />
              <label htmlFor={size} className={styles.productPopup__radioLabel}>
                {size}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductSizes;

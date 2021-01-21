import styles from './ProductSizePopup.module.scss';
import React, { useContext } from 'react';
import ProductSizes from '../ProductPopup/ProductSizes';
import H3 from '../Heading/H4';
import ButtonYellow from '../Button/ButtonYellow';
import sprite from '../../assets/icons/symbol-defs.svg';
import AppContext from '../../context';

const ProductSizePopup = () => {
  const context = useContext(AppContext);
  const { closeProductSizePopup, handleCartOpen, addProductToCart, selectedProduct } = context;

  const controlFormSubmit = (e) => {
    e.preventDefault();
    const sizeInput = e.target.sizeOption.value;
    if (sizeInput) {
      addProductToCart(selectedProduct.id, 1, selectedProduct.size);
      closeProductSizePopup();
      handleCartOpen();
    } else {
      alert('Please select size');
    }
  };
  return (
    <div className={styles.productSizePopup}>
      <div className={styles.productSizePopup__container}>
        <svg className={styles.productSizePopup__close} onClick={closeProductSizePopup}>
          <use href={`${sprite}#icon-cross`} />
        </svg>
        <form onSubmit={(e) => controlFormSubmit(e)}>
          <H3 content='Select your size' extraClass='u-margin-top-medium u-margin-left-small' />
          <ProductSizes />
          <div className={styles.productSizePopup__button}>
            <ButtonYellow content='Add to cart' type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductSizePopup;

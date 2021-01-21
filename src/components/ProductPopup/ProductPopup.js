import React, { useContext } from 'react';
import styles from './ProductPopup.module.scss';
import H3 from '../Heading/H3';
import ButtonYellow from '../Button/ButtonYellow';
import ProductSizes from './ProductSizes';
import sprite from '../../assets/icons/symbol-defs.svg';
import AppContext from '../../context';

const ProductPopup = () => {
  const context = useContext(AppContext);
  const {
    addProductToCart,
    addCounter,
    handleCartOpen,
    selectedProduct,
    selectedProductSubtotal,
    handleCalculateSubtotal,
    handleProductQuantity,
    handleProductSize,
    closeProductPopup,
    carouselImgSelected,
    handleCarouselClick,
  } = context;

  const controlFormSubmit = (e) => {
    e.preventDefault();
    const quantityInput = Number(e.target.quantity.value);
    if (selectedProduct.sizes) {
      const sizeInput = e.target.sizeOption.value;
      if (sizeInput) {
        addProductToCart(selectedProduct.id, quantityInput, sizeInput);
        closeProductPopup();
        handleCartOpen();
      } else {
        alert('Please select size');
      }
    } else {
      addProductToCart(selectedProduct.id, quantityInput);
      closeProductPopup();
      handleCartOpen();
    }
  };
  return (
    <div className={styles.productPopup}>
      <div className={styles.productPopup__container}>
        <svg className={styles.productPopup__close} onClick={closeProductPopup}>
          <use href={`${sprite}#icon-cross`} />
        </svg>
        <div className={styles.productPopup__gallery}>
          <ul className={styles.productPopup__carousel}>
            {selectedProduct.images.map(({ url, alt }) => {
              return (
                <li
                  key={alt}
                  className={url === carouselImgSelected ? [styles.productPopup__carouselItem, styles.productPopup__carouselItem__active].join(' ') : styles.productPopup__carouselItem}
                  onClick={() => handleCarouselClick(url)}
                >
                  <img src={url} className={styles.productPopup__carouselItem__img} alt={alt} />
                </li>
              );
            })}
          </ul>
          <figure className={styles.productPopup__shape}>
            <img src={carouselImgSelected === '' ? selectedProduct.images[0].url : carouselImgSelected} className={styles.productPopup__img} alt='Img' />
          </figure>
        </div>

        <div className={styles.productPopup__details}>
          <H3 content={selectedProduct.name} extraClass='u-margin-top-medium u-margin-left-small' />

          <div className={styles.productPopup__detailsScroll}>
            <p className={styles.productPopup__description}>{selectedProduct.description}</p>
            <form name='productSelectionForm' className={styles.productPopup__form} onSubmit={controlFormSubmit}>
              {selectedProduct.sizes ? <ProductSizes /> : null}

              <div className={styles.productPopup__selectContainer}>
                <label htmlFor='quantity' className={styles.productPopup__selectLabel}>
                  Quantity:
                </label>
                <select
                  className={styles.productPopup__select}
                  defaultValue='1'
                  onChange={(e) => {
                    handleProductQuantity(e.target.value);
                    handleCalculateSubtotal();
                  }}
                  name='quantity'
                  id='quantity'
                >
                  <option value='1' type='number'>
                    1
                  </option>
                  <option value='2' type='number'>
                    2
                  </option>
                  <option value='3' type='number'>
                    3
                  </option>
                  <option value='4' type='number'>
                    4
                  </option>
                  <option value='5' type='number'>
                    5
                  </option>
                </select>
              </div>
              <div className={styles.productPopup__purchaseInfo}>
                <div className={styles.productPopup__priceBox}>
                  <p className={styles.productPopup__total}>{selectedProductSubtotal !== 0 ? selectedProductSubtotal : selectedProduct.price}€</p>
                  <p className={styles.productPopup__price}>{selectedProduct.price}€ / pc.</p>
                </div>
                <div className={styles.productPopup__button}>
                  <ButtonYellow content='Add to cart' type='submit' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;

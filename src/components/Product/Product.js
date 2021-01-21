import React, { useContext, useEffect } from 'react';
import styles from './Product.module.scss';
import ButtonYellow from '../Button/ButtonYellow';
import ButtonPink from '../Button/ButtonPink';
import ProductPopup from '../ProductPopup/ProductPopup';
import AppContext from '../../context';
import H4 from '../../components/Heading/H4';
import { shortenTxt } from '../../helperFunctions';

///import { products } from '../../data/localData/products';

const Product = ({ name, image, price, description, id, message }) => {
  const context = useContext(AppContext);
  const { products, addProductToCart, openProductPopup, openProductSizePopup, selectedProduct, handleCartOpen, handleProductSelection, addNotification } = context;
  const shortDesc = shortenTxt(description, 120);
  useEffect(() => {
    console.log(id);
    const item = products.filter((product) => product.id === id)[0];
    console.log(item);
    console.log(products);
  }, []);
  const handleAddingProduct = (id) => {
    const selectedItem = products.filter((product) => product.id === id)[0];
    if (selectedItem.sizes && selectedItem.sizes.length > 0) {
      openProductSizePopup();
    } else {
      addProductToCart(id, 1);
      handleCartOpen();
    }
  };

  return (
    <div className={styles.product}>
      <figure
        className={styles.product__shape}
        onClick={() => {
          handleProductSelection(id);
          openProductPopup();
        }}
      >
        <img src={image} className={styles.product__img} alt={name} />
        {message ? (
          <div className={message.length < 6 ? styles.product__messageBox : [styles.product__messageBox, styles.product__messageBox__big].join(' ')}>
            <h6 className={styles.product__message}>{message}</h6>
          </div>
        ) : (
          ''
        )}
        <div className={styles.product__gradient}></div>
      </figure>
      <H4 content={name} extraClass='u-margin-top-medium u-margin-left-small' />
      <p className={styles.product__description}>{shortDesc}</p>
      <div className={styles.product__price}>{price}€</div>
      <div className={styles.product__buttons}>
        <ButtonYellow
          content='Add to cart'
          fn={() => {
            handleProductSelection(id);
            handleAddingProduct(id);
          }}
        />
        <ButtonPink
          content='Details'
          fn={() => {
            handleProductSelection(id);
            openProductPopup();
          }}
        />
      </div>
    </div>
  );
};

export default Product;

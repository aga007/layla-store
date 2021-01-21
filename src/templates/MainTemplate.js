import React, { useContext } from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../components/Footer/Footer';
import ProductPopup from '../components/ProductPopup/ProductPopup';
import ProductSizePopup from '../components/ProductSizePopup/ProductSizePopup';
import OrderPopup from '../components/OrderPopup/OrderPopup';
import Notifications from '../components/Notifications/Notifications';
import styles from './MainTemplate.module.scss';
import AppContext from '../context';

const MainTemplate = ({ children }) => {
  const context = useContext(AppContext);
  const { isProductPopupOpen, isProductSizePopupOpen, isOrderPopupOpen, notifications } = context;
  return (
    <>
      <div className={styles.page}>
        {notifications.length > 0 ? <Notifications /> : null}
        <Navigation />
        <main>{children}</main>
      </div>
      <Footer />
      {isProductPopupOpen ? <ProductPopup /> : ''}
      {isProductSizePopupOpen ? <ProductSizePopup /> : ''}
      {isOrderPopupOpen ? <OrderPopup /> : ''}
    </>
  );
};

export default MainTemplate;

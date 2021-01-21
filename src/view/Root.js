import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { Link, Element, Events, animateScroll as Scroll, scrollSpy, scroller } from 'react-scroll';
import MainTemplate from '../templates/MainTemplate';
import { routes } from '../routes';
import Home from './Home/Home';
import Heels from './Shoes/Heels';
import Sandals from './Shoes/Sandals';
import Boots from './Shoes/Boots';
import Sneakers from './Shoes/Sneakers';
import Outlet from './Outlet/Outlet';
import Accessories from './Accessories/Accessories';
import Coats from './Clothing/Coats';
import Dresses from './Clothing/Dresses';
import Jeans from './Clothing/Jeans';
import Order from '../components/Order/Order';
import AppContext from '../context';
import { products } from '../data/localData/products';
import { client } from '../contentfulConfig/contentfulConfig';

const Root = () => {
  const [counter, setCounter] = useState(0);
  const [isShoesMenuActive, setShoesMenuVisiblity] = useState(false);
  const [isClothsMenuActive, setClothsMenuVisibility] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isOrderPopupOpen, setOrderPopup] = useState(false);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [deliveryType, setDeliveryType] = useState('');
  const [paymentFee, setPaymentFee] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isOrderSummaryVisible, setOrderSummaryVisibility] = useState(false);
  const [isDeliveryOptionsVisible, setDeliveryOptionsVisibility] = useState(false);
  const [isPaymentOptionsVisible, setPaymentOptionsVisibility] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMobMenuActive, setMobMenuVisibility] = useState(false);
  const [isMobIconVisible, setMobIconVisibility] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [carouselImgSelected, setCarouselImg] = useState('');
  const [isProductPopupOpen, setProductPopup] = useState(false);
  const [isProductSizePopupOpen, setProductSizePopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedProductSubtotal, setSelectedProductSubtotal] = useState(0);
  const [isPaymentActive, setPaymentActive] = useState(false);
  const [isPaymentSuccessful, setPaymentSuccess] = useState(false);
  const [isPaymentError, setPaymentError] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);
  const [orderFormData, setOrderFormData] = useState({});
  const [notifications, setNotifications] = useState([{ txt: 'test', id: 90232043, type: 'error' }]);
  const [products, setProducts] = useState([]);

  const setContentfulData = (data) => {
    if (data.length !== 0) {
      const productsData = data.map((item) => {
        const name = item.fields.name;
        const category = item.fields.category;
        const description = item.fields.description;
        const price = item.fields.price;
        const quantity = item.fields.quantity;
        const size = item.fields.size;
        const sizes = item.fields.sizes;
        const message = item.fields.message;
        const images = item.fields.images.map((image) => {
          return {
            url: image.fields.file.url,
            alt: image.fields.title,
          };
        });
        const id = item.sys.id;

        const product = {
          id,
          name,
          category,
          description,
          price,
          quantity,
          size,
          sizes,
          message,
          images,
          id,
        };
        return product;
      });

      console.log(productsData);
      setProducts([...productsData]);
    }
  };

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: 'product',
      })
      .then((res) => setContentfulData(res.items))
      //.then((res) => console.log(res.items))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getContentfulData();
  }, []);

  // ORDER FORM FIELDS

  const openOrderPopup = () => {
    setOrderPopup(true);
    setOrderSummaryVisibility(true);
  };

  const closeOrderPopup = () => {
    setOrderPopup(false);
    setPaymentFee(0);
    setDeliveryCost(0);
    setPaymentMethod('');
    setDeliveryType('');
    setPaymentActive(false);
    setPaymentSuccess(false);
    setPaymentError(false);
  };

  const [orderFormAddress, setOrderFormAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    house: '',
    zip: '',
    city: '',
  });
  const [isOrderFormCompleted, setOrderFormCompletion] = useState(false);

  const handleFormAddressFields = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let newAddress = { ...orderFormAddress };
    newAddress[name] = value;
    setOrderFormAddress(newAddress);
  };

  const handleOrderFormCompletion = () => {
    if (
      orderFormAddress.firstName &&
      orderFormAddress.lastName &&
      orderFormAddress.email &&
      orderFormAddress.phone &&
      orderFormAddress.street &&
      orderFormAddress.house &&
      orderFormAddress.zip &&
      orderFormAddress.city
    ) {
      addNotification("You're good to go!", 'success');
      setOrderFormCompletion(true);
    } else {
      setOrderFormCompletion(false);
    }
  };

  const handleOrderFormData = (formData) => {
    setOrderFormData({ ...formData });
  };

  // SHOW DETAILS MANAGER

  const handleOrderDetailsVisibilityManager = (option) => {
    // orderSummary, deliveryOptions, paymentOptions,
    switch (option) {
      case 'orderSummary':
        setOrderSummaryVisibility(!isOrderSummaryVisible);
        setDeliveryOptionsVisibility(false);
        setPaymentOptionsVisibility(false);
        break;
      case 'deliveryOptions':
        setDeliveryOptionsVisibility(!isDeliveryOptionsVisible);
        setOrderSummaryVisibility(false);
        setPaymentOptionsVisibility(false);
        break;
      case 'paymentOptions':
        setPaymentOptionsVisibility(!isPaymentOptionsVisible);
        setDeliveryOptionsVisibility(false);
        setOrderSummaryVisibility(false);
        break;
      default:
        console.log('Upps.. Something went wrong!');
    }
  };

  ///////////////////
  ///// CART ///////
  //////////////////
  const addProductToCart = (id, quantity, size = '-') => {
    const copyOfCart = [...cart];

    const filterProduct = products.filter((product) => product.id === id)[0];
    const newCartItem = {
      price: filterProduct.price,
      name: filterProduct.name,
      images: filterProduct.images,
      id: `${id}#${size}`,
      size: size,
      quantity: quantity,
      productId: id,
    };

    const cartProduct = copyOfCart.filter((product) => product.id === `${id}#${size}`);
    if (cartProduct.length > 0) {
      cartProduct[0].quantity += quantity;

      setCart([...new Set([...copyOfCart])]);
    } else {
      setCart([...new Set([...copyOfCart, newCartItem])]);
    }
    addNotification('Product successfully added to cart. ', 'success');
  };

  const removeProductFromCart = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart([...new Set([...filteredCart])]);
    addNotification('Product successfully removed from the cart.', 'success');
  };

  const emptyCart = () => {
    setCart([]);
  };

  // const addCounter = () => {
  //   setCounter(counter + 1);
  // };

  // const minusCounter = () => {
  //   setCounter(counter - 1);
  // };

  const handleCalculateCartTotals = () => {
    let total = 0;

    cart.forEach((item) => {
      total = total + item.price * item.quantity;
    });

    setCartTotal(total);
  };

  // const handleDeliveryCost = (cost) => {
  //   setDeliveryCost(cost);
  // };

  // const handleDeliveryType = (type) => {
  //   setDeliveryType(type);
  // };

  // const handlePaymentFee = (fee) => {
  //   setPaymentFee(fee);
  // };

  // const handlePaymentMethod = (paymentMethod) => {
  //   setPaymentMethod(paymentMethod);
  // };

  const handleExtraServicesManager = (serviceType, serviceValue) => {
    switch (serviceType) {
      case 'deliveryType':
        setDeliveryType(serviceValue);
        break;
      case 'deliveryCost':
        setDeliveryCost(serviceValue);
        break;
      case 'paymentType':
        {
          setPaymentMethod(serviceValue);
        }
        break;
      case 'paymentFee':
        setPaymentFee(serviceValue);
        break;
      default:
        console.log('Something went wrong');
    }
  };

  // const handleAddToCartTotal = (expense) => {
  //   let total = cartTotal + expense;
  //   setCartTotal(total);
  // };

  const handleCartQuantity = () => {
    let quantity = 0;
    cart.map((item) => {
      quantity += item.quantity;
    });

    setCounter(quantity);
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  useEffect(() => {
    handleCalculateCartTotals();
    handleCartQuantity();
  }, [cart]);

  // PAYMENT

  const showPaymentPage = () => {
    setPaymentActive(true);
  };

  const closePaymentPage = () => {
    setPaymentActive(false);
    setPaymentError(false);
    setPaymentSuccess(false);
    setOrderPopup(false);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setPaymentActive(false);
    addNotification('We received your payment!', 'success');
  };

  const handlePaymentError = () => {
    setPaymentError(true);
    setPaymentActive(false);
    addNotification('Something went wrong. Please try again.', 'error');
  };

  const generateOrderNumber = () => {
    const randomNr = Math.round(Math.random() * 100000000000);
    setOrderNumber(randomNr);
  };

  // PRODUCT DETAILS

  const handleProductSelection = (id) => {
    const selectedItem = products.filter((product) => product.id === id);
    setSelectedProduct(selectedItem[0]);
  };

  const handleProductQuantity = (quantity) => {
    let updatedProduct = selectedProduct;
    updatedProduct.quantity = quantity;
    setSelectedProduct(updatedProduct);
  };

  const handleProductSize = (size) => {
    let updatedProduct = selectedProduct;
    updatedProduct.size = size;
    setSelectedProduct(updatedProduct);
  };

  const openProductSizePopup = () => {
    setProductSizePopup(true);
  };

  const closeProductSizePopup = () => {
    setProductSizePopup(false);
    setSelectedProduct({});
  };

  const handleCalculateSubtotal = () => {
    const subtotal = selectedProduct.quantity * selectedProduct.price;
    setSelectedProductSubtotal(subtotal);
  };

  const openProductPopup = () => {
    setProductPopup(true);
  };

  const closeProductPopup = () => {
    setProductPopup(false);
    setSelectedProduct({});
    setCarouselImg('');
    setSelectedProductSubtotal(0);
  };

  const handleCarouselClick = (url) => {
    setCarouselImg(url);
  };

  ///////////////////
  ///// MENU ///////
  //////////////////

  const handleMobIconVisibility = () => {
    setMobIconVisibility(!isMobIconVisible);
  };

  const handleMobMenuVisibility = () => {
    setMobMenuVisibility(!isMobMenuActive);
  };

  const handleShoesMenuVisibility = () => {
    setClothsMenuVisibility(false);
    setShoesMenuVisiblity(!isShoesMenuActive);
  };

  const handleClothsMenuVisibility = () => {
    setShoesMenuVisiblity(false);
    setClothsMenuVisibility(!isClothsMenuActive);
  };

  const navRef = useRef();

  const handleClick = (e) => {
    if (navRef.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setClothsMenuVisibility(false);
    setShoesMenuVisiblity(false);
    setMobMenuVisibility(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('click', handleClick);

    // return function to be called when unmounted
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleScreenWidth = () => {
    let w = parseInt(window.innerWidth);
    setScreenWidth(w);
  };

  window.addEventListener('resize', handleScreenWidth);
  window.addEventListener('load', handleScreenWidth);

  useEffect(() => {
    if (screenWidth <= 900) {
      setMobIconVisibility(true);
    } else {
      setMobIconVisibility(false);
    }
  }, [screenWidth]);

  const handleScrollPosition = () => {
    let positionY = window.pageYOffset;
    if (screenWidth >= 900) {
      setScrollPosition(positionY);
    }
  };

  window.addEventListener('scroll', handleScrollPosition);

  useEffect(() => {
    //  scrollPosition < 100 ? setMobIconVisibility(false) : setMobIconVisibility(true);
    if (scrollPosition < 100) {
      setMobIconVisibility(false);
    } else {
      setMobIconVisibility(true);
      setClothsMenuVisibility(false);
      setShoesMenuVisiblity(false);
      setMobMenuVisibility(false);
    }
  }, [scrollPosition]);

  ///////////////////////////
  /// PUSH NOTIFICATIONS ////
  ///////////////////////////

  const removeNotification = (id) => {
    const copyOfNotifications = notifications;
    const filteredNotifications = copyOfNotifications.filter((item) => item.id !== id);
    setNotifications([...filteredNotifications]);
  };

  const addNotification = (text, type) => {
    let copyOfNotifications = notifications;
    const newNotification = {
      txt: text,
      id: Math.floor(Math.random() * 100000),
      type: type,
    };

    setNotifications([...copyOfNotifications, newNotification]);
  };

  //////////////////////

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          isShoesMenuActive,
          cartTotal,
          isCartOpen,
          handleCartOpen,
          handleCartClose,
          handleMobMenuVisibility,
          isMobMenuActive,
          handleMobIconVisibility,
          isMobIconVisible,
          handleShoesMenuVisibility,
          isClothsMenuActive,
          handleClothsMenuVisibility,
          // addCounter,
          counter,
          //  minusCounter,
          cart,
          addProductToCart,
          removeProductFromCart,
          navRef,
          openProductPopup,
          closeProductPopup,
          isProductPopupOpen,
          openProductSizePopup,
          closeProductSizePopup,
          isProductSizePopupOpen,
          handleProductSelection,
          handleProductQuantity,
          handleCalculateSubtotal,
          handleExtraServicesManager,
          deliveryCost,
          deliveryType,
          paymentFee,
          paymentMethod,
          handleProductSize,
          selectedProduct,
          selectedProductSubtotal,
          handleCarouselClick,
          carouselImgSelected,
          handleFormAddressFields,
          handleOrderFormCompletion,
          openOrderPopup,
          closeOrderPopup,
          handleOrderDetailsVisibilityManager,
          isOrderSummaryVisible,
          isDeliveryOptionsVisible,
          isPaymentOptionsVisible,
          isOrderPopupOpen,
          isOrderFormCompleted,
          showPaymentPage,
          closePaymentPage,
          handlePaymentSuccess,
          handlePaymentError,
          isPaymentActive,
          isPaymentSuccessful,
          isPaymentError,
          generateOrderNumber,
          orderNumber,
          handleOrderFormData,
          orderFormData,
          emptyCart,
          notifications,
          addNotification,
          setNotifications,
          removeNotification,
          products,
        }}
      >
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.heels} component={Heels} />
            <Route path={routes.boots} component={Boots} />
            <Route path={routes.sandals} component={Sandals} />
            <Route path={routes.sneakers} component={Sneakers} />
            <Route path={routes.coats} component={Coats} />
            <Route path={routes.dresses} component={Dresses} />
            <Route path={routes.jeans} component={Jeans} />
            <Route path={routes.accessories} component={Accessories} />
            <Route path={routes.outlet} component={Outlet} />
            <Route path={routes.order} component={Order} />
          </Switch>
        </MainTemplate>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default Root;

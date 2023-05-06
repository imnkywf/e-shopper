import React, { Fragment, useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const username = localStorage.getItem('user_name');
      const { data } = await axios.get(`http://localhost:5000/api/getuserscart?username=${username}`);
      setCartItems(data.cart);
    };

    getCart();
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Fragment>
      <h1>Your Shopping Cart</h1>
      <div className="wrapper"></div>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li className="cart-item" key={item.good_name}>
            <div className="cart-item-details">
              <img src={item.fullUrl} alt={item.good_name} />
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.good_name}</h3>
                <p className="cart-item-price">${item.price * item.quantity}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className="pay-button">${totalPrice}</button>
    </Fragment>
  );
}


import React, { useContext } from "react";
import "./CartItem.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import {Link }from "react-router-dom"
const CartItem = () => {
  const { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  const handleIncrement = (itemId) => {
    addToCart(itemId);
  };

  const handleDecrement = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="CartItem">
      <div className="cart-item-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-item-format cart-item-format-main">
                <img src={e.image} className="carticon-producticon" alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="cartitems-quantity">
                  <button onClick={() => handleDecrement(e.id)}>-</button>
                  <span>{cartItems[e.id]}</span>
                  <button onClick={() => handleIncrement(e.id)}>+</button>
                </div>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-promocode">
          <p>Have a promo Code?, Enter it here</p>
        </div>
        <div className="cartitems-promobox">
          <input type="text" placeholder="Promo code" />
          <button>Submit</button>
        </div>
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <Link to={"/paymentspage"}> <button>Checkout Now</button></Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

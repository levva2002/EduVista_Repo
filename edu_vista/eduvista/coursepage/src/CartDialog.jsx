import React from "react";
import "./CartDialog.css";

function CartDialog({ cartItems, toggleCart }) {
  return (
    <div className="cart-dialog">
      <div className="cart-header">
        <h2>Cart</h2>
        <button className="close-button" onClick={toggleCart}>Close</button>
      </div>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
            <p>Level: {item.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartDialog;

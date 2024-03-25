// OrderItem.js

import React from 'react';

const OrderItem = ({ order, onDelete }) => {
  return (
    <div className="order-item">
      <div>{order.courseName}</div>
      <div>${order.price}</div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default OrderItem;

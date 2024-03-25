// OrderPage.js

import React, { useState } from 'react';
import OrderItem from './OrderItem';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  const handleOrderDelete = (orderId) => {
    // Implement delete order functionality here
    // You may need to use some kind of backend API to delete the order
    // For now, let's just filter out the order from the state
    setOrders(orders.filter(order => order.id !== orderId));
  };

  // Function to simulate fetching orders (replace with actual API call)
  const fetchOrders = () => {
    // Simulate fetching orders from a backend server
    const dummyOrders = [
      { id: 1, courseName: 'React Fundamentals', price: 49.99 },
      { id: 2, courseName: 'Node.js Basics', price: 59.99 },
      { id: 3, courseName: 'JavaScript Advanced', price: 69.99 },
    ];

    setOrders(dummyOrders);
  };

  return (
    <div>
      <h2>Order Page</h2>
      <button onClick={fetchOrders}>Fetch Orders</button>
      <div className="orders-list">
        {orders.map(order => (
          <OrderItem
            key={order.id}
            order={order}
            onDelete={() => handleOrderDelete(order.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;

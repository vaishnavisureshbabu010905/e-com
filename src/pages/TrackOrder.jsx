import React, { useState } from "react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);

  const handleTrack = () => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const foundOrder = storedOrders.find(o => o.id === orderId);
    setOrder(foundOrder || null);
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>Track My Order</h2>
      <p>Enter your order ID to track your order status.</p>
      <input
        type="text"
        value={orderId}
        onChange={e => setOrderId(e.target.value)}
        placeholder="Order ID"
        style={{marginRight:8}}
      />
      <button onClick={handleTrack}>Track</button>
      {order ? (
        <div style={{marginTop:16}}>
          <strong>Order ID:</strong> {order.id}<br />
          <strong>Date:</strong> {new Date(order.date).toLocaleDateString()}<br />
          <strong>Total:</strong> ${order.total}.00<br />
          <strong>Status:</strong> {order.status}<br />
          <strong>Items:</strong>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>{item.name} - Qty: {item.qty}</li>
            ))}
          </ul>
        </div>
      ) : orderId && (
        <div style={{marginTop:16}}>
          <strong>Order not found.</strong>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;

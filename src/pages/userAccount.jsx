import React, { useState, useEffect } from "react";


const UserAccount = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h2>User Account</h2>
      <div style={{marginTop:20}}>
        <h4>Profile</h4>
        <p>Name: John Doe</p>
        <p>Email: johndoe@email.com</p>
        <h4 style={{marginTop:20}}>My Orders</h4>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} style={{border: '1px solid #ccc', padding: 10, marginBottom: 10}}>
              <p>Order ID: {order.id}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p>Total: ${order.total}.00</p>
              <p>Status: {order.status}</p>
              <h5>Items:</h5>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>{item.name} - Qty: {item.qty} - ${item.price * item.qty}.00</li>
                ))}
              </ul>
            </div>
          ))
        )}
        <h4 style={{marginTop:20}}>Settings</h4>
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default UserAccount;

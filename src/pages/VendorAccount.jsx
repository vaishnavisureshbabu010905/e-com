import React, { useState, useEffect } from "react";


const VendorAccount = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const totalSales = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div style={{ padding: 32 }}>
      <h2>Vendor Account</h2>
      <div style={{marginTop:20}}>
        <h4>Shop Name: John's Store</h4>
        <h4 style={{marginTop:20}}>My Products</h4>
        <ul>
          <li>Running Shoes - 10 in stock</li>
          <li>Classic Watch - 5 in stock</li>
        </ul>
        <h4 style={{marginTop:20}}>Sales</h4>
        <p>Total Sales: ${totalSales}.00</p>
        <h5>Recent Orders:</h5>
        {orders.length === 0 ? (
          <p>No sales yet.</p>
        ) : (
          orders.slice(-5).reverse().map((order) => (
            <div key={order.id} style={{border: '1px solid #ccc', padding: 10, marginBottom: 10}}>
              <p>Order ID: {order.id}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p>Total: ${order.total}.00</p>
              <p>Status: {order.status}</p>
            </div>
          ))
        )}
        <button>Update Shop Info</button>
      </div>
    </div>
  );
};

export default VendorAccount;

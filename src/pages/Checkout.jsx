import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_..."); // Replace with your test publishable key

const CheckoutForm = ({ cartItems, clearCart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    // For demo, simulate payment success
    setTimeout(() => {
      setMessage("Payment successful!");
      clearCart();
      setIsProcessing(false);
    }, 2000);

    // In real app, create payment intent on backend and confirm here
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Checkout</h2>
      <div>
        <h3>Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id}>
            {item.name} x {item.qty} = ${item.price * item.qty}
          </div>
        ))}
        <h4>Total: ${total}</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "20px 0" }}>
          <CardElement />
        </div>
        <button disabled={!stripe || isProcessing} type="submit">
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

function Checkout({ cartItems, clearCart }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm cartItems={cartItems} clearCart={clearCart} />
    </Elements>
  );
}

export default Checkout;
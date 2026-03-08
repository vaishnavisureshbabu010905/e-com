import React from "react"
import "./style.css"

const Cart = ({ cartItems, addToCart, decreaseQty, removeItem, clearCart }) => {

  const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price, 0)

  return (

    <section className="cart-items">

      <div className="container d_flex">

        <div className="cart-details">

          {cartItems.length === 0 && <h1 className="no-items product">No Items in Cart</h1>}

          {cartItems.map((item) => {

            const productQty = item.price * item.qty

            return (

              <div className="cart-list product d_flex" key={item.id}>

                <div className="img">

                  <img src={item.cover} alt="" />

                </div>

                <div className="cart-details">

                  <h3>{item.name}</h3>

                  <h4>

                    ${item.price}.00 * {item.qty}

                    <span>${productQty}.00</span>

                  </h4>

                </div>

                <div className="cart-items-function">

                  <div className="removeCart">

                    <button className="removeCart" onClick={() => removeItem(item)}>

                      <i className="fa-solid fa-xmark"></i>

                    </button>

                  </div>

                  <div className="cartControl d_flex">

                    <button className="incCart" onClick={() => addToCart(item)}>

                      <i className="fa-solid fa-plus"></i>

                    </button>

                    <span className="qty">{item.qty}</span>

                    <button className="desCart" onClick={() => decreaseQty(item)}>

                      <i className="fa-solid fa-minus"></i>

                    </button>

                  </div>

                </div>

                <div className="cart-item-price"></div>

              </div>

            )

          })}

        </div>


        <div className="cart-total product">
          <h2>Cart Summary</h2>
          <div className="d_flex">
            <h4>Total Price :</h4>
            <h3>${totalPrice}.00</h3>
          </div>
          <button className="checkout-btn" onClick={() => {
            if (cartItems.length > 0) {
              const orderId = Date.now().toString();
              const order = {
                id: orderId,
                items: cartItems,
                total: totalPrice,
                date: new Date().toISOString(),
                status: 'Delivered'
              };
              const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
              existingOrders.push(order);
              localStorage.setItem('orders', JSON.stringify(existingOrders));
              // Clear cart
              clearCart();
              localStorage.setItem('cartItems', JSON.stringify([]));
              window.location.href='/payment';
            }
          }}>
            Proceed to Checkout
          </button>
        </div>

      </div>

    </section>

  )

}

export default Cart
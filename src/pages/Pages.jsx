import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import Home from "../components/MainPage/Home"

import Shop from "../components/shops/Shop"

import Cart from "../common/Cart/Cart"

import Header from "../common/header/Header"

import Footer from "../common/footer/Footer"

import UserAccount from "./userAccount"

import VendorAccount from "./VendorAccount"

import TrackOrder from "./TrackOrder"

const Pages = () => {

  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {

    const exist = cartItems.find((item) => item.id === product.id)

    if (exist) {

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, qty: exist.qty + 1 }
            : item
        )
      )

    } else {

      setCartItems([...cartItems, { ...product, qty: 1 }])

    }

  }

  const decreaseQty = (product) => {
    const exist = cartItems.find((item) => item.id === product.id)
    if (exist && exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      )
    }
  }

  const removeItem = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id))
  }

  const clearCart = () => {
    setCartItems([]);
  }

  return (

    <>

      <Header CartItem={cartItems} />

      <Switch>

        <Route exact path="/">
          <Home addToCart={addToCart} />
        </Route>

        <Route path="/cart">
          <Cart cartItems={cartItems} addToCart={addToCart} decreaseQty={decreaseQty} removeItem={removeItem} clearCart={clearCart} />
        </Route>

        <Route path="/payment">
          <div style={{padding:40, textAlign:'center'}}>
            <h2>Payment Gateway (Demo)</h2>
            <p>Thank you for your purchase! Your payment was successful.</p>
            <a href="/">Return to Home</a>
          </div>
        </Route>

        <Route path="/user-account" component={UserAccount} />

        <Route path="/vendor-account" component={VendorAccount} />

        <Route path="/track-order" component={TrackOrder} />

        <Route path="/:category" render={() => <Shop addToCart={addToCart} />} />

      </Switch>

      <Footer />

    </>

  )
}

export default Pages

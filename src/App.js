import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Pages from "./pages/Pages";
import UserAccount from "./pages/userAccount";
import VendorAccount from "./pages/VendorAccount";
import TrackOrder from "./pages/TrackOrder";
import Contact from "./pages/Contact";

function App() {

  return (
    <Router>

      <Switch>


        <Route exact path="/" component={Pages} />
        <Route path="/pages" component={Pages} />
        <Route path="/shop" component={Pages} />
        <Route path="/cart" component={Pages} />
        <Route path="/payment" component={Pages} />
        <Route path="/:category" component={Pages} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/user" component={UserAccount} />
        <Route path="/vendor" component={VendorAccount} />
        <Route path="/track" component={TrackOrder} />
        <Route path="/contact" component={Contact} />
      </Switch>

    </Router>
  );
}

export default App;
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/HomepageComponent/homepageComponent";
import ShopComponent from "./pages/shop/ShopComponent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

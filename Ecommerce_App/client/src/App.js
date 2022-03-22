import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main'
import ShoppingCart from './views/ShoppingCart'
import CreateProduct from './views/CreateProduct'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
      <Main/>
      </Route>
      <Route path="/shoppingcart">
          <ShoppingCart />
        </Route>
        <Route path="/createproduct">
          <CreateProduct />
        </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;

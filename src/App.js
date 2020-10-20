import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Signin from './pages/sign-register/sign-in/sign-in.component';
import Register from './pages/sign-register/register/register.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={Signin} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
}

export default App;

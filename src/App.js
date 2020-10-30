import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Signin from './pages/sign-register/sign-in/sign-in.component';
import Register from './pages/sign-register/register/register.component';

import { auth, createUserProfileDocument } from './utils/firebase/firebase.utils';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    console.log("componentDidMount")

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snpt => {
          console.log("snpt :" ,snpt.data());

          this.setState(
            { 
              currentUser: {
                id: snpt.id,
                ...snpt.data()
              } 
          }, 
          () => {
            console.log("app state : ", this.state);
          }
          );
        });

      } else {
        this.setState({currentUser: null})
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={Signin} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;

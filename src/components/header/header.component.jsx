import React from 'react'
import { Link } from 'react-router-dom';

import { auth } from '../../utils/firebase/firebase.utils';

import {ReactComponent as Logo } from '../../assets/img/b-logo.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="menu-items">
                <Link className="items" to="/shop">Shop</Link>
                <Link className="items" to="/contact">Contact</Link>
                {currentUser ? (
                    <div className="items" onClick={() => auth.signOut()}>Sign Out</div>
                ) : (
                    <Link className="items" to="/sign-in">Sign In</Link>                    
                )}
            </div>
        </div>
    )
}

export default Header;

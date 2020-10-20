import React from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as Logo } from '../../assets/img/b-logo.svg';

import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="menu-items">
                <Link className="items" to="">Shop</Link>
                <Link className="items" to="">Shop</Link>
                <Link className="items" to="">Shop</Link>
                <Link className="items" to="">Shop</Link>
            </div>
        </div>
    )
}

export default Header;

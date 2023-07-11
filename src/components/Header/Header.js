import React from 'react';
import Logo from '../../../src/images/companyLogo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img style={{width:'10%'}} src={Logo} alt='company-logo'/>
            <ul className='nav-items'>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/order">Orders</a></li>
                <li><a href="/inventory"> Inventory</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;
import React from 'react';
import './Header.css';
import headerImg from '../../images/bg-header-desktop.svg';

const Header = () => {
    return (
        <header>
            <img src={headerImg} alt="header"/>
        </header>
    )
}


export default Header;
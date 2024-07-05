import React from 'react';
import './Header.css'
import Logo from './images/header-logo.png'
import Languages from './images/language.png'


const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <div className="header__content">
                    <div className="header__content-logo">
                        <a href="#Header">
                            <img src={Logo} alt="logo"/>
                        </a>
                    </div>
                    <div className="header__content-info">
                        <a href="#">Обо мне</a>
                        <a href="#">Методическое пособие</a>
                        <a href="#useful">Статьи</a>
                        <a href="#Road">Тест</a>
                    </div>
                    <div className="header__content-language">
                        <a href="">
                            <img src={Languages} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
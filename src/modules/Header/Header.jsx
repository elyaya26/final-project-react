import React, {useEffect} from 'react';
import './Header.css'
import Logo from './images/header-logo.png'
import Languages from './images/language.png'
import Instructor from "../Instructor/Instructor";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Header = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="Header" id='Header'>
            <div className="container">
                <div className="header__content">
                    <div className="header__content-logo" data-aos="fade-down">
                        <a href="#">
                            <img src={Logo} alt="logo"/>
                        </a>
                    </div>
                    <div className="header__content-info" data-aos="fade-down">
                        <a href="#instructor">Обо мне</a>
                        <a href="#rules">Методическое пособие</a>
                        <a href="#useful">Статьи</a>
                        <a href="#road">Тест</a>
                    </div>
                    <div className="header__content-language" data-aos="fade-down">
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
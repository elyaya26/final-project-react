// // src/modules/Footer/Footer.jsx
// import React from 'react';
// import './Footer.css';
// import instagramIcon from '../Footer/images/inst.png'
// import telegramIcon from './images/telegr.png'
// import whatsappIcon from '../Road/images/whatsapp.png'
//
//
//
//
// const Footer = () => {
//     return (
//         <footer className='footer'>
//             <div className='footer__icons'>
//                 <img src={instagramIcon} alt="Instagram" />
//                 <img src={whatsappIcon} alt="WhatsApp" />
//                 <img src={telegramIcon} alt="Telegram" />
//             </div>
//             <div className='footer__title'>
//                 ЖАКШЫ ЖОЛ
//             </div>
//             <div className='footer__contact'>
//                 <p>0552 209 809</p>
//                 <p>0552 209 809</p>
//             </div>
//         </footer>
//     );
// };
//
// export default Footer;



import React from 'react';
import './Footer.css';
import instagramIcon from '../Footer/images/inst.png'
import telegramIcon from './images/telegr.png'
import whatsappIcon from '../Road/images/whatsapp.png'
import phoneIcon from '../Road/images/Phone.png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappIcon} alt="WhatsApp" />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram" />
                </a>
            </div>
            <div className="footer__brand">
                ЖАКШЫ ЖОЛ
            </div>
            <div className="footer__contacts">
                <div className="footer__phone">
                    <img src={phoneIcon} alt="Phone" />
                    <p>0552 209 809</p>
                </div>
                <div className="footer__phone">
                    <img src={phoneIcon} alt="Phone" />
                    <p>0552 209 809</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import './Lessons.css'
import whatsappLogo from './Images/whatsapp-logo.png'
import phone from './Images/phone.png'
import car from './Images/lessons-car.png'
import Time from './Images/Time.png'
import mail from './Images/mail.png'

const Lessons = () => {
    return (
        <div className="Lessons">
            <div className="container">
                <div className="lessons__content">
                    <div className="lessons__content-title">
                        <h1>Персональные уроки по вождению</h1>
                        <p className='lessons__title-practic'>
                            Практические занятия дают 80% результата в обучении. Обучайтесь правильно и выгодно!
                        </p>
                        <p className='lessons__title-full'>
                            Получите полную консультацию по звонку!
                        </p>
                        <div className="lessons__content-btn">
                            <a href="">
                                <button className='lessons__btn-whatsapp'>
                                    <img src={whatsappLogo} alt=""/>
                                    <p > WhatsApp</p>
                                </button>
                            </a>
                            <div className="lessons__btn-number">
                                <img src={phone} alt=""/>
                                <p>0552 209 809</p>
                            </div>
                        </div>
                    </div>
                    <img src={car} alt="" className="lessons__content-car"/>
                </div>
                <div className="lessons__content-graph">
                    <div className="lessons__graph-txt">
                        <div className="lessons__txt-img">
                            <img src={Time} alt=""/>
                            <p className='work__days'>График работы</p>
                        </div>
                            <p>ПН-ВС; 09:00-18:00</p>
                    </div>
                    <div className="lessons__content-email">
                        <img src={mail} alt=""/>
                        <a href='#'>shivazaiofficial@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lessons;
import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import './Lessons.css'
import whatsappLogo from './Images/whatsapp-logo.png'
import phone from './Images/Phone.png'
import car from './Images/lessons-car.png'
import Time from './Images/Time.png'
import mail from './Images/mail.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lessons = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="Lessons">
            <div className="container">
                <div className="lessons__content">
                    <div className="lessons__content-title" data-aos="fade-right">
                        <h1>Персональные уроки по вождению</h1>
                        <p className='lessons__title-practic'>
                            Практические занятия дают 80% результата в обучении. Обучайтесь правильно и выгодно!
                        </p>
                        <p className='lessons__title-full'>
                            Получите полную консультацию по звонку!
                        </p>
                        <div className="lessons__content-btn">
                            <a href="https://web.whatsapp.com/" target='_blank'>
                                <button className='lessons__btn-whatsapp'>
                                    <img src={whatsappLogo} alt=""/>
                                    <p> WhatsApp</p>
                                </button>
                            </a>
                            <div className="lessons__btn-number" >
                                <img src={phone} alt=""/>
                                <a href='tel:+0552 209 809' className='no__decoration'><p>0552 209 809</p></a>
                            </div>
                        </div>
                    </div>
                    <motion.img
                        src={car}
                        alt="Car"
                        className="lessons__content-car"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
                <div className="lessons__content-graph" >
                    <div className="lessons__graph-txt" data-aos="fade-right">
                        <div className="lessons__txt-img">
                            <img src={Time} alt=""/>
                            <p className='work__days'>График работы</p>
                        </div>
                        <p>ПН-ВС; 09:00-18:00</p>
                    </div>
                    <div className="lessons__content-email" data-aos="fade-left">
                        <img src={mail} alt=""/>
                        <a href='#'>shivazaiofficial@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lessons;




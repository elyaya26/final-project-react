import React, {useEffect, useState} from 'react';
import './Rules.css';
import book from './images/book.png';
import location from './images/location.png';
import axios from 'axios';
import {showError, showSuccess} from "../../components/utils/alert";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Rules = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const [number, setNumber] = useState({
        message: ''
    });

    async function sendMessage() {
        try {
            const response = await axios.post('https://codify-graduation-project.vercel.app/send-message', number);
            console.log(response.data);
            showSuccess('Успешно выполнено', 'Сообщение отправлено, ожидайте звонка!');
        } catch (e) {
            if (e.response && e.response.status === 404) {
                showError('Код ошибка 404', 'Сервер временно недоступен');
            } else {
                showError('Произошла непредвиденная ошибка', 'Обратитесь к разработчикам.');
            }
        }
    }

    return (
        <div className='Rules' id='rules'>
            <div className="container">
                <div className="rules__content">
                    <div className="rules__content-card" data-aos="fade-up">
                        <div className="rules__card-img" >
                            <img src={book} alt="" width='400px' height='525px'/>
                        </div>
                        <div className="rules__content-title">
                            <h3>Методическое пособие:</h3>
                            <h5>
                                Методическое пособие по правилам дорожного движения
                                (пдд) с иллюстрациями и комментариями . методическое
                                пособие составлено с дополнениями и пояснениями к
                                дорожным знакам и разметкам.
                            </h5>
                            <h5>
                                При покупке оптом возможны скидки. за более подробной
                                информацией обращаться напрямую к Руслану
                                Жакшылыковичу по телефону или WhatsApp
                            </h5>
                            <h5>
                                Вы можете приобрести данное пособие по адресу либо
                                по звонку:
                            </h5>
                            <div className="rules__content-btn">
                                <a href='https://go.2gis.com/8d1nq' target='_blank' className="rules__buy-geo">
                                    <img src={location} alt="" width='24px' height='24px'/>
                                    <p>Сухе Ботора 26/1</p>
                                </a>

                                <div className="rules__buy-btn">
                                    <input type="text" placeholder='Ваш номер' onChange={(event) => setNumber({ message: event.target.value })} />
                                    <button onClick={sendMessage}>КУПИТЬ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rules;



// код элтурана
// import React, {useState} from 'react';
// import './Rules.css'
// import book from './images/book.png'
// import location from './images/location.png'
// import axios from "axios";
//
// const Rules = () => {
//     const [number, setNumber] = useState({
//         message: ''
//     })
//
//     async function sendMessage(){
//         const responce = await axios.post('https://codify-graduation-project.vercel.app/send-message', number)
//         console.log(responce.data)
//
//     }
//     return (
//         <div className='Rules'>
//             <div className="container">
//                 <div className="rules__content">
//                     <div className="rules__content-card">
//                         <div className="rules__card-img">
//                             <img src={book} alt="" width='400px' height='525px'/>
//                         </div>
//                         <div className="rules__content-title">
//                             <h3>Методическое пособие:</h3>
//                             <h5>
//                                 Методическое пособие по правилам дорожного движения
//                                 (пдд) с иллюстрациями и комментариями . методическое
//                                 пособие составлено с дополнениями и пояснениями к
//                                 дорожным знакам и разметкам.
//                             </h5>
// //                             <h5>
// //                                 При покупке оптом возможны скидки. за более подробной
// //                                 информацией обращаться напрямую к Руслану
// //                                 Жакшылыковичу по телефону или WhatsApp
// //                             </h5>
// //                             <h5>
// //                                 Вы можете приобрести данное пособие по адресу либо
// //                                 по звонку:
// //                             </h5>
// //                             <div className="rules__content-btn">
// //                                 <a href='#' className="rules__buy-geo">
// //                                     <img src={location} alt="" width='24px' height='24px'/>
// //                                     <p>Сухе Ботора 26/1</p>
// //                                 </a>
// //
// //                                 <div className="rules__buy-btn">
// //                                     <input type="text" placeholder='Ваш номер' onChange={(event) => setNumber({message: event.target.value})}/>
// //                                     <button onClick={sendMessage}>КУПИТЬ</button>
// //                                 </div>
// //                             </div>
// //
// //                         </div>
// //
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
//     );
// };

// export default Rules;

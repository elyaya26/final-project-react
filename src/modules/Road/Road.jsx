
// элтуран
// import React, {useState} from 'react';
// import './Road.css'
// import firstCard from './images/card-img-1.png'
// import secondCard from './images/card__img-2.png'
// import Whatsapp from './images/whatsapp.png'
// import Cards from "../../components/Road-cards/Cards/Cards";
// import Button from "../../components/Road-cards/Button/Button";
// import {showError} from "../../components/utils/alert";
//
// const Road = () => {
//     const [cards, setCards] = useState([
//         {title: 'Практическое вождение авто с инструктором:',
//             firstPg: "Автошкола «Жакшы - Жол», этот проект для всех жителей Бишкека. Автошкола Бишкека обучаютmвождению по категориям “B”. Если у вас есть права, но нет практики, наш инструктор поможет вам с практикой. Первые уроки будут с инструктором на его машине Honda Jazz (коробка автомат).",
//             secondPg: 'Стоимость практики можно узнать у инструктора по телефону или по',
//             whatsappImg: Whatsapp,
//             img: firstCard,
//             thirdPg: 'WhatsApp',
//             key: 1
//         },
//         {title: 'Пройти пробный тест',
//             firstPg: "Проверьте свои знания ПДД вместе с нами. Вам дается 25 минут чтобы ответить на 20 вопросов с иллюстрациями и вариантами ответов, узнайте уровень ваших знаний ПДД",
//             secondPg: '',
//             whatsappImg: '',
//             img: secondCard,
//             thirdPg: <Button/>,
//             key: 2
//         }
//     ]);
//     return (
//         <div className='Road'>
//             <div className="container">
//                 <div className="road__content">
//                     <div className="road__content-title">
//                         <h3>Жакшы Жол</h3>
//                         <p>Научитесь водить правильно и безопасно вместе с опытным инструктором по вождению</p>
//                     </div>
//                     {cards.map((item) => (
//                         <Cards cards={item} key={item.key}/>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Road;


//мой код
// import React, {useState} from 'react';
// import './Road.css'
// import firstCard from './images/card-img-1.png'
// import secondCard from './images/card__img-2.png'
// import Whatsapp from './images/whatsapp.png'
// import Cards from "../../components/Road-cards/Cards/Cards";
// import Button from "../../components/Road-cards/Button/Button";
// import {showError, showSuccess} from "../../components/utils/alert";
// import Footer from "../Footer/Footer";
//
// const Road = () => {
//     const [cards, setCards] = useState([
//         {title: 'Практическое вождение авто с инструктором:',
//             firstPg: "Автошкола «Жакшы - Жол», этот проект для всех жителей Бишкека. Автошкола Бишкека обучаютmвождению по категориям “B”. Если у вас есть права, но нет практики, наш инструктор поможет вам с практикой. Первые уроки будут с инструктором на его машине Honda Jazz (коробка автомат).",
//             secondPg: 'Стоимость практики можно узнать у инструктора по телефону или по',
//             whatsappImg: Whatsapp,
//             img: firstCard,
//             thirdPg: 'WhatsApp',
//             key: 1
//         },
//         {title: 'Пройти пробный тест',
//             firstPg: "Проверьте свои знания ПДД вместе с нами. Вам дается 25 минут чтобы ответить на 20 вопросов с иллюстрациями и вариантами ответов, узнайте уровень ваших знаний ПДД",
//             secondPg: '',
//             whatsappImg: '',
//             img: secondCard,
//             thirdPg: <Button />,
//             key: 2
//         }
//     ]);
//
//     return (
//         <div className='road-wrapper'>
//             <div className='Road'>
//                 <div className="container">
//                     <div className="road__content">
//                         <div className="road__content-title">
//                             <h3>Жакшы Жол</h3>
//                             <p>Научитесь водить правильно и безопасно вместе с опытным инструктором по вождению</p>
//                         </div>
//                         {cards.map((item) => (
//                             <Cards cards={item} key={item.key}/>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <Footer /> {/* Добавляем футер */}
//         </div>
//     );
// };
//
// export default Road;
//

// поселдний код
// import React, { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Road.css';
// import axios from "axios";
// import firstCard from './images/card-img-1.png';
// import secondCard from './images/card__img-2.png';
// import Whatsapp from './images/whatsapp.png';
// import Cards from "../../components/Road-cards/Cards/Cards";
// import { showError, showSuccess } from "../../components/utils/alert";
// import Footer from "../Footer/Footer";
//
// const Road = () => {
//     const [cards, setCards] = useState([
//         {
//             title: 'Практическое вождение авто с инструктором:',
//             firstPg: "Автошкола «Жакшы - Жол», этот проект для всех жителей Бишкека. Автошкола Бишкека обучает вождению по категориям “B”. Если у вас есть права, но нет практики, наш инструктор поможет вам с практикой. Первые уроки будут с инструктором на его машине Honda Jazz (коробка автомат).",
//             secondPg: 'Стоимость практики можно узнать у инструктора по телефону или по',
//             whatsappImg: Whatsapp,
//             img: firstCard,
//             thirdPg: 'WhatsApp',
//             key: 1
//
//         },
//         {
//             title: 'Пройти пробный тест',
//             firstPg: "Проверьте свои знания ПДД вместе с нами. Вам дается 25 минут чтобы ответить на 20 вопросов с иллюстрациями и вариантами ответов, узнайте уровень ваших знаний ПДД",
//             secondPg: '',
//             whatsappImg: '',
//             img: secondCard,
//             thirdPg: 'Пройти тест',
//             key: 2
//         }
//     ]);
//
//     async function SendMessage() {
//         try {
//             const response = await axios.post('https://codify-graduation-project.vercel.app/start-test', { test: 'sample-test' });
//             console.log(response.data);
//             showSuccess('Успешно выполнено', 'Начинается пробный тест!');
//         } catch (e) {
//             if (e.response && e.response.status === 404) {
//                 showError('Недоступно', 'Сервер еще в разработке');
//             } else {
//                 showError('Произошла непредвиденная ошибка', 'Обратитесь к разработчикам.');
//             }
//         }
//     }
//
//     return (
//         <div className='road-wrapper'>
//             <div className='Road'>
//                 <div className="container">
//                     <div className="road__content">
//                         <div className="road__content-title">
//                             <h3>Жакшы Жол</h3>
//                             <p>Научитесь водить правильно и безопасно вместе с опытным инструктором по вождению</p>
//                         </div>
//                         {cards.map((item) => (
//                             <div key={item.key} className="road-card">
//                                 <Cards cards={item} />
//
//                                 {item.title === 'Пройти пробный тест' && (
//
//                                     <button onClick={SendMessage}>{item.thirdPg}</button>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//             <ToastContainer />
//         </div>
//     );
// };
//
// export default Road;


import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Road.css';
import axios from "axios";
import firstCard from './images/card-img-1.png';
import secondCard from './images/card__img-2.png';
import Whatsapp from './images/whatsapp.png';
import Cards from "../../components/Road-cards/Cards/Cards";
import { showError, showSuccess } from "../../components/utils/alert";
import Button from "../../components/Road-cards/Button/Button";
import Footer from "../Footer/Footer";

const Road = () => {
    const [cards, setCards] = useState([
        {
            title: 'Практическое вождение авто с инструктором:',
            firstPg: "Автошкола «Жакшы - Жол», этот проект для всех жителей Бишкека. Автошкола Бишкека обучает вождению по категориям “B”. Если у вас есть права, но нет практики, наш инструктор поможет вам с практикой. Первые уроки будут с инструктором на его машине Honda Jazz (коробка автомат).",
            secondPg: 'Стоимость практики можно узнать у инструктора по телефону или по',
            whatsappImg: Whatsapp,
            img: firstCard,
            thirdPg: 'WhatsApp',
            key: 1

        },
        {
            title: 'Пройти пробный тест',
            firstPg: "Проверьте свои знания ПДД вместе с нами. Вам дается 25 минут чтобы ответить на 20 вопросов с иллюстрациями и вариантами ответов, узнайте уровень ваших знаний ПДД",
            secondPg: '',
            whatsappImg: '',
            img: secondCard,
            thirdPg: <Button/>,
            key: 2
        }
    ]);

    async function SendMessage() {
        try {
            const response = await axios.post('https://codify-graduation-project.vercel.app/start-test', { test: 'sample-test' });
            console.log(response.data);
            showSuccess('Успешно выполнено', 'Начинается пробный тест!');
        } catch (e) {
            if (e.response && e.response.status === 404) {
                showError('Недоступно', 'Сервер еще в разработке');
            } else {
                showError('Произошла непредвиденная ошибка', 'Обратитесь к разработчикам.');
            }
        }
    }

    return (
        <div className='road-wrapper'>
            <div className='Road'>
                <div className="container">
                    <div className="road__content">
                        <div className="road__content-title">
                            <h3>Жакшы Жол</h3>
                            <p>Научитесь водить правильно и безопасно вместе с опытным инструктором по вождению</p>
                        </div>
                        {cards.map((item) => (
                            <div key={item.key} className="road-card">
                                <Cards cards={item} />


                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Road;
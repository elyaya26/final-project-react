import React from 'react';
import './Button.css'
import {showError, showInfo, showSuccess} from "../../utils/alert";
import axios from "axios";
const Button = (props) => {
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

        <div className='cards__cp-btn'>


            <button onClick={SendMessage}>Пройти Тест!</button>


        </div>
    );
};

export default Button;





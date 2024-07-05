import React from 'react';
import ruslan from './images/ruslan.png';
import './Istructor.css'

const Instructor = () => {
    return (
        <div className='Instructor' id='instructor'>
            <div className="container">
                <div className="instructor__content">
                    <div className="instructor__content-img">
                        <img src={ruslan} alt="" width='340px' height='415px'/>
                    </div>
                    <div className="instructor__content-txt">
                        <h3>Руслан Жакшылыкович</h3>
                        <h6>Инструктор по вождению более 25 лет.</h6>
                        <p>
                            Омурбеков Руслан Жакшылыкович. Водительский стаж более 25 лет. Опыт преподавания и инструкторский стаж более 12 лет. Индивидуально подготовил практическому вождению 1500+ за 6 лет преподавания в автошколе выпустил более 1600+ студентов. Во время преподавания ПДД в автошколе, обнаружил ошибки и не полную информацию в ПДД Кыргызстана от 5.02.2022 года. Отталкиваясь от этих ошибок, составил свою методическое пособие по ПДД.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;
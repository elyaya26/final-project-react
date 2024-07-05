import React from 'react';
import firstCard from "../../../modules/Road/images/card-img-1.png";
import Whatsapp from "../../../modules/Road/images/whatsapp.png";

const Cards = (props) => {
    return (
        <div>
            <div className="road__content-card">
                <div className="road__card">
                    <div className="road__card-img">
                        <img src={props.cards.img} alt=""/>
                    </div>
                    <div className="road__card-title">
                        <h3>{props.cards.title}</h3>
                        <p>{props.cards.firstPg}</p>
                        <p className='road__title-p'>{props.cards.secondPg}</p>
                        <div className="road__title-btn">
                            <img src={props.cards.whatsappImg} alt=""/>
                            <p className='whatsapp'>{props.cards.thirdPg}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;

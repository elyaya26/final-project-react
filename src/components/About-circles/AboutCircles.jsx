import React from 'react';
import study from "../../modules/About/images/icon_study.png";

const AboutCircles = (props) => {
    return (
        <div>
            <div className='About'>
                <div className="container">
                    <div className="about__content">
                        <div className="about__content-circle">
                            <div className="circle">
                                <img src={props.about.image} alt="study"/>
                            </div>
                            <p>{props.about.title}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutCircles;
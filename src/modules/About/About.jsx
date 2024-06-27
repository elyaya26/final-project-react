import React, {useState} from 'react';
import study  from './images/icon_study.png'
import './About.css'
import AboutCircles from "../../components/About-circles/AboutCircles";

const About = () => {
    const [about, setAbout] = useState([
        {image: study, title:'1000+ довольных клиентов', key:1},

    ])
    return (
        <div className='mainAbout'>
            <div className="map__div">
                {about.map((about, idx) =>
                    <AboutCircles about={about} key={about.key}/>
                )}
            </div>
            <div className="border"></div>
        </div>


    );
};

export default About;
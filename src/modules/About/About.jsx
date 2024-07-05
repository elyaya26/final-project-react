// import React, {useState} from 'react';
// import study  from './images/icon_study.png'
// import './About.css'
// import AboutCircles from "../../components/About-circles/AboutCircles";
//
// const About = () => {
//     const [about, setAbout] = useState([
//         {image: study, title:'1000+ довольных клиентов', key:1},
//
//     ])
//     return (
//         <div className='mainAbout'>
//             <div className="map__div">
//                 {about.map((about, idx) =>
//                     <AboutCircles about={about} key={about.key}/>
//                 )}
//             </div>
//             <div className="border"></div>
//         </div>
//
//
//     );
// };

// export default About;

import React, {useEffect, useState} from 'react';
import iconStudy from './images/icon_study.svg';
import icon25Plus from './images/icon_25plus.svg';
import iconTime from './images/icon_time.svg';
import iconWheel from './images/icon_wheel.svg';
import './About.css';
import AboutCircles from '../../components/About-circles/AboutCircles';
import Aos from 'aos'
import 'aos/dist/aos.css'




const About = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const [about, setAbout] = useState([
        { image: iconStudy, title: '1000+ довольных клиентов', key: 1 },
        { image: iconTime, title: 'Занятия в удобное для вас время', key: 4 },
        { image: iconWheel, title: '1.5 Часа - время одного занятия', key: 3 },
        { image: icon25Plus, title: 'Более 25 лет стаж работы', key: 2 },
    ]);

    return (
        <div className='mainAbout' data-aos="fade-up">
            <div className="map__div">
                {about.map((item) => (
                    <AboutCircles about={item} key={item.key} />
                ))}
            </div>
            <div className="border"></div>
        </div>
    );
};

export default About;

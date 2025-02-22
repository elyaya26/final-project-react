import React, {useEffect, useState} from 'react';
import './Useful.css'
import News from "../../components/News/News";
import Aos from 'aos'
import 'aos/dist/aos.css'

// eslint-disable-next-line react-hooks/rules-of-hooks






const Useful = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    const [news, setNews] = useState([]);

    useEffect(() => {
        async function getNews(){
            try {
                const responce = await fetch('https://codify-graduation-project.vercel.app/news')
                const data = await responce.json();
                setNews(data)
            }catch (error){
                console.log('error function getNews')
            }

        }
        getNews()
    },[])



    return (
        <div className='Useful' id='useful'>
            <h3>Полезные статьи</h3>
            <div className="useful__news" data-aos="fade-up">
                {news.map((item, index) => (
                    <News news={item} key={item.id}/>
                ))}
            </div>

        </div>
    );
};

export default Useful;
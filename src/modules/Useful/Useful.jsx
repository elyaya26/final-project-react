import React, {useState} from 'react';
import './Useful.css'
import News from "../../components/News/News";

// eslint-disable-next-line react-hooks/rules-of-hooks






const Useful = () => {

    const [news, setNews] = useState([]);

    async function getNews(){
        const responce = await fetch('https://codify-students-jst.vercel.app/news')
        const data = await responce.json();
        news(data)
    }

    console.log(news)
    return (
        <div className='Useful'>
            {news.map((item, index) => (
                <News news={item} />
            ))}
        </div>
    );
};

export default Useful;
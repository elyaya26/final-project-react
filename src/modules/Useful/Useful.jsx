import React, {useEffect, useState} from 'react';
import './Useful.css'
import News from "../../components/News/News";

// eslint-disable-next-line react-hooks/rules-of-hooks






const Useful = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        async function getNews(){
            const responce = await fetch('https://codify-students-jst.vercel.app/news')
            const data = await responce.json();
            setNews(data)
        }
        getNews()
    },[])



    return (
        <div className='Useful'>
            <h3>Полезные статьи</h3>
            <div className="useful__news">
                {news.map((item, index) => (
                    <News news={item} key={item.id}/>
                ))}
            </div>

        </div>
    );
};

export default Useful;
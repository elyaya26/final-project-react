import React from 'react';
import road from '../../modules/Useful/images/road.png'

const News = (props) => {
    return (
        <div>
            <div className="container">
                <div className="useful__content">
                    <div className="useful__content-info">
                        <p>
                            {props.news.text}
                        </p>
                        <img src={road} alt="img" width='406px' height='230px'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
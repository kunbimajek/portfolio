import React from 'react';
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {
    const portfolio = [
        { id: 1, src: 'img/koya.jpeg', title: 'Koya', about: 'Improving learning outcomes', link: 'https://koya.co/', bg: 'blue'},
        { id: 2, src: 'img/npay.jpeg', title: 'NPAY Dashboard', about: 'Save, pay bills & take loans with NPAY(Proposed UI)', link: 'https://npay-dashboard.netlify.app/', },
        { id: 3, src: 'img/moneybag.png', title: 'Moneybag', about: 'Save more with Moneybag', link: 'https://moneybag.netlify.app/', bg: 'blue'},
        { id: 4, src: 'img/learnbeta.png', title: 'LearnBeta', about: 'Customized learing support for kids', link: 'http://www.learnbeta.ng/', },
        { id: 5, src: 'img/jara.png', title: 'Jara', about: 'Data for 9mobile customers', link: 'https://www.jarahb.com', },
        { id: 6, src: 'img/watched.jpeg', title: 'Watched.', about: 'Search up and like your favourite movies ', link: 'https://watched-movie-app.netlify.app/', }
    ];
    
    return (
        <div>
            <div className="row mb-70">
            <Fade>
                {
                    portfolio.map((p) => {
                        return (
                            <div className="box" key={p.id}>
                                <img src={p.src} alt="learnbeta" className={p.bg}/>
                                <div className="box-content">
                                    <h1 className="title">{p.title}</h1>
                                    <span className="about">{p.about}</span>
                                    <ul className="icon">
                                        <li><a href={p.link} target="_blank" className="fa fa-link" rel="noreferrer"></a></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </Fade>
            </div>
        </div>
    )
}

export default Portfolio;
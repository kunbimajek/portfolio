import React from 'react';
import Portfolio from '../components/Portfolio';
import '../App.sass';

const Work = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
            <h1 className="mb-70">Recent Projects</h1>
                <Portfolio />
            </div>
        </section>
    )
}

export default Work;
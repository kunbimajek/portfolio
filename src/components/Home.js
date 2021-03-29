import React, {useEffect} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"

import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Socials from '../components/Socials';

const Home = () => {
    
    gsap.registerPlugin(ScrollTrigger); 
    
    useEffect(() => {    
        const container = document.querySelector(".reveal");
        const image = container.querySelector("img");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                toggleActions: "restart none none reset"
            }
        });

        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, {
            xPercent: -30,
            ease: 2
        });
        
        tl.from(image, 1.5, {
            xPercent: 30,
            scale: 1.2,
            delay: -1.5,
            ease: 2
        });
    }, []);

    return (
        <div>
            <section className="home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 header-text">
                            <div>
                                <h1>
                                    <span className="reveal-text">Hi, I'm  Dami Majek</span><br/>
                                    <span>& I'm a 
                                        <span className="ninja"> Frontend  Ninja</span>
                                    </span>
                                </h1>
                                <p>I love building products that make lives easier and I enjoy being part of a company that grows around that.</p>
                                <Socials fill="#110F16"/>
                            </div>
                        </div>
                        <div className="col-md-6 header-image reveal">
                            <img src="/img/profile.png" alt="profile" width="60%"/>
                        </div>
                    </div>
                    <div className="scroll">
                        <a href="#portfolio">
                        Scroll <svg width="16" height="16" viewBox="0 0 103 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M92.3219 1.80757C94.7319 -0.602523 98.6395 -0.602523 101.05 1.80757C103.46 4.21766 103.46 8.12519 101.05 10.5353L55.7924 55.7924C53.3823 58.2025 49.4748 58.2025 47.0647 55.7924L1.80757 10.5353C-0.602523 8.12519 -0.602523 4.21766 1.80757 1.80757C4.21766 -0.602523 8.12519 -0.602523 10.5353 1.80757L51.4286 42.7008L92.3219 1.80757Z" fill="black"/>
                        </svg>
                        </a>
                    </div>
                </div>
            </section>
            <Work />
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home;
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => { 
        const handleScroll = () => {
            const offset = window.scrollY;
            if(offset > 0 ){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll) 
    }, [])

    let navbarClasses = ['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }

    return (
        <div className={navbarClasses.join(" ")}>
            <nav className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <p className="signature">Damilola Majekodunmi</p>
                    </div>
                    <div className="col-md-4 cv">
                        <a href="/Damilola Majek_Frontend Developer.pdf" target="blank" className="btn">My CV</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
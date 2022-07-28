import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">PopcornTV</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        
                    </div>
                    <div className="footer__content__menu">
                    <Link to="/">Contact us All</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/live">Live</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/top_rated">Must watch</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Recent release</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

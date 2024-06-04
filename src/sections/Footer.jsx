import React from "react";
import '../css/new.css';
import logoImage from '../img/logo.webp';  

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer__container container grid">
                    <div>
                        <a href="#" className="footer__logo">
                            <img src={logoImage} alt="Logo" />
                        </a>
                        <p className="footer__desc">
                            Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="footer__content">
                        <div>
                            <h3 className="footer__title">Main Menu</h3>
                            <ul className="footer__links">
                                <li>
                                    <a href="#" className="footer__link">About</a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">Menus</a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">Offer</a>
                                </li>
                                <li>
                                    <a href="#" className="footer__link">Event</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="footer__title">Social Media</h3>
                            <ul className="footer__social">
                                <a href="https://www.facebook.com/" target="_blank" className="footer__social-link" rel="noreferrer">
                                    <i className="ri-facebook-line"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" className="footer__social-link" rel="noreferrer">
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a href="https://www.twitter.com/" target="_blank" className="footer__social-link" rel="noreferrer">
                                    <i className="ri-twitter-line"></i>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

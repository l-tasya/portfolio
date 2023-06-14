import React from 'react';
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import telegram from "../../img/icons/telegram.svg";
import './style.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://instagram.com">
                                <img src={instagram} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://linkedin.com">
                                <img src={linkedIn} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="">
                                <img src={twitter} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="">
                                <img src={gitHub} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://telegram.com">
                                <img src={telegram} alt="ink"/>
                            </a>

                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

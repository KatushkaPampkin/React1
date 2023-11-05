import React, { useState } from "react";

import "./Header.css";

import logo from "../image/logo.svg";
import flag from "../image/Flag.png";
import stars from "../image/Stars.png";
import calc from "../image/Calculator.png";
import social from "../image/socials.svg";
import Navigation from "../MainPart/Navigation/Navigation";


const Header = () => {

    return (
        <div className="wrapper">
            <header className="header">
                <div className="headerContainer">
                    <a href="#">
                        <img alt="some alt" className="logo" src={logo} />
                    </a>

                    <div className="headerRaiting">
                        <img alt="some alt" src={flag} />
                        <div className="headerRaitingInner">
                            <img alt="some alt" src={stars} />
                            <p className="headerRaitingText">
                                <span>Рейтинг в Google</span> <br />
                                на основании 180 отзывов
                            </p>
                        </div>
                    </div>

                    <button className="headerButton">
                        <span>Прислать проект на расчет</span>
                        <img alt="some alt" src={calc} />
                    </button>

                    <div className="headerWhatsapp">
                        <span>Мы онлайн</span>
                        <a href="#">
                            <img alt="some alt" src={social} />
                        </a>
                    </div>

                    <div className="headerContacts">
                        <span>Без выходных с 10:00 до 20:00</span>
                        <a className="headerTel" href="tel:+78000000000">
                            +7(800)000-00-00
                        </a>
                        <a className="headerLink" href="#">
                            Заказать обратный звонок
                        </a>
                    </div>
                </div>


            </header>
            <Navigation/>
        </div>
    );}

export default Header;

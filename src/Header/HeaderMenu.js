import React from "react";

import "./HeaderMenu.css";

const HeaderMenu = ({
                        menu,
                        theme,
                        handleChangeTheme,
                        counter,
                        setCounter,
                    }) => {
    console.log("menu = ", menu);
    console.log("theme = ", theme);

    return (
        <div className="headerMenu">
            <ul className="headerMenuContainer font-dancing-script">
                <li>
                    <a className="headerLink headerLink--arrow" href="#">
                        проекты
                    </a>
                </li>
                <li>
                    <a href="#">фото работ</a>
                </li>
                <li>
                    <a href="#">акции</a>
                </li>
                <li>
                    <a className="headerLink--arrow font-dancing-script" href="#">
                        услуги
                    </a>
                </li>
                <li>
                    <a className="headerLink--arrow" href="#">
                        заказчику
                    </a>
                </li>
                <li>
                    <a href="#">контакты</a>
                </li>
                <li>
                    <a className="headerLink headerLink--like" href="#">
                        избранное
                    </a>
                </li>
                <li>
                    <a className="headerLink headerLink--search" href="#">
                        поиск
                    </a>
                </li>
            </ul>


        </div>
    );
};

export default HeaderMenu;

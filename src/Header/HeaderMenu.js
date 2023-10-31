
import React from "react";

import "./HeaderMenu.scss";

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
        <div className="headerMenuContainer">
            <ul className={theme === "light" ? "theme-light" : "theme-dark"}>
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

             <button onClick={handleChangeTheme}>
                 Текущая тема {theme}.
            </button>

        </div>
    );
};

export default HeaderMenu;

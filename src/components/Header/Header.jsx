import React, { useEffect, useState } from 'react';
import classes from './Header.module.css'
import {
    SearchIcon, ProfileIcon, FavouritesIcon
} from '../../assets/icons'

export const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (
        <header className={scroll ? classes.bgheader : classes.header}>
            <div className="container">
                <nav className={classes.nav}>
                    <a className={classes.logo} href="#">
                        <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="OJJO" />
                    </a>
                    <ul className={classes.header__links_list}>
                        <li className={classes.header__links_item}>
                            <a className={classes.header__link} href="#">Контрагентам</a>
                        </li>
                        <li className={classes.header__links_item}>
                            <a className={classes.header__link} href="#">Дизайнерам</a>
                        </li>
                        <li className={classes.header__links_item}>
                            <a className={classes.header__link} href="#">Вакансии</a>
                        </li>
                    </ul>
                    <ul className={classes.header__links_list}>
                        <li className={classes.header__links_item}>
                            <a className={`${classes.header__link} ${classes.header__link_search}`} href="#">
                                <SearchIcon className={classes.search} />Поиск
                            </a>
                        </li>
                        <li className={classes.header__links_item}>
                            <a className={classes.header__link} href="#">Вход/Регистрация</a>
                        </li>
                        <li className={classes.header__links_item}>
                            <a className={classes.header__link} href="#">
                                <ProfileIcon className={classes.header__icon} alt="profile" />
                            </a>
                        </li>
                        <li className={classes.header__links_item}>
                            <a className={classes.header__link} href="#">
                                <FavouritesIcon className={classes.header__icon} alt="favourites" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


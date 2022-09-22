import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <nav className={classes.nav}>
                    <a className="logo" href="#">
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
                            <a className={classes.header__link} href="#">Поиск</a>
                        </li>
                        <li className={classes.header__links_item}>
                            <a className={classes.header__link} href="#">Вход/Регистрация</a>
                        </li>
                        <li className={classes.header__links_item}>
                            <a className={classes.header__link} href="#">
                                <img className={classes.header__icon} src={process.env.PUBLIC_URL + '/img/profile.svg'} alt="profile" />
                            </a>
                        </li>
                        <li className={classes.header__links_item}>
                            <a className={classes.header__link} href="#">
                                <img className={classes.header__icon} src={process.env.PUBLIC_URL + '/img/favourites.svg'} alt="favourites" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

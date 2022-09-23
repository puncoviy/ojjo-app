import React from 'react';
import {
    VisaIcon, MasterCardIcon,
    PhoneIcon, MailIcon, YouTubeIcon, VKIcon, FBIcon, TGIcon, ETIcon
} from '../../assets/icons';
import classes from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footer_inner}>

                    <div className={classes.useful_links}>
                        <p className={classes.footer_title}>Полезные ссылки</p>
                        <ul className={classes.useful_list}>
                            <li className={classes.useful_item}>
                                <a className={classes.footer_link} href="#">Доставка</a>
                            </li>
                            <li className={classes.useful_item}>
                                <a className={classes.footer_link} href="#">Оплата</a>
                            </li>
                            <li className={classes.useful_item}>
                                <a className={classes.footer_link} href="#">Акции</a>
                            </li>
                            <li className={classes.useful_item}>
                                <a className={classes.footer_link} href="#">Политика конфиденциальности</a>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.payment}>
                        <p className={classes.footer_title}>Оплата</p>
                        <p className={classes.footer_text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.
                        </p>
                        <VisaIcon className={classes.icon} />
                        <MasterCardIcon className={classes.icon} />
                    </div>

                    <div className={classes.contacts}>
                        <p className={classes.footer_title}>Контакты</p>
                        <ul className={classes.contacts_list}>
                            <li className={classes.contacts_item}>
                                <PhoneIcon className={classes.icon} />
                                <a className={classes.footer_link} href="tel:+78122345655">8 (812) 234-56-55</a>
                            </li>
                            <li className={classes.contacts_item}>
                                <PhoneIcon className={classes.icon} />
                                <a className={classes.footer_link} href="tel:+78122345655">8 (812) 234-56-55</a>
                            </li>
                            <li className={classes.contacts_item}>
                                <MailIcon className={classes.icon} />
                                <a className={classes.footer_link} href="mailto:ojjo@ojjo.ru">ojjo@ojjo.ru</a>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.social}>
                        <p className={classes.footer_title}>Социальные сети</p>
                        <p className={classes.footer_text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.
                        </p>
                        <ul className={classes.social_list}>
                            <li className={classes.social_item}>
                                <a className={classes.social_link} href="#">
                                    <YouTubeIcon className={classes.icon} />
                                </a>
                            </li>
                            <li className={classes.social_item}>
                                <a className={classes.social_link} href="#">
                                    <VKIcon className={classes.icon} />
                                </a>
                            </li>
                            <li className={classes.social_item}>
                                <a className={classes.social_link} href="#">
                                    <FBIcon className={classes.icon} />
                                </a>
                            </li>
                            <li className={classes.social_item}>
                                <a className={classes.social_link} href="#">
                                    <TGIcon className={classes.icon} />
                                </a>
                            </li>
                            <li className={classes.social_item}>
                                <a className={classes.social_link} href="#">
                                    <ETIcon className={classes.icon} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.info}>
                    <ul className={classes.info_list}>
                        <li className={classes.info_item}>
                            <p>(c) 2022 OJJO jewelry</p>
                        </li>
                        <li className={classes.info_item}>
                            <a className={classes.footer_link} href="#">Договор публичной офферты</a>
                        </li>
                        <li className={classes.info_item}>
                            <a className={classes.footer_link} href="#">Контрагентам публичной офферты</a>
                        </li>
                        <li className={classes.info_item}>
                            <p className={classes.footer_link_figma}>Сделано Figma.info</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

// export default Footer;

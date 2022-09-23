import React from 'react';
import { Partner } from '../../../assets/icons';
import MainBG from '../../../assets/img/mainbg.jpg'
import { Btn } from '../Btn/Btn';
import classes from './Promo.module.css'

export const Promo = () => {
    return (
        <section className={classes.promo} style={{ backgroundImage: `url(${MainBG})` }}>
            <h1 className="visually-hidden">Ювелирные изделия OJJO</h1>
            <h2 className={classes.title}>Долго, дорого, богато!</h2>
            <Btn text='каталог изделий' type='btnBlack' />
            <div className={classes.partners}>
                <div className="container">
                    <ul className={classes.partners_list}>
                        <li className={classes.partners_item}>
                            <Partner className={classes.partners_logo} />
                        </li>
                        <li className={classes.partners_item}>
                            <Partner className={classes.partners_logo} />
                        </li>
                        <li className={classes.partners_item}>
                            <Partner className={classes.partners_logo} />
                        </li>
                        <li className={classes.partners_item}>
                            <Partner className={classes.partners_logo} />
                        </li>
                        <li className={classes.partners_item}>
                            <Partner className={classes.partners_logo} />
                        </li>
                        <li className={classes.partners_item}>
                            <Partner className={classes.partners_logo} />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}


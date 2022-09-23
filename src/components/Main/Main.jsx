import React from 'react';
import { Catalogue } from './Catalogue';
import classes from './Main.module.css'
import { Promo } from './Promo';

export const Main = () => {
    return (
        <main>
            <Promo />
            <Catalogue />
        </main>
    );
}

import React from 'react'
import { usePages } from '../../../../hooks/pages'
import classes from './CardsList.module.css'


export function CardsList() {
    return (
        <ul className={classes.card__list}>
            <li className={classes.card__item}>
                <img className={classes.card__img} src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
                <p className={classes.card__name}>Rick Sanchez</p>
            </li>
        </ul>
    )
}

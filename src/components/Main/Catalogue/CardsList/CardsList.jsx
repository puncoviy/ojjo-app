import React from 'react'
import { usePages } from '../../../../hooks/pages'
import classes from './CardsList.module.css'


export function CardsList() {
    const { cards } = usePages();

    const Card = (props) => {
        return (
            <li className={classes.card__item}>
                <img className={classes.card__img}
                    src={"https://rickandmortyapi.com/api/character/avatar/" + props.id + ".jpeg"}
                    alt={props.name} />
                <p className={classes.card__name}
                >{props.name}</p>
            </li>
        )
    }

    return (
        <ul className={classes.card__list}>
            {cards.map(card => <Card id={card.id} name={card.name} key={`card${card.id}`} />)}
        </ul>
    )
}

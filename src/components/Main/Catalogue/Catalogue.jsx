import React, { useState } from 'react';
import { usePages } from '../../../hooks/pages';
import { CardsList } from './CardsList/CardsList';
import classes from './Catalogue.module.css'
import { Pagination } from './Pagination/Pagination';

export const Catalogue = () => {
    const [page, setPage] = useState(1)
    console.log(page)

    const prevPage = () => {
        setPage(page - 1)
    }
    const nextPage = () => {
        setPage(page + 1)
    }
    function PaginationPrimal() {

        const { pages } = usePages();
    
        const Page = ({ value }) => {
            return (
                <li className={classes.pagination_item}
                    onClick={() => {
                        setPage(value)
                    }}
                >{value}</li>
            )
        }
    
        return (
            <ul className={classes.pagination}>
                <li className={classes.pagination_item}
                    onClick={prevPage}
                >prev</li>
    
                {Array.from({ length: pages }).map((_, i) =>
                    <Page key={'page' + i}
                        value={i + 1}
                    />
                )}
    
                <li className={classes.pagination_item}
                    onClick={nextPage}
                >next</li>
            </ul>
        );
    }
    function CardsListPrimal() {
        const { cards } = usePages(page);
    
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
    
    return (
        <section className={classes.catalogue}>
            <div className="container">
                <h2 className="visually-hidden">Каталог товаров</h2>
                <a className={classes.title_link} href="#">К мероприятиям</a>
                <h3 className={classes.title}>Настоящая красота здесь!</h3>


                <PaginationPrimal />
                <CardsListPrimal />
            </div>
        </section>
    );
}
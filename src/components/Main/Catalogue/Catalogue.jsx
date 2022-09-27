import React, { useState } from 'react';
import { usePages } from '../../../hooks/pages';
import classes from './Catalogue.module.css';
// import { CardsList } from './CardsList/CardsList';
// import { Pagination } from './Pagination/Pagination';

export const Catalogue = () => {
    const { pages } = usePages();
    const [page, setPage] = useState(1)
    console.log(page)

    const prevPage = () => {
        page > 1 && setPage(page - 1)
    }
    const nextPage = () => {
        page < pages && setPage(page + 1)
    }

    function PaginationPrimal() {

        const Page = ({ value }) => {
            return (
                <li className={classes.pagination_item}
                    onClick={() => {
                        setPage(value)
                    }}
                >{value}</li>
            )
        }

        // const PageArray = () => {
        //     if (page < 4) {
        //         return (
        //             <>
        //                 {Array.from({ length: 5 }).map((_, i) =>
        //                     <Page key={'page' + i}
        //                         value={i + 1}
        //                     />
        //                 )}
        //                 <li className={classes.pagination_item}
        //                 >...</li>
        //             </>
        //         )

        //     }
        // }

        return (
            <ul className={classes.pagination}>
                <li className={classes.pagination_item}
                    onClick={prevPage}
                >prev</li>

                {/* <PageArray /> */}

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
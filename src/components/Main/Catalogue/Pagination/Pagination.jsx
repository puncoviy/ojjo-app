import React, { useState } from 'react';
import { usePages } from '../../../../hooks/pages';
import classes from './Pagination.module.css';

export function Pagination() {

    const {pages} = usePages();

    const [page, setPage] = useState(1)
    console.log(page)

    const prevPage = () => {
        setPage(page - 1)
    }
    const nextPage = () => {
        setPage(page + 1)
    }

    const Page = ({ value, onClick }) => {
        return (
            <li className={classes.pagination_item}
                onClick={() => onClick(value)}
            >{value}</li>
        )
    }

    // async function fetchCards() {
    //     const response = await axios.get('https://rickandmortyapi.com/api/character')
    //     const cardsList = response.data.results
    //     const totalPages =
    //         Array.from({ length: pages }).map((_, i) =>
    //             <Page key={'page' + (i + 1)}
    //                 value={i + 1}
    //                 onClick={setPage}
    //             />)
    //     // return (
    //     //     Array.from({ length: totalPages }).map((_, i) =>
    //     //         <Page key={'page' + i}
    //     //             value={i + 1}
    //     //         onClick={setPage}
    //     //         />
    //     //     )
    //     // )
    // }

    return (
        <ul className={classes.pagination}>
            <li className={classes.pagination_item}
                onClick={prevPage}
            >prev</li>

            {Array.from({ length: pages }).map((_, i) =>
                <Page key={'page' + i}
                    value={i + 1}
                onClick={setPage}
                />
            )}

            <li className={classes.pagination_item}
                onClick={nextPage}
            >next</li>
        </ul>
    );
}

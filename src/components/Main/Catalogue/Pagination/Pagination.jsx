import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCards } from '../../../../hooks/cards';
import { usePages } from '../../../../hooks/pages';
import classes from './Pagination.module.css';

export function Pagination() {

    const { pages } = usePages();

    const [page, setPage] = useState(1)
    console.log(page)

    const prevPage = () => {
        setPage(page - 1)
    }
    const nextPage = () => {
        setPage(page + 1)
    }

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

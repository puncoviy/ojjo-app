import axios from 'axios';
import React, { useState } from 'react';
import classes from './Pagination.module.css';

const PageData = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const Pagination = ({ totalPages }) => {
    // props.totalPages
    // props.currentPage
    // props.onChange

    const Page = ({ value, onClick }) => {
        return (
            <li className={classes.pagination_item}
                onClick={() => onClick(value)}>{value}</li>
        );
    }

    const TotalPages = PageData.map(page =>
        <Page key={'page' + page}
            children={page}
            // onClick={directPage}
            onClick={() => console.log(page,'f')}
        />)

    const [page, setPage] = useState(1);
    console.log(page)


    function nextPage() {
        page <= PageData.length ? setPage(prev => prev + 1) : console.log('no pages above')
    }

    function prevPage() {
        page > 1 ? setPage(prev => prev - 1) : console.log('no pages beyond')
    }

    return (
        <ul className={classes.pagination}>
            <li className={classes.pagination_item}
                onClick={prevPage}>prev</li>
            {Array.from({ length: totalPages }).map((_,i) => 
                <Page key={'page' + i}
                    value={i + 1}
                    onClick={setPage}
                />
            )}
            <li className={classes.pagination_item}
                onClick={nextPage}>next</li>
        </ul>
    );
}



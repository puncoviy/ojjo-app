import React from 'react';
import classes from './Catalogue.module.css'
import { Pagination } from './Pagination/Pagination';

export const Catalogue = () => {
    return (
        <section className={classes.catalogue}>
            <div className="container">
                <h2 className="visually-hidden">Каталог товаров</h2>
                <a className={classes.title_link} href="#">К мероприятиям</a>
                <h3 className={classes.title}>Настоящая красота здесь!</h3>


                <Pagination totalPages={10}
                    currentPage='1'
                    // onChange={updatePagination}
                    />
            </div>
        </section>
    );
}
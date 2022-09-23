import React from 'react';
import classes from './Btn.module.css';

export const Btn = (props) => {
    return (
        <a href="#" className={`${classes.btn} ${props.type}`}>
        {props.text}
        </a>
    );
}
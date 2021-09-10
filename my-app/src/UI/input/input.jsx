import React from "react";
import classes from './input.module.css';

const Input = (proprs) => {
    return(
        <input {...proprs} className={classes.input}/>
    );
}

export default Input;
import React from "react";
import { connect } from "react-redux";
import { actionRed, actionGreen, actionBlue } from "../actions/action";
import { COLOR_RED, COLOR_GREEN, COLOR_BLUE } from "../contants";
import classes from './colorButton.module.css';

const Colors = (props) => {
    return(
        <div>
            <button className={classes.btn} onClick={props.actionRed} style={{backgroundColor: props.backgroundColor || COLOR_RED}}>Red</button>
            <button className={classes.btn} onClick={props.actionGreen} style={{backgroundColor: props.backgroundColor || COLOR_GREEN}}>Green</button>
            <button className={classes.btn} onClick={props.actionBlue} style={{backgroundColor: props.backgroundColor || COLOR_BLUE}}>Blue</button>
        </div>
    );
}

const mapStateProps = (state) => ({
    backgroundColor: state.style.backgroundColor
});

const mapDispatchToProps = {
    actionRed, actionGreen, actionBlue
}

export const ColorContainer = connect(mapStateProps, mapDispatchToProps)(Colors);
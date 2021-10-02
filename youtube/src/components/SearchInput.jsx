import React, { Component } from "react";
import classes from '../style/searchInput.module.css';

export default class SearchInput extends Component {
    state = { inputValue: '' };

    onFormSubmit = async (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
    };
     
    onFormChange = async (event) => {
        this.setState( {inputValue: event.target.value} )
    }

    render() { 
        return(
            <div className={classes.searchInput}>
                <form action="" onSubmit={ this.onFormSubmit }>
                    <input type="text" 
                            className={classes.input}
                            value={ this.state.inputValue } 
                            placeholder="Enter video title" 
                            onChange={ this.onFormChange } />
                    <input className={classes.btnSearch} type="submit" value="Search videos" />
                </form>
            </div>
        ); 
    };
}
import classes from './filter.module.css';

const Filter = ({setFilter}) => {
    return(
        <div className={classes.btnGroup}>
                <button onClick={ (event) => setFilter(event.target.value)} value="All">All</button>
                <button onClick={ (event) => setFilter(event.target.value)} value="isLiked">Liked</button>
                <button onClick={ (event) => setFilter(event.target.value)} value="releaseDate">Years</button>
        </div>
    );
}

export default Filter;
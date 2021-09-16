import classes from './Like.module.css';

function Like() {
    function ChangeLike(event){
        event.target.parentElement.classList.toggle('like');
        event.target.classList.toggle('active');
    }
    return (  
        <button className={classes.LikeBtn} onClick={(event) => ChangeLike(event)}>&#10084;</button>
    );
};

export default Like;
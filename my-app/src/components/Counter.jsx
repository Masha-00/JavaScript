
function Counter({songs}){
    return(
        <p className="count-title">Count of songs: <span>{songs.length}</span></p>
    );
}

export default Counter;
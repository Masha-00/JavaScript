import Button from '../UI/button/button';
import '../App.css';

function SongsItem({ song, deleteSong }){
    return(
        // <div class="container">
        //     <div class="btn-del"></div>
        //     <div class="date"></div>
        //     <div class="name"></div>
        //     <div class="info"></div>
        // </div>

        <div className="songs__item">
            <div className="name">
                <div className="song_info">
                    <p><span>{song.id}</span></p>
                    <p>{song.name}</p>
                </div>
            </div>
            <div className="info">
                <div className="song_info">
                    <p><span>Author:</span> {song.author}</p>
                    <p><span>Album:</span> {song.albumName}</p>
                </div>
            </div>
            <div className="date">
                <p><span>Date of release:</span> {song.releaseDate}</p>
            </div>
            <div className="btn-del">
                {/* like */}
                <Button customClassName='DeleteSong' onClick={() => deleteSong(song.id)}>&times;</Button>
            </div>
        </div>
    );
}

export default SongsItem
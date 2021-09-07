import DeleteSong from './DeleteSong'
import Like from './Like'

function SongsItem({song}){
    return(
        <div className="songs-item">
            <p>{song.id}</p>
            <p>{song.name}</p>
            <p>{song.author}</p>
            <p>{song.releaseDate}</p>
            <p>{song.albumName}</p>
            <DeleteSong/>
            <Like/>
        </div>
    );
}

export default SongsItem
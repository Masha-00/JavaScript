import songs from '../songs'
import SongsItem from './SongsItem'

function SongsList(){
    return(
        <div className="songs-wrapper">
            {
                songs.map(item => <SongsItem song = {item} key = {item.id} />)
            }
        </div>
    );
}

export default SongsList
import SongsItem from './SongsItem'

function SongsList({ songs, deleteSong }){
    return(
        <div className="songs-wrapper">
            {
                songs.length
                ? <div>
                    {
                        songs.map(songsItem => <SongsItem
                            song={songsItem}
                            deleteSong={deleteSong}
                            key={songsItem.id}
                        />)
                    }
                    </div>
                : <h1 style={ {textAlign: 'center'} }>Not Found any Songs</h1>
            }
        </div>
    );
}

export default SongsList;
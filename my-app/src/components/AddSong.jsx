import {useState} from 'react';
import Button from '../UI/button/button';
import Input from '../UI/input/input';

function AddSong({ addSong, generateId} ) {
    const [song, setSong] = useState({
        name: '',
        author: '',
        releaseDate: '',
        albumName: '',
        isLiked: false,
    });

    const addNewSong = (event) => {
        event.preventDefault();

        const newSong = {
            ...song,
            id: generateId(),
        };

        addSong(newSong);
    }
    return(
        <form className="create__item">
            <Input type="text"
                    value={song.name}
                    name='name'
                    placeholder="Song..."
                    onChange={(event) => setSong({ ...song, name: event.target.value })}
                    />
            <Input type="text"
                    value={song.author}
                    name='author'
                    placeholder="Author"
                    onChange={(event) => setSong({ ...song, author: event.target.value})}
                    />
            <Input type="text"
                    value={song.releaseDate}
                    name='releaseDate'
                    placeholder="01.01.2021"
                    onChange={(event) => setSong({ ...song, releaseDate: event.target.value})}
                    />
            <Input type="text"
                    value={song.albumName}
                    name='albumName'
                    placeholder="Name album"
                    onChange={(event) => setSong({ ...song, albumName: event.target.value})}
                    />
            <Button type="submit" onClick={addNewSong} customClassName='CreateButton'>Create Song</Button>
        </form>
    );
}

export default AddSong;
import React, {useState, useMemo} from 'react';
import '../src/App.css';
import SongList from './components/SongsList';
import AddSong from './components/AddSong';
import Button from './UI/button/button';
import SongModal from './UI/modal/SongModal';
import Counter from './components/Counter'
import Search from './components/Search';
import { initialSongs } from './songs';
import Filter from './components/Filter';

export const SongContext = React.createContext();

function App() {
  const [songs, setSongs] = useState(initialSongs);
  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  const generateId = () => {
    if(!songs.length) {
      return 1;
    }
    return songs[songs.length - 1].id + 1
  };

  const addSong = (song) => {
    setSongs([...songs, song]);
    setModal(false);
  }

  const deleteSong = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  }

  const setLiked = (songId) => {
    setSongs(songs.map(song => {
      if(songId === song.id){
        return { ...song, isLiked: !song.isLiked };
      }
      return song;
    }));
  }

  const filteredArray = useMemo(() => {
    return songs.filter(song => song.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => new Date(b[filter]) - new Date(a[filter]))
  }, [searchQuery, filter, songs]);

  return (
    <div className="App">
      <div className="control">
        <Button customClassName='OpenModal' onClick={() => setModal(true)}>ADD SONG</Button>
        <Filter filter={filter} setFilter={setFilter} />
        <Search customClassName="Search" searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
			<SongModal visible={modal} setVisible={setModal}>
      <AddSong addSong={addSong} generateId={generateId} songs={songs}/>
			</SongModal>
      <SongContext.Provider value={{ deleteSong, setLiked }}>
        <SongList songs={filteredArray}/>
      </SongContext.Provider>
      <Counter songs={songs}/>
    </div>
  );
}

export default App;

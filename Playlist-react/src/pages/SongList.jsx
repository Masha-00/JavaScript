import React, {useState} from 'react';
import SongList from '../components/SongsList';
import AddSong from '../components/AddSong';
import Button from '../UI/button/button';
import SongModal from '../UI/modal/SongModal';
import Counter from '../components/Counter'
import Search from '../components/Search';
import { initialSongs } from '../songs';
import Filter from '../components/Filter';
import { useSongs } from '../hooks/useSongs';
import { generateId } from '../services/generateId';
import { SongContext } from '../context';

function SongaList() {
  const [songs, setSongs] = useState(initialSongs);
  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const filteredSongs = useSongs(songs, searchQuery, filter );

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

  // const filteredSongs = useSongs(searchQuery, songs);

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
        <SongList songs={filteredSongs}/>
      </SongContext.Provider>
      <Counter songs={songs}/>
    </div>
  );
}

export default SongaList;
import { useState } from 'react';
import SongList from './components/SongsList';
import AddSong from './components/AddSong';
import Counter from './components/Counter'
import Button from './UI/button/button';
import SongModal from './UI/modal/SongModal';
import { initialSongs } from './songs';
import '../src/App.css';

function App() {
  const [songs, setSongs] = useState(initialSongs);
  const [modal, setModal] = useState(false);

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

  return (
    <div className="App">
      <Button customClassName='OpenModal' onClick={() => setModal(true)}>ADD SONG</Button>
			<SongModal visible={modal} setVisible={setModal}>
      <AddSong addSong={addSong} generateId={generateId}/>
			</SongModal>
      <SongList songs={songs}  deleteSong={deleteSong} />
      <Counter/>
    </div>
  );
}

export default App;

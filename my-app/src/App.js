import Header from './components/Header'
import Input from './components/Input'
import AddSong from './components/AddSong'
import Counter from './components/Counter'
import SongsList from './components/SongsList'
import '../src/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Input/>
      <AddSong/>
      <SongsList/>
      <Counter/>
    </div>
  );
}

export default App;

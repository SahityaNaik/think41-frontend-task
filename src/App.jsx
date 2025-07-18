import { useState } from 'react';
import SongList from './components/SongList';
import Player from './components/Player';

const songs = [
  {
    id: 1,
    title: "Chill Beat",
    artist: "Lo-Fi Artist",
    url: "/songs/chill-beat.mp3"
  },
  {
    id: 2,
    title: "Morning Vibes",
    artist: "Smooth Sound",
    url: "/songs/morning-vibes.mp3"
  }
];

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="app">
      <h1>🎵 Music Player</h1>
      <Player song={currentSong} />
      <SongList songs={songs} onSelect={setCurrentSong} />
    </div>
  );
}

export default App;

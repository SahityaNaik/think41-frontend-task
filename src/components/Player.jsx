import { useEffect, useRef } from 'react';

function Player({ song }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [song]);

  return (
    <div className="player">
      <h2>Now Playing</h2>
      <p><strong>{song.title}</strong> by {song.artist}</p>
      <audio ref={audioRef} controls>
        <source src={song.url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Player;

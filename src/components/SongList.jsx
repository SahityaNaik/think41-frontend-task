function SongList({ songs, onSelect }) {
  return (
    <div className="song-list">
      <h3>Playlist</h3>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            <button onClick={() => onSelect(song)}>
              {song.title} - {song.artist}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;

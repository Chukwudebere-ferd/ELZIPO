import { useState, useEffect, useRef } from "react";
import { getNowPlaying } from "../services/spotify";
import "../styles/spotify.css";

const MusicIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const NowPlaying = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const dialogRef = useRef(null);

  useEffect(() => {
    const fetchTrack = async () => {
      const data = await getNowPlaying();
      setTrack(data);
      setLoading(false);
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 30000);
    return () => clearInterval(interval);
  }, []);

  const openDialog = () => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
  };

  if (loading) {
    return <span className="now-playing-empty">Loading…</span>;
  }

  if (!track) {
    return <span className="now-playing-empty">Not playing right now</span>;
  }

  return (
    <>
      <button
        type="button"
        className="now-playing-trigger"
        onClick={openDialog}
        aria-label={track.isPlaying ? `Now playing: ${track.title} by ${track.artist}` : `Last listened to: ${track.title} by ${track.artist}`}
      >
        {track.isPlaying ? (
          <span className="now-playing-wave" aria-hidden="true">
            <span className="wave-bar b-1" />
            <span className="wave-bar b-2" />
            <span className="wave-bar b-3" />
            <span className="wave-bar b-4" />
            <span className="wave-bar b-5" />
          </span>
        ) : (
          <span className="now-playing-icon" aria-hidden="true">
            <MusicIcon />
          </span>
        )}
        <span className="now-playing-text">
          <strong>{track.title}</strong>
          <span className="sep"> · </span>
          {track.artist}
        </span>
      </button>

      <dialog ref={dialogRef} className="now-playing-dialog" aria-label={`${track.isPlaying ? "Now playing" : "Last listened to"}: ${track.title} by ${track.artist}`}>
        <p className="label">{track.isPlaying ? "Now playing" : "Last listened to"}</p>
        <h3>{track.title}</h3>
        <p className="muted" style={{ fontSize: 13 }}>{track.artist}</p>
        {track.albumImageUrl && <img src={track.albumImageUrl} alt={track.album} style={{ marginTop: 12 }} />}
        <div className="platforms">
          <a href={track.songUrl} target="_blank" rel="noopener noreferrer">Spotify</a>
          <a href={track.songUrl} target="_blank" rel="noopener noreferrer">Open</a>
        </div>
        <button type="button" className="close" onClick={closeDialog}>Close</button>
      </dialog>
    </>
  );
};

export default NowPlaying;

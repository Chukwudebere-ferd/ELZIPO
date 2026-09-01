import { useState, useEffect } from "react";
import { getNowPlaying } from "../services/spotify";
import "../styles/spotify.css";

const NowPlaying = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="now-playing">
        <div className="now-playing-bars">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="now-playing-text">Loading...</span>
      </div>
    );
  }

  if (!track) {
    return (
      <div className="now-playing offline">
        <div className="now-playing-dot"></div>
        <span className="now-playing-text">Not playing</span>
      </div>
    );
  }

  return (
    <a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="now-playing"
      title={`Now playing: ${track.title} by ${track.artist}`}
    >
      {track.isPlaying && (
        <div className="now-playing-bars">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {!track.isPlaying && <div className="now-playing-dot"></div>}
      <span className="now-playing-text">
        {track.title} — {track.artist}
      </span>
    </a>
  );
};

export default NowPlaying;

import React, { useRef, useState } from "react";
import "./Songs.css";

const MoodSongs = ({ Songs }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRefs = useRef([]);

  const handlePlay = (index) => {
    // pause all songs
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const audio = audioRefs.current[index];
    if (audio) {
      audio.play();
      setCurrentSong(index);
    }
  };

  const handlePause = (index) => {
    const audio = audioRefs.current[index];
    if (audio) {
      audio.pause();
      setCurrentSong(null);
    }
  };

  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>

      {Songs.map((song, index) => (
        <div key={index} className="wrap">
          <div className="title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="song">
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={song.audio}
            />
            {currentSong === index ? (
              <i
                className="ri-pause-circle-fill pause-btn"
                onClick={() => handlePause(index)}
              ></i>
            ) : (
              <i
                className="ri-play-circle-fill play-btn"
                onClick={() => handlePlay(index)}
              ></i>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;

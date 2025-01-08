import React, { useState, useEffect } from 'react';
import Navbar from './Components/navbar';
import Home from './Components/content';
import Movies from './Components/movies';
import Shows from './Components/Shows';
import Kids from './Components/kids';
import Livetwo from './Components/LIVETWO';
import Album from './Components/navalbums';
import Series from './Components/Series';
import Video from './Components/video';
import Stream from './Components/stream';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  const handleNavClick = (component) => {
    setActiveComponent(component);
    window.history.pushState({ activeComponent: component }, '');
  };

  const handleSongChange = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handleAudioChange = (audio) => {
    setCurrentAudio(audio);
  };

  const togglePlayPause = () => {
    if (currentAudio) {
      isPlaying ? currentAudio.pause() : currentAudio.play();
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state?.activeComponent) {
        setActiveComponent(event.state.activeComponent);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div>
      <Navbar onNavClick={handleNavClick} />
      {activeComponent === 'home' && (
        <>
          <Home 
            onNavClick={handleNavClick} 
            onSongChange={handleSongChange} 
            onAudioChange={handleAudioChange} 
          />
          {currentSong && currentSong.image && (
  <div className="songg">
    <h3>Now Playing</h3>
    <img src={currentSong.image} alt={currentSong.name} /><br/>
    <button onClick={togglePlayPause} className="player-button">
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  </div>
)}

        </>
      )}
      {/* {activeComponent === 'live' && <Livetv />} */}
      {activeComponent === 'vlc' && <Livetwo />}
      {activeComponent === 'Movies' && <Movies />}
      {/* {activeComponent === 'FT' && <FT />} */}
      {activeComponent === 'Shows' && <Shows />}
      {activeComponent === 'Kids' && <Kids />}
      {activeComponent === 'Albums' && <Album />}
      {activeComponent === 'Series' && <Series />}
      {activeComponent === 'Vid' && <Video />}
      {activeComponent === 'stream' && <Stream />}
    </div>
  );
};

export default App;

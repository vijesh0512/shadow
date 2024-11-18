import React, { useState, useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './live.css';
import './album.css';

const shows = [
  {
    name: 'Theatre Print',
    image: 'https://media.istockphoto.com/id/1494642262/photo/people-in-the-cinema-auditorium-with-empty-white-screen.jpg?s=2048x2048&w=is&k=20&c=XLSiHIO02doIcuaB8BJMTcoTsyeQtvbngcQlQZLkEW4=',
    shows: [
      { name: 'Amaran', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzugiP-FGYgjDvKH0orm9a3csrkqljfNSwqVBS9yIeVA3_2EUNNAizHBMD&s=10', link: 'https://pub-c112d6c4191e458db7adfadb97398a27.r2.dev/Kozhipannai_Chelladurai.mp4' },
      { name: 'Bloody Beggar', image: 'https://upload.wikimedia.org/wikipedia/en/4/40/Bloody_Beggar.jpg', link: 'https://tsneh.vercel.app/s-aflbwombc4' },
      { name: 'Brother', image: 'https://timesofindia.indiatimes.com/photo/103798855.cms', link: 'https://tsneh.vercel.app/j-ga7n3btddl' },
    ],
  },
];

const Movies = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoPlayerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (currentVideo) {
      if (playerRef.current) {
        // Reuse existing player instance to update source
        playerRef.current.src([{ src: currentVideo, type: 'video/mp4' }]);
        playerRef.current.play();
      } else {
        // Initialize a new player instance
        playerRef.current = videojs(videoPlayerRef.current, {
          autoplay: true,
          controls: true,
          fluid: true,
          preload: 'auto',
        });

        // Set the initial source
        playerRef.current.src([{ src: currentVideo, type: 'video/mp4' }]);
      }
    }

    // Cleanup the player on unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [currentVideo]);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setCurrentVideo(null); // Reset video on album change
  };

  const handleBackClick = () => {
    setSelectedAlbum(null);
    setCurrentVideo(null); // Reset video on back click
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video.link); // Update current video source
  };

  return (
    <>
      {currentVideo && (
        <div className="plr">
          <div data-vjs-player>
            <video
              ref={videoPlayerRef}
              className="video-js vjs-default-skin"
            ></video>
          </div>
        </div>
      )}
      <div className="content">
        {selectedAlbum ? (
          <div className="album-details">
            <button onClick={handleBackClick} className="back-button">
              Back to Movies
            </button>
            <h2 className="hi">{selectedAlbum.name}</h2>
            <div className="play">
              {selectedAlbum.shows.map((video, index) => (
                <div key={index} className="son" onClick={() => handleVideoClick(video)}>
                  <img src={video.image} alt={video.name} />
                  <p>{video.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div id="channel-player" className="play">
            {shows.map((album, index) => (
              <div key={index} className="son" onClick={() => handleAlbumClick(album)}>
                <img src={album.image} alt={album.name} />
                <p>{album.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Movies;

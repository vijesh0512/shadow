import React, { useState, useEffect } from 'react';
import Plyr from 'plyr';
import './live.css';
import './album.css';
import 'plyr/dist/plyr.css';

const shows = [
  {
    name: 'Harry Potter',
    image: 'https://i5.walmartimages.com/asr/11a9f800-47ff-4ba4-ac8d-43bd0be5c2e4.b86b11aa6cb832d3761845fe5b3076c1.jpeg',
    shows: [
        { name: "Sorcerer's Stone", img: "https://tinyurl.com/7j795tmh", link: "https://tsneh.vercel.app/75rhzaeeyk2t" },
        { name: "Chamber of Secrets", img: "https://tinyurl.com/bd4m5tk8", link: "https://tsneh.vercel.app/6ltfpkrebevz" },
        { name: "Prisoner of Azkaban", img: "https://tinyurl.com/5655uwsu", link: "https://tsneh.vercel.app/bysb4ed82sp6" },
        { name: "Goblet of Fire", img: "https://tinyurl.com/3a8fcukr", link: "https://tsneh.vercel.app/npjd3s7lan6m" },
        { name: "Order of the Phoenix", img: "https://tinyurl.com/2adn39xt", link: "https://tsneh.vercel.app/sgkjswsd-czh" },
        { name: "Half-Blood Prince", img: "https://tinyurl.com/4jm2nnch", link: "https://tsneh.vercel.app/h3rn3rjihw2n" },
        { name: "Deathly Hallows – Part 1", img: "https://tinyurl.com/mw2v2kv7", link: "https://tsneh.vercel.app/c2yaskvyveig" },
        { name: "Deathly Hallows – Part 2", img: "https://tinyurl.com/yjb7jhn4", link: "https://tsneh.vercel.app/vp9mkbibcn6q" },

    ],
  },
  ]
  





const Movies = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumbnail, setThumbnail] = useState(null);
  const playerRef = React.useRef(null);

  useEffect(() => {
    if (currentVideo) {
      setLoading(true); // Show loading spinner when video is changing

      if (playerRef.current) {
        // Update the video source
        playerRef.current.source = {
          type: 'video',
          sources: [
            { src: currentVideo, type: 'video/mp4', size: 720 },
            { src: currentVideo.replace('.mp4', '_480.mp4'), type: 'video/mp4', size: 480 },
             { src: currentVideo.replace('.mp4', '_1080.mp4'), type: 'video/mp4', size: 1080 },
          ],
        };

        playerRef.current.play(); // Ensure the video starts playing automatically
      } else {
        // Initialize Plyr with additional settings
        playerRef.current = new Plyr('.video-player', {
          controls: [
            'play',
            'progress',
            'current-time',
            'mute',
            'volume',
            'captions',
            'settings',
            'pip',
            'airplay',
            'fullscreen',
          ],
          settings: ['quality', 'speed'],
          quality: {
            default: 720,
            options: [1080,720, 480],
            forced: true,
            onChange: (quality) => {
              console.log(`Quality changed to ${quality}`);
            },
          },
          autoplay: true, // Auto play the video once it's loaded
        });

        playerRef.current.source = {
          type: 'video',
          sources: [
            { src: currentVideo, type: 'video/mp4', size: 720 },
            { src: currentVideo.replace('.mp4', '_480.mp4'), type: 'video/mp4', size: 480 },
             { src: currentVideo.replace('.mp4', '_1080.mp4'), type: 'video/mp4', size: 1080 },
          ],
        };

        // Automatically play the video once Plyr is initialized
        playerRef.current.play();
      }

      // Event listener to hide loading when video starts playing
      playerRef.current.on('playing', () => {
        setLoading(false); // Hide loading spinner once the video starts playing
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
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
    setCurrentVideo(video.link); // Set the MP4 video source
    setThumbnail(video.img); // Set the video thumbnail
  };

  return (
    <>
      {currentVideo && (
        <div className="plr">
          {loading && (
            <div className="loading-spinner">
              <div className="spinner"></div> {/* Add spinner styles below */}
            </div>
          )}
          <div className="video-wrapper">
            {/* Show thumbnail while loading */}
            <div className={`video-thumbnail ${loading ? 'visible' : 'hidden'}`}>
              {thumbnail && <img src={thumbnail} alt="Loading..." />}
            </div>
            <video className="video-player" />
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
                  <img src={video.img} alt={video.name} />
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

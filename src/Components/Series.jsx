import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './live.css';
import './album.css';

const shows = [
  {
    name: 'Squid Game',
    image: 'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FjlbrV1Kl4Y8pWXu12SppebRs7On.jpg',
    shows: [
        { name: "Red Light Green Light", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FvMFJS9LIUUAmQ1thq4vJ7iHKwRz.jpg", link: "https://tinyurl.com/5n95a6wf" },
        { name: "Hell", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FuacNwki3PqXEFk9Pal9Ng5NwwAI.jpg", link: "https://tinyurl.com/3pb4h97j" },
        { name: "The man with umbrella", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FxNtgrNEsMXvmRQQtcFuJdbXOjmP.jpg", link: "https://tinyurl.com/5f6zmx3b" },
        { name: "Stick with the team", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F9cUGOdLN4gmnf3b9ILArnJsJI8Q.jpg", link: "https://tinyurl.com/m5x9v2ff" },
        { name: "A Fair World", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F2pE9f6drlF7y9rwUw6dh1w6jF5M.jpg", link: "https://tinyurl.com/ycyn76cc" },
        { name: "Gganbu", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FcohCCQzTe2ncdQczJDUsO0vzxPR.jpg", link: "https://tinyurl.com/4da97enp" },
        { name: "VIPS", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F4pVfv4HaM5QpFJTHm19p2UI0StN.jpg", link: "https://tinyurl.com/mrxbw29s" },
        { name: "Front man", image: "https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FlOgFVmykN9qlpAoiBSIV2lu7XCS.jpg", link: "https://tinyurl.com/3834ytdt" },
        {name:"One lucky day",image:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsKeQbHeEUQLyoSdopa0QXm604cz.jpg',link:'https://tinyurl.com/yphnhscj'},

    ],
  },
  ]
  




const Movies = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (currentVideo) {
      setLoading(true);
    }
  }, [currentVideo]);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setCurrentVideo(null);
  };

  const handleBackClick = () => {
    setSelectedAlbum(null);
    setCurrentVideo(null);
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video.link);
    setThumbnail(video.image);
  };

  return (
    <>
      {currentVideo && (
        <div className="plr">
          {loading && (
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          )}
          <div className="video-wrapper">
            <div className={`video-thumbnail ${loading ? 'visible' : 'hidden'}`}>
              {thumbnail && <img src={thumbnail} alt="Loading..." />}
            </div>
            <ReactPlayer
              url={currentVideo}
              className="video-player"
              playing
              controls
              onReady={() => setLoading(false)}
              onError={() => setLoading(false)}
              width="100%"
              height="100%"
            />
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

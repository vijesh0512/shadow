import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './live.css';
import './album.css';

const shows = [
  {
    name: "GOAT",
    image: 'https://preview.redd.it/goat-first-look-v0-urgbut9pjm9c1.jpeg?width=640&crop=smart&auto=webp&s=30ca2d4168fd1ae05849f1c9d728db87966a3fbc',
    shows: [
        {
          name: "Whistle Podu",
          img: "https://i.ytimg.com/vi/5GSt99nxiJQ/maxresdefault.jpg",
          link: "https://youtu.be/QqEarYb0Uaw"
        },
        {
          name: "Chinna Chinna Knagal",
          img: "https://static.tnn.in/thumb/msid-111192076,width-1280,height-720,resizemode-75/111192076.jpg?quality=100",
          link: "https://youtu.be/EBHfq2oov2I"
        },
        {
          name: "Matta",
          img: "https://i.ytimg.com/vi/lrKE2LzH3CU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCFJwrvCfGXffFbRBk2uzuMGs6tyQ",
          link: "https://youtu.be/IZHGcU0U_W0"
        },
      ] 
  },

];

const Video = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

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
  };

  return (
    <>
      {currentVideo && (
        <div className='plr'>
            <ReactPlayer
            url={currentVideo}
            controls
            playing
            pip={true} // Enable picture-in-picture
            config={{
                file: {
                attributes: {
                    controlsList: 'nodownload' // Remove download button
                }
                }
            }}
/>
        </div>
      )}
      <div className='content'>
        {selectedAlbum ? (
          <div className='album-details'>
            <button onClick={handleBackClick} className='back-button'>Back to Shows</button>
            <h2>{selectedAlbum.name}</h2>
            <div className='play'>
              {selectedAlbum.shows.map((video, index) => (
                <div key={index} className='son' onClick={() => handleVideoClick(video)}>
                  <img src={video.img} alt={video.name} />
                  <p>{video.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div id='channel-player' className='play'>
            {shows.map((album, index) => (
              <div key={index} className='son' onClick={() => handleAlbumClick(album)}>
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

export default Video;

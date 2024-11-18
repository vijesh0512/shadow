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

  {
    name: "Vettaiyan",
    image: 'https://upload.wikimedia.org/wikipedia/en/6/68/Vettaiyan_poster.jpg',
    shows: [
        {
        name: "Manasilaayo",
        img: "https://keralakaumudi.com/web-news/en/2024/09/NMAN0527509/image/thumb/manju-warrier-dance-rajin.1.2895901.webp",
        link: "https://youtu.be/5WsUIeNAtbM"
      },
      {
        name: "Hunter Vantar",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/hunter-vantaar-200457802-16x9_0.jpg?VersionId=Y2YT0bzH2Sdo5Lc_hA.MqEJPNVIZGAwU&size=690:388",
        link: "https://youtu.be/lIwhaTfqwzc"
      },
      ] 
  },

  { 
    name: 'RAYAN', 
    image:'https://m.media-amazon.com/images/M/MV5BODJhYjcwZTktZWY1Yy00ODNlLTg1MDQtOTdmZDliNWIyMmFhXkEyXkFqcGc@._V1_.jpg', 
    shows: [
      {
        name: "Adangatha Asuran",
        img: "https://i.ytimg.com/vi/rsouMX_N56E/maxresdefault.jpg",
        link: "https://youtu.be/gk6Jri1kGTs"
      },
      {
          name: "Water Packet",
          img: "https://tse3.mm.bing.net/th?id=OIP.YLDc6NKQ5q__7-ISeVWeAAHaEK&pid=Api&P=0&h=220",
          link: "https://youtu.be/RgOEKdA2mlw"
        },
        {
          name: "Oh Raya",
          img: "https://m.media-amazon.com/images/M/MV5BODJhYjcwZTktZWY1Yy00ODNlLTg1MDQtOTdmZDliNWIyMmFhXkEyXkFqcGc@._V1_.jpg",
          link: "https://youtu.be/3WAgyvw3RDc"
        },
    ] 
  },

  { 
    name: 'Jailer', 
    image:'https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg', 
    shows: [
      {
        name: "Kavala",
        img: "https://static.toiimg.com/thumb/msid-101548900,width-1280,resizemode-4/101548900.jpg",
        link: "https://youtu.be/lM8h5Mm6ODo"
      },
      {
        name: "Hukum",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/748680-hukum-three_four.jpg?VersionId=helyHPHWgAM4XV_cixrp4PqAnBiz21HM",
        link: "https://youtu.be/gB2zKZxESTg"
      },
      {
        name: "Rathamarey",
        img: "https://media.dailythanthi.com/h-upload/2023/08/05/1430343-jailer-song-07.webp",
        link: "https://youtu.be/nDJ8KgjlzYM"
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

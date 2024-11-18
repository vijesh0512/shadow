import React, { useState, useEffect } from 'react';
import Plyr from 'plyr';
import './live.css';
import './album.css';
<<<<<<< HEAD
import 'plyr/dist/plyr.css';
=======
>>>>>>> ed6bf19eb98e8a03cc35b0363fe763e4081de75f

const shows = [
  {
    name:'Season 3',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9WVfFrWMjrtoI6N4gmZlbf2Oseuu6bLUGafR7CR5NGap2_psoDh1rD5s&s=10',shows:[
      {name:'Day 0',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fgml2ElsU6NFUNVJNTZqNcBUyTAV.jpg',link:'https://dls4.mrfooll.xyz/AgADug2901450'},
      {name:'Day 1',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fkm1gqgF74c8cZMVH6XaMvdYoxo8.jpg',link:'https://dls4.mrfooll.xyz/AgADvA2901441'},
      {name:'Day 2',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fchk6437QStz0wwPOBGHmdRmSwR4.jpg',link:'https://dls4.mrfooll.xyz/AgADxA2901465'},
      {name:'Day 3',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FtGjZTOsigKiVGNjwOlHg6MxVGeJ.jpg',link:'https://dls4.mrfooll.xyz/AgADxg2901493'},
      {name:'Day 4',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7229920.jpg',link:'https://dls4.mrfooll.xyz/AgADxw2901511'},
      {name:'Day 5',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7229922.jpg',link:'https://dls4.mrfooll.xyz/AgADzw2901526'},
      {name:'Day 6',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7229923.jpg',link:'https://dls4.mrfooll.xyz/AgAD0Q2901547'},
      {name:'Day 7',img:'https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fepisodes%2F352080%2F7229924.jpg',link:'https://dls4.mrfooll.xyz/AgADEA2901561'},
    ]
  },
  {
    name: "TCDC",
    image: 'https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg',
    shows:[
      { name: "Finale", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://herokustreamapiiiiiii-75c3359a5ad7.herokuapp.com/AgADYR2510558" },
      { name: "18", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/n5ikl2exctsj" },
      { name: "17", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/wsrhgzd1fky-" },
      { name: "16", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/ysuourwdekzm" },
      { name: "15", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tsneh.vercel.app/eqe9qownfcrw" },
        { name: "14", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/3949z54t" },
        { name: "13", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/cvyv69zr" },
        { name: "12", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/yhrfy8px" },
        { name: "11", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/ye983f8v" },
        { name: "10", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/mryf9sjn" },
        { name: "9", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/4x7vsf4m" },
        { name: "8", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/2xmch459" },
        { name: "7", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/mv87uuzj" },
        { name: "6", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/yc4vycrz" },
        { name: "5", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/yyps5js4" },
        { name: "4", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/afddfmbf" },
        { name: "3", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/kewzmddx" },
        { name: "2", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/zfn39fu7" },
        { name: "1", img: "https://sund-images.sunnxt.com/191731/640x360_TopCookuDupeCookuSeason1_191731_f0cdad79-9a4d-40c8-966c-e17449f0fd96.jpg", link: "https://tinyurl.com/y872r5f8" },

    ]
  },
];


const Movies = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);
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
            options: [720, 480],
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
            <video className="video-player"></video>
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

<<<<<<< HEAD
export default Movies;
=======
export default Movies;
>>>>>>> ed6bf19eb98e8a03cc35b0363fe763e4081de75f
